import { Vector3, Wait } from 'fivem-js';
import { WeaponOnBack } from './weaponOnBack';
import { WeaponOnBackNetwork } from './weaponOnBackNetwork';
import { AttachPositionOffsetCollection, AttachRotationOffsetCollection } from './attachOffsetsCollection';
import { WeaponByAttachPointByPed } from './weaponByAttachPointByPed';

const globalResourceName = 'future-world';

const weaponByAttachPointByPed = new WeaponByAttachPointByPed();

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
  await Wait(localIntervalMs);

  await weaponByAttachPointByPed.removeUnusedEntitiesAsync();
});

setTick(async () => {
  await Wait(networkIntervalMs);

  await weaponOnBackNetwork.uploadLocalData();
  await weaponOnBackNetwork.updateAllExceptThisPlayerAsync();
});

RegisterCommand(
  'wob',
  (source: number, args: string) => {
    if (args.length !== 4) {
      console.log('Invalid input');
      return;
    }

    const offsetName: 'pos' | 'rot' | string = args[0].toLowerCase();
    const offsetX = parseFloat(args[1]);
    const offsetY = parseFloat(args[2]);
    const offsetZ = parseFloat(args[3]);

    if (offsetName !== 'pos' && offsetName !== 'rot') {
      console.log('Invalid input');
      return;
    }

    const currWeapon = GetSelectedPedWeapon(PlayerPedId()) >>> 0;
    const offset = new Vector3(offsetX, offsetY, offsetZ);

    if (offsetName === 'pos') {
      const offsetCollection = new AttachPositionOffsetCollection();
      offsetCollection.set(currWeapon, offset);
    } else {
      const offsetCollection = new AttachRotationOffsetCollection();
      offsetCollection.set(currWeapon, offset);
    }
  },
  false
);

on('onResourceStop', (resource: string) => {
  if (resource === GetCurrentResourceName()) {
    // clean up created weapon assets
    weaponByAttachPointByPed.cleanup();
  }
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
