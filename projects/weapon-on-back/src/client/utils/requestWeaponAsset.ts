import { Wait, WeaponHash } from 'fivem-js';

export async function requestWeaponAsset(hash: WeaponHash, interval: number, maxRetry: number): Promise<boolean> {
  if (HasWeaponAssetLoaded(hash)) {
    return true;
  }

  RequestWeaponAsset(hash, 31, 0);

  let count = 0;
  while (!HasWeaponAssetLoaded(hash)) {
    RequestWeaponAsset(hash, 31, 0);

    if (count++ > maxRetry) {
      console.log(WeaponHash[hash], 'request failed');
      return false;
    }

    await Wait(interval);
  }

  return true;
}
