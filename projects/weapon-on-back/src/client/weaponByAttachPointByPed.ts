import { PedHandle, AttachPoint, WeaponHandle } from './types';
import { deleteEntity } from './utils';

export class WeaponByAttachPointByPed {
  private static readonly weaponByAttachPointByPed = new Map<PedHandle, Map<AttachPoint, WeaponHandle>>();

  private static getAll(ped: PedHandle): Map<AttachPoint, WeaponHandle> {
    let weaponByAttachPoint = WeaponByAttachPointByPed.weaponByAttachPointByPed.get(ped);

    if (!weaponByAttachPoint) {
      weaponByAttachPoint = new Map<AttachPoint, WeaponHandle>();
      WeaponByAttachPointByPed.weaponByAttachPointByPed.set(ped, weaponByAttachPoint);
    }

    return weaponByAttachPoint;
  }

  public get(ped: PedHandle, attachPoint: AttachPoint): WeaponHandle {
    const weaponByAttachPoint = WeaponByAttachPointByPed.getAll(ped);

    return weaponByAttachPoint.get(attachPoint);
  }

  public delete(ped: PedHandle, attachPoint: AttachPoint): void {
    const weaponByAttachPoint = WeaponByAttachPointByPed.getAll(ped);

    weaponByAttachPoint.delete(attachPoint);
  }

  public set(ped: PedHandle, attachPoint: AttachPoint, weapon: WeaponHandle): void {
    const weaponByAttachPoint = WeaponByAttachPointByPed.getAll(ped);

    weaponByAttachPoint.set(attachPoint, weapon);
  }

  public cleanup(): void {
    for (const weaponByAttachPoint of WeaponByAttachPointByPed.weaponByAttachPointByPed.values()) {
      for (const weapon of weaponByAttachPoint.values()) {
        deleteEntity(weapon);
      }
    }
  }
}
