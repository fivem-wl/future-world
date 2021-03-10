import {ActionSet, ActionType, AttachDetail} from './types';
import {AttachDetailHelper} from './attachDetailHelper';

export class ActionParser {
    private readonly snapshotAttachDetails: AttachDetail[];

    constructor(snapshotAttachDetails: AttachDetail[]) {
        this.snapshotAttachDetails = snapshotAttachDetails;
    }

    /**
     * parse attachInfo to actionSet
     * 1. not existed + unarmed = do nothing
     * 2. only not existed = create
     * 3. differ + unarmed = remove
     * 4. only differ = update
     * 5. otherwise, does nothing
     *
     * @param attachDetail
     * @private
     */
    private parseSingle(attachDetail: AttachDetail): ActionSet {
        const isUnarmed = AttachDetailHelper.isUnarmed(attachDetail);

        const cmpAttachInfo = this.snapshotAttachDetails.find(x => x.attachPoint === attachDetail.attachPoint);

        // not existed + unarmed = do nothing
        if (!cmpAttachInfo && isUnarmed) {
            return {
                actionType: ActionType.none
            };
        }

        // only not existed = create
        if (!cmpAttachInfo) {
            return {
                actionType: ActionType.create,
                attachDetail: attachDetail
            };
        }

        const isDiffer = AttachDetailHelper.isDiffer(attachDetail, cmpAttachInfo);

        // differ + unarmed = remove
        if (isDiffer && isUnarmed) {
            return {
                actionType: ActionType.remove,
                attachDetail: attachDetail
            }
        }

        // only differ = update
        if (isDiffer) {
            return {
                actionType: ActionType.update,
                attachDetail: attachDetail
            };
        }

        // otherwise, does nothing
        return {actionType: ActionType.none};
    }

    /**
     * parse
     *
     * @param attachDetails
     */
    public parse(attachDetails: AttachDetail[]): ActionSet[] {
        const actionSets: ActionSet[] = [];

        for (const attachInfo of attachDetails) {
            const actionSet = this.parseSingle(attachInfo);
            if (actionSet.actionType !== ActionType.none) {
                actionSets.push(actionSet);
            }
        }

        return actionSets;
    }
}
