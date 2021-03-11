const globalResourceName = 'future-world';
const resourceName = 'weapon-on-back';

on('onServerResourceStart', (resource: string) => {
    if (resource === resourceName) {
        console.log(`[${resourceName}]Loaded, part of ${globalResourceName}`);
    }
});

on('onServerResourceStop', (resource: string) => {
    if (resource === resourceName) {
        console.log(`[${resourceName}]Unloaded, part of ${globalResourceName}`);
    }
});
