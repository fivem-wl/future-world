import { AttachDetail } from './types';

const key = 'weaponOnBack_attachDetails';

/**
 * 用于在服务器及所有客户端之间共享的 attachDetails, 使用 playerServerId
 *
 */
export class NetworkAttachDetailsCollection {
  public get(playerServerId: number): AttachDetail[] {
    const stateBag = Player(playerServerId);

    // noinspection UnnecessaryLocalVariableJS
    const attachDetails: AttachDetail[] = stateBag.state[key] ?? [];

    return attachDetails;
  }

  public set(playerServerId: number, attachDetails: AttachDetail[]): void {
    const stateBag = Player(playerServerId);

    stateBag.state.set(key, attachDetails, true);
  }
}
