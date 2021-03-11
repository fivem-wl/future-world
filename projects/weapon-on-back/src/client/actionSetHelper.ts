import { WeaponByAttachPointByPed } from './weaponByAttachPointByPed';
import { ActionSet, ActionType, PedHandle, WeaponHandle } from './types';
import { deleteEntity, requestWeaponAsset } from './utils';

export class ActionSetHelper {
  private readonly weaponByAttachPointByPed = new WeaponByAttachPointByPed();

  private static async createAndAttachWeaponByActionSet(
    ped: PedHandle,
    actionSet: ActionSet
  ): Promise<WeaponHandle | undefined> {
    const {
      // attachPoint,
      weaponHash,
      attachBone,
      attachPosition,
      attachRotation,
      weaponComponents,
      weaponTint,
    } = actionSet.attachDetail;

    const isWeaponAssetLoaded = await requestWeaponAsset(weaponHash, 1000, 5);

    if (!isWeaponAssetLoaded) {
      return;
    }

    const [x, y, z] = GetEntityCoords(ped, false);

    const weaponHandle = CreateWeaponObject(weaponHash, 1, x, y, z - 10, true, 1.0, 0);

    for (const weaponComponent of weaponComponents) {
      GiveWeaponComponentToWeaponObject(weaponHandle, weaponComponent);
    }

    SetWeaponObjectTintIndex(weaponHandle, weaponTint);

    const boneIndex = GetPedBoneIndex(ped, attachBone);

    AttachEntityToEntity(
      weaponHandle,
      ped,
      boneIndex,
      attachPosition.x,
      attachPosition.y,
      attachPosition.z,
      attachRotation.x,
      attachRotation.y,
      attachRotation.z,
      false,
      false,
      false,
      true,
      2,
      true
    );

    return weaponHandle;
  }

  public cleanup(): void {
    this.weaponByAttachPointByPed.cleanup();
  }

  public async updateGameByActionSet(ped: PedHandle, actionSet: ActionSet): Promise<void> {
    const { attachPoint } = actionSet.attachDetail;

    const weapon = this.weaponByAttachPointByPed.get(ped, attachPoint);

    const newWeapon = await ActionSetHelper.createAndAttachWeaponByActionSet(ped, actionSet);

    switch (actionSet.actionType) {
      case ActionType.create:
      case ActionType.update:
        if (weapon) {
          deleteEntity(weapon);
          this.weaponByAttachPointByPed.delete(ped, attachPoint);
        }

        if (newWeapon) {
          this.weaponByAttachPointByPed.set(ped, attachPoint, newWeapon);
        }

        break;
      case ActionType.remove:
        if (weapon) {
          deleteEntity(weapon);
          this.weaponByAttachPointByPed.delete(ped, attachPoint);
        }

        break;
      default:
        break;
    }
  }
}
