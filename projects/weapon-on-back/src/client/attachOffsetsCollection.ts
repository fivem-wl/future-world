import { Vector3, WeaponHash } from 'fivem-js';

enum VectorType {
  Pos,
  Rot
}

/**
 * max position offset
 *
 */
const maxPositionOffset = 0.3;

/**
 * max rotation offset
 *
 */
const maxRotationOffset = 360;

/**
 * cached position offsets
 */
const cachedPositionOffsets = new Map<WeaponHash, Vector3>();

/**
 * cached rotation offsets
 */
const cachedRotationOffsets = new Map<WeaponHash, Vector3>();

/**
 * get ResourceKvp key
 *
 * @param weapon
 * @param vectorType
 */
const getKey = (weapon: WeaponHash, vectorType: VectorType): string =>
  `${GetCurrentResourceName()}_${vectorType}_${weapon}`;

/**
 * compress Vector3 to string
 *
 * @param offset
 */
const compress = (offset: Vector3): string =>
  `${offset.x.toPrecision(2)}|${offset.y.toPrecision(2)}|${offset.z.toPrecision(2)}`;

/**
 * decompress string to Vector3
 *
 * @param compressed
 */
const decompress = (compressed: string): Vector3 => {
  const [x, y, z] = compressed.split('|').map(n => parseFloat(n));
  return new Vector3(x, y, z);
};

/**
 * set offset to cache and ResourceKvp
 *
 * @param weapon
 * @param offset
 * @param vectorType
 */
const set = (weapon: WeaponHash, offset: Vector3, vectorType: VectorType): void => {
  const key = getKey(weapon, vectorType);
  const cachedOffsets = vectorType === VectorType.Pos ? cachedPositionOffsets : cachedRotationOffsets;
  const maxOffset = vectorType === VectorType.Pos ? maxPositionOffset : maxRotationOffset;

  const trimmedOffset = new Vector3(
    -maxOffset < offset.x && offset.x < maxOffset ? offset.x : maxOffset,
    -maxOffset < offset.y && offset.y < maxOffset ? offset.y : maxOffset,
    -maxOffset < offset.z && offset.z < maxOffset ? offset.z : maxOffset
  );

  const compressed = compress(trimmedOffset);

  console.log('set', key, offset.x, offset.y, offset.z, WeaponHash[weapon], VectorType[vectorType], compressed);

  SetResourceKvp(key, compressed);

  cachedOffsets.set(weapon, trimmedOffset);
};

/**
 * get offset from cache, fetch from ResourceKvp if not existed, return Vector3.Zero if both not existed
 *
 * @param weapon
 * @param vectorType
 */
const get = (weapon: WeaponHash, vectorType: VectorType): Vector3 => {
  const cachedOffsets = vectorType === VectorType.Pos ? cachedPositionOffsets : cachedRotationOffsets;

  let offset = cachedOffsets.get(weapon);

  if (!offset) {
    const key = getKey(weapon, vectorType);

    const compressed = GetResourceKvpString(key);

    offset = compressed ? decompress(compressed) : new Vector3(0, 0, 0);

    cachedOffsets.set(weapon, offset);
  }

  return offset;
};

export class AttachPositionOffsetCollection {
  public get(weapon: WeaponHash): Vector3 {
    return get(weapon, VectorType.Pos);
  }

  public set(weapon: WeaponHash, position: Vector3): void {
    set(weapon, position, VectorType.Pos);
  }
}

export class AttachRotationOffsetCollection {
  public get(weapon: WeaponHash): Vector3 {
    return get(weapon, VectorType.Rot);
  }

  public set(weapon: WeaponHash, rotation: Vector3): void {
    set(weapon, rotation, VectorType.Rot);
  }
}
