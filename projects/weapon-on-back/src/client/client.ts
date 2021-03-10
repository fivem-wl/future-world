import {Game, WeaponHash, enumValues, DlcWeaponData, Wait} from 'fivem-js';
import {WeaponOnBack} from './weaponOnBack';

setImmediate(() => {
    emitNet('helloserver');
})

onNet('helloclient', message => {
    console.log(`The server replied: ${message}`);
});

const weaponOnBack = new WeaponOnBack();

setTick(async () => {
    await Wait(0);

    await weaponOnBack.detectThisPlayerWeaponChangeAsync();
    await weaponOnBack.updateGameplayAsync();
})

on('onResourceStop', () => {
    weaponOnBack.cleanup();
});


// RegisterCommand(
//     'test1',
//     async () => weaponOnBack.detectThisPlayerWeaponChangeAsync(),
//     false
// );
//
// RegisterCommand(
//     'test2',
//     async () => weaponOnBack.updateGameplayAsync(),
//     false
// );

RegisterCommand(
    'giveWeapon',
    async () => {
        for (let hash of enumValues(WeaponHash)) {
            // cfx.Game.PlayerPed.Weapons.give(hash, 9999, false, false);
            Game.PlayerPed.giveWeapon(hash, 9999, false, false);
        }

        for (let hash of DlcWeaponData.keys()) {
            // cfx.Game.PlayerPed.Weapons.give(hash, 9999, false, false);
            Game.PlayerPed.giveWeapon(hash, 9999, false, false);
        }
    },
    false
);

RegisterCommand(
    'setLivery',
    async (source: number, args: string[]) => {
        if (args.length !== 2) {
            console.log('invalid input');
            return;
        }

        const liveryId = parseInt(args[0]);
        const colorId = parseInt(args[1]);

        console.log(liveryId, ' ', colorId);

        Game.PlayerPed.Weapons.Current.setLivery(liveryId, colorId);
    },
    false
);
