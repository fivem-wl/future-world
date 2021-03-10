import {AttachDetail, PedHandle} from './types';

const snapshotAttachDetailsByPed = new Map<PedHandle, AttachDetail[]>();

export class SnapshotAttachDetailCollection {
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
