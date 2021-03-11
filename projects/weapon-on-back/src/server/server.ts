const globalResourceName = 'future-world';

on('onServerResourceStart', (resource: string) => {
  if (resource === GetCurrentResourceName()) {
    console.log(`[${resource}]Loaded, part of ${globalResourceName}`);
  }
});

on('onServerResourceStop', (resource: string) => {
  if (resource === GetCurrentResourceName()) {
    console.log(`[${resource}]Unloaded, part of ${globalResourceName}`);
  }
});
