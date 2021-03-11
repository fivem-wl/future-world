import {Wait} from 'fivem-js';
import {WeaponOnBack} from './weaponOnBack';
import {WeaponOnBackNetwork} from './weaponOnBackNetwork';
import {ActionSetHelper} from './actionSetHelper';

const globalResourceName = 'future-world';
const resourceName = 'weapon-on-back';

const actionSetHelper = new ActionSetHelper();
const weaponOnBack = new WeaponOnBack();
const weaponOnBackNetwork = new WeaponOnBackNetwork();

setTick(async () => {
    await Wait(200);

    await weaponOnBack.detectThisPlayerWeaponChangeAsync();
    await weaponOnBack.updateThisPlayerAsync();
})

setTick(async () => {
    await Wait(1000);

    await weaponOnBackNetwork.uploadLocalData();
    await weaponOnBackNetwork.updateAllExceptThisPlayerAsync();
})

on('onResourceStart', (resource: string) => {
    if (resource === resourceName) {
        console.log('[INFO]weapon-on-back loading...');
    }
});

on('onResourceStop', (resource: string) => {
    if (resource === resourceName) {
        console.log(`[INFO]${resourceName} unloading...`);
        actionSetHelper.cleanup();
    }
});

on('onClientResourceStart', (resource: string) => {
    if (resource === resourceName) {
        console.log(`[${resourceName}]Loaded, part of ${globalResourceName}`);
    }
});

on('onClientResourceStop', (resource: string) => {
    if (resource === resourceName) {
        console.log(`[${resourceName}]Unloaded, part of ${globalResourceName}`);
    }
});
