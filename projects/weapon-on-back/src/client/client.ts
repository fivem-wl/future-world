import { Wait } from 'fivem-js';
import { WeaponOnBack } from './weaponOnBack';
import { WeaponOnBackNetwork } from './weaponOnBackNetwork';

const globalResourceName = 'future-world';

const weaponOnBack = new WeaponOnBack();
const weaponOnBackNetwork = new WeaponOnBackNetwork();

const localIntervalMs = parseInt(GetResourceMetadata(GetCurrentResourceName(), 'local_interval_ms', 0)) ?? 200;

const networkIntervalMs = parseInt(GetResourceMetadata(GetCurrentResourceName(), 'network_interval_ms', 0)) ?? 1000;

setTick(async () => {
  await Wait(localIntervalMs);

  await weaponOnBack.detectThisPlayerWeaponChangeAsync();
  await weaponOnBack.updateThisPlayerAsync();
});

setTick(async () => {
  await Wait(networkIntervalMs);

  await weaponOnBackNetwork.uploadLocalData();
  await weaponOnBackNetwork.updateAllExceptThisPlayerAsync();
});

on('onClientResourceStart', (resource: string) => {
  if (resource === GetCurrentResourceName()) {
    console.log(`[${resource}]Loaded, part of ${globalResourceName}`);
  }
});

on('onClientResourceStop', (resource: string) => {
  if (resource === GetCurrentResourceName()) {
    console.log(`[${resource}]Unloaded, part of ${globalResourceName}`);
  }
});
