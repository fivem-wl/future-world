import { AttachDetail, PedHandle } from './types';

const snapshotAttachDetailsByPed = new Map<PedHandle, AttachDetail[]>();

/**
 * 上一次对比 attachDetails 的快照 (本地或者网络)
 *
 */
export class SnapshotAttachDetailsCollection {
  public get(ped: PedHandle): AttachDetail[] {
    let snapshot = snapshotAttachDetailsByPed.get(ped);

    if (!snapshot) {
      snapshot = [];
      snapshotAttachDetailsByPed.set(ped, snapshot);
    }

    return snapshot;
  }

  public set(ped: PedHandle, attachDetails: AttachDetail[]): void {
    snapshotAttachDetailsByPed.set(ped, attachDetails);
  }
}
