import { AttachDetailsCollection } from './attachDetailsCollection';
import { SnapshotAttachDetailsCollection } from './snapshotAttachDetailsCollection';
import { PedHandle } from './types';
import { NetworkAttachDetailsCollection } from './networkAttachDetailsCollection';
import { ActionParser } from './actionParser';
import { ActionSetHelper } from './actionSetHelper';

export class WeaponOnBackNetwork {
  private readonly attachDetailCollection = new AttachDetailsCollection();

  private readonly snapshotAttachDetailsCollection = new SnapshotAttachDetailsCollection();

  private readonly networkAttachDetailsCollection = new NetworkAttachDetailsCollection();

  private readonly actionSetHelper = new ActionSetHelper();

  public uploadLocalData(): void {
    const ped: PedHandle = PlayerPedId();

    const snapshotAttachDetails = this.snapshotAttachDetailsCollection.get(ped);
    const newestAttachDetails = this.attachDetailCollection.getAll(ped);

    const actionParser = new ActionParser(snapshotAttachDetails);
    const isAnyDifference = actionParser.isAnyDifference(newestAttachDetails);

    if (isAnyDifference) {
      const playerServerId = GetPlayerServerId(PlayerId());
      this.networkAttachDetailsCollection.set(playerServerId, newestAttachDetails);
    }
  }

  async updateAllExceptThisPlayerAsync(): Promise<void> {
    // this is player index
    const playerIndexes = GetActivePlayers() as number[];

    const playerInfo = playerIndexes
      .filter((x) => x !== PlayerId())
      .map((x) => ({ playerId: x, playerServerId: GetPlayerServerId(x), playerPedHandle: GetPlayerPed(x) }));

    for (const { playerServerId, playerPedHandle } of playerInfo) {
      const snapshotAttachDetails = this.snapshotAttachDetailsCollection.get(playerPedHandle);
      const networkAttachDetails = this.networkAttachDetailsCollection.get(playerServerId);

      const parser = new ActionParser(snapshotAttachDetails);
      const actionSets = parser.parse(networkAttachDetails);

      this.snapshotAttachDetailsCollection.set(playerPedHandle, networkAttachDetails);

      for (const actionSet of actionSets) {
        await this.actionSetHelper.updateGameByActionSet(playerPedHandle, actionSet);
      }
    }
  }
}
