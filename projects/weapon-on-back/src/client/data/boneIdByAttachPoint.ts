import {AttachPoint} from '../types';
import {Bone} from 'fivem-js';

const boneIdByAttachPoint = new Map<AttachPoint, Bone>([
    [AttachPoint.Invalid, Bone.SKEL_ROOT],
    [AttachPoint.Left, Bone.RB_L_ThighRoll],
    [AttachPoint.Right, Bone.SKEL_Pelvis],
    [AttachPoint.Spine, Bone.SKEL_Spine2],
]);

export class BoneIdByAttachPoint {
    public get(attachPoint: AttachPoint): Bone {
        return boneIdByAttachPoint.get(attachPoint) ?? Bone.SKEL_ROOT;
    }
}
