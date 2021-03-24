import { WeaponHash } from 'fivem-js';
import { AttachPointByWeapon } from './data';
import { AttachPoint, PedHandle } from './types';
import { AttachDetailsCollection } from './attachDetailsCollection';
import { ActionParser } from './actionParser';
import { SnapshotAttachDetailsCollection } from './snapshotAttachDetailsCollection';
import { ActionSetHelper } from './actionSetHelper';

export class WeaponOnBack {
  private prevWeapon: WeaponHash = WeaponHash.Unarmed;

  private readonly attachPointByWeapon = new AttachPointByWeapon();

  private readonly attachDetailsCollection = new AttachDetailsCollection();

  private readonly snapshotAttachDetailsCollection = new SnapshotAttachDetailsCollection();

  private readonly actionSetHelper = new ActionSetHelper();

  /**
   * Player weapon change detection
   *
   */
  async detectThisPlayerWeaponChangeAsync(): Promise<void> {
    const ped: PedHandle = GetPlayerPed(-1);

    const prevWeapon = this.prevWeapon;
    const currWeapon = GetSelectedPedWeapon(ped) >>> 0;

    // same weapon = no switch
    if (prevWeapon === currWeapon) {
      this.prevWeapon = currWeapon;
      return;
    }

    const prevAttachPoint = this.attachPointByWeapon.get(prevWeapon);
    const currAttachPoint = this.attachPointByWeapon.get(currWeapon);

    // 1. currentAttachPoint is Invalid -> just switch weapon
    // 2. switch weapon if same attachPoint
    // 3. otherwise, set current to unarmed, switch previous
    if (currAttachPoint === AttachPoint.Invalid) {
      this.attachDetailsCollection.set(ped, prevAttachPoint, prevWeapon);
    } else if (prevAttachPoint === currAttachPoint) {
      this.attachDetailsCollection.set(ped, prevAttachPoint, prevWeapon);
    } else {
      const attachDetail = this.attachDetailsCollection.get(ped, currAttachPoint);

      // remove if same
      if (attachDetail.weaponHash === currWeapon) {
        this.attachDetailsCollection.set(ped, currAttachPoint, WeaponHash.Unarmed);
      }

      this.attachDetailsCollection.set(ped, prevAttachPoint, prevWeapon);
    }

    this.prevWeapon = currWeapon ?? WeaponHash.Unarmed;
  }

  public async updateThisPlayerAsync(): Promise<void> {
    const ped: PedHandle = GetPlayerPed(-1);

    const snapshotAttachDetails = this.snapshotAttachDetailsCollection.get(ped);
    const newestAttachDetails = this.attachDetailsCollection.getAll(ped);

    const parser = new ActionParser(snapshotAttachDetails);
    const actionSets = parser.parse(newestAttachDetails);

    this.snapshotAttachDetailsCollection.set(ped, newestAttachDetails);

    // for (const actionSet of actionSets) {
    //     console.log(
    //         'actionSet',
    //         ActionType[actionSet.actionType],
    //         AttachPoint[actionSet.attachDetail.attachPoint],
    //         WeaponHash[actionSet.attachDetail.weaponHash]);
    // }

    for (const actionSet of actionSets) {
      await this.actionSetHelper.updateGameByActionSet(ped, actionSet);
    }
  }
}
