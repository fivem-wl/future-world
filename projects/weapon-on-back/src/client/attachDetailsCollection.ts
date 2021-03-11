import { Vector3, Weapon, WeaponHash, WeaponTint } from 'fivem-js';
import { PedHandle } from 'pedHandle';
import { AttachDetail, AttachPoint } from './types';
import { AttachRotationByWeapon, AttachPositionByWeapon, BoneIdByAttachPoint } from './data';
import { AttachPositionOffsetCollection, AttachRotationOffsetCollection } from './attachOffsetsCollection';

/**
 * 保存 Ped 最近的 attachDetails
 *
 */
export class AttachDetailsCollection {
  private static readonly attachDetailsByPed = new Map<PedHandle, Map<AttachPoint, AttachDetail>>();

  private static readonly boneIdByAttachPoint = new BoneIdByAttachPoint();

  private static readonly attachPositionByWeapon = new AttachPositionByWeapon();
  private static readonly attachRotationByWeapon = new AttachRotationByWeapon();

  private static readonly attachPositionOffsetCollection = new AttachPositionOffsetCollection();
  private static readonly attachRotationOffsetCollection = new AttachRotationOffsetCollection();

  /**
   * create default and return
   *
   * @param ped
   */
  public static createDefaultAndReturn(ped: PedHandle): Map<AttachPoint, AttachDetail> {
    let attachDetails = AttachDetailsCollection.attachDetailsByPed.get(ped);

    if (!attachDetails) {
      attachDetails = new Map<AttachPoint, AttachDetail>([
        [
          AttachPoint.Invalid,
          {
            attachPoint: AttachPoint.Invalid,
            weaponHash: WeaponHash.Unarmed,
            weaponTint: WeaponTint.Normal,
            weaponComponents: [],
            attachBone: AttachDetailsCollection.boneIdByAttachPoint.get(AttachPoint.Invalid),
            attachPosition: new Vector3(0, 0, 0),
            attachRotation: new Vector3(0, 0, 0),
          },
        ],
        [
          AttachPoint.Left,
          {
            attachPoint: AttachPoint.Left,
            weaponHash: WeaponHash.Unarmed,
            weaponTint: WeaponTint.Normal,
            weaponComponents: [],
            attachBone: AttachDetailsCollection.boneIdByAttachPoint.get(AttachPoint.Left),
            attachPosition: new Vector3(0, 0, 0),
            attachRotation: new Vector3(0, 0, 0),
          },
        ],
        [
          AttachPoint.Right,
          {
            attachPoint: AttachPoint.Right,
            weaponHash: WeaponHash.Unarmed,
            weaponTint: WeaponTint.Normal,
            weaponComponents: [],
            attachBone: AttachDetailsCollection.boneIdByAttachPoint.get(AttachPoint.Right),
            attachPosition: new Vector3(0, 0, 0),
            attachRotation: new Vector3(0, 0, 0),
          },
        ],
        [
          AttachPoint.Spine,
          {
            attachPoint: AttachPoint.Spine,
            weaponHash: WeaponHash.Unarmed,
            weaponTint: WeaponTint.Normal,
            weaponComponents: [],
            attachBone: AttachDetailsCollection.boneIdByAttachPoint.get(AttachPoint.Spine),
            attachPosition: new Vector3(0, 0, 0),
            attachRotation: new Vector3(0, 0, 0),
          },
        ],
      ]);

      AttachDetailsCollection.attachDetailsByPed.set(ped, attachDetails);
    }

    return attachDetails;
  }

  /**
   * get, create default if not existed
   *
   * @param ped
   * @param attachPoint
   */
  public get(ped: PedHandle, attachPoint: AttachPoint): AttachDetail {
    let attachDetails = AttachDetailsCollection.attachDetailsByPed.get(ped);

    if (!attachDetails) {
      attachDetails = AttachDetailsCollection.createDefaultAndReturn(ped);
    }

    return attachDetails.get(attachPoint);
  }

  /**
   * get all, create default if not existed
   *
   * @param ped
   */
  public getAll(ped: PedHandle): AttachDetail[] {
    let attachDetails = AttachDetailsCollection.attachDetailsByPed.get(ped);

    if (!attachDetails) {
      attachDetails = AttachDetailsCollection.createDefaultAndReturn(ped);
    }

    return [...attachDetails.values()];
  }

  /**
   * set
   *
   * @param ped
   * @param attachPoint
   * @param weapon
   */
  public set(ped: PedHandle, attachPoint: AttachPoint, weapon: WeaponHash): void {
    const hasWeapon = HasPedGotWeapon(ped, weapon, false);

    // if player does not have this weapon, does nothing
    if (!hasWeapon) {
      return;
    }

    // construct weaponHash
    const weaponHash = weapon;

    // construct tint
    const weaponTint = (GetPedWeaponTintIndex(ped, weapon) ?? WeaponTint.Normal) as WeaponTint;

    // construct components
    const weaponComponents = Weapon.getWeaponComponentHashes(weapon).filter((component) =>
      HasPedGotWeaponComponent(ped, weapon, component)
    );
    // .filter(component =>
    //     HasPedGotWeaponComponent(ped, weapon, component) &&
    //     IsPedWeaponComponentActive(ped, weapon, component));

    // construct bone
    const attachBone = AttachDetailsCollection.boneIdByAttachPoint.get(attachPoint);

    // construct offset
    const position = AttachDetailsCollection.attachPositionByWeapon.get(weapon);
    const rotation = AttachDetailsCollection.attachRotationByWeapon.get(weapon);

    const positionOffset = AttachDetailsCollection.attachPositionOffsetCollection.get(weapon);
    const rotationOffset = AttachDetailsCollection.attachRotationOffsetCollection.get(weapon);

    const attachPosition = new Vector3(
      position.x + positionOffset.x,
      position.y + positionOffset.y,
      position.z + positionOffset.z);

    const attachRotation = new Vector3(
      rotation.x + rotationOffset.x,
      rotation.y + rotationOffset.y,
      rotation.z + rotationOffset.z);

    // construct
    const attachDetail: AttachDetail = {
      attachPoint,
      weaponHash,
      weaponTint,
      weaponComponents,
      attachBone,
      attachPosition,
      attachRotation,
    };

    // set
    let attachDetails = AttachDetailsCollection.attachDetailsByPed.get(ped);

    if (!attachDetails) {
      attachDetails = AttachDetailsCollection.createDefaultAndReturn(ped);
    }

    attachDetails.set(attachPoint, attachDetail);
  }
}
