import {Bone, WeaponComponentHash, WeaponHash, WeaponTint} from 'fivem-js';
import {AttachPoint, AttachPosition, AttachRotation} from './index';

export interface AttachDetail {
    readonly attachPoint: AttachPoint;
    readonly weaponHash: WeaponHash;
    readonly weaponTint: WeaponTint;
    readonly weaponComponents: WeaponComponentHash[];
    readonly attachBone: Bone;
    readonly attachPosition: AttachPosition;
    readonly attachRotation: AttachRotation;
}
