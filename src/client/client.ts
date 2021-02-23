import * as cfx from 'fivem-js';

setImmediate(() => {
    emitNet('helloserver');
})

onNet('helloclient', message => {
    console.log(`The server replied: ${message}`);
});

RegisterCommand(
    'adder',
    async (source: number, args: string[]) => {
        const vehicle = await cfx.World.createVehicle(
            new cfx.Model(`adder`),
            new cfx.Vector3(1, 2, 3),
            4
        );
        cfx.Game.PlayerPed.setIntoVehicle(vehicle, cfx.VehicleSeat.Driver);
        console.log(source);
        console.log(args);
    },
    false
);
