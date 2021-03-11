import { WeaponHash } from 'fivem-js';
import { AttachDetail } from './types';

export class AttachDetailHelper {
  public static isUnarmed(attachDetail: AttachDetail): boolean {
    return !attachDetail.weaponHash || attachDetail.weaponHash === WeaponHash.Unarmed;
  }

  public static isDiffer(a: AttachDetail, b: AttachDetail): boolean {
    return (
      a.attachPoint !== b.attachPoint ||
      a.weaponHash !== b.weaponHash ||
      a.weaponTint !== b.weaponTint ||
      a.attachBone !== b.attachBone ||
      a.attachPosition.x.toPrecision(2) !== b.attachPosition.x.toPrecision(2) ||
      a.attachPosition.y.toPrecision(2) !== b.attachPosition.y.toPrecision(2) ||
      a.attachPosition.z.toPrecision(2) !== b.attachPosition.z.toPrecision(2) ||
      a.attachRotation.z.toPrecision(2) !== b.attachRotation.z.toPrecision(2) ||
      a.attachRotation.z.toPrecision(2) !== b.attachRotation.z.toPrecision(2) ||
      a.attachRotation.z.toPrecision(2) !== b.attachRotation.z.toPrecision(2) ||
      a.weaponComponents.some((x) => b.weaponComponents.indexOf(x) < 0)
    );
  }
}
