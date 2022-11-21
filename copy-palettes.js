const fs = require('fs');
const palettes = require('./node/palettes');
const PALETTES = palettes.PALETTES;
const folders = PALETTES.map(folder => folder.palette);

folders.forEach(folder => {
    fs.copyFileSync('./scss/templates/_palette.scss', `./scss/palettes/${folder}/${folder}.scss`);
    console.log(`✅ Copied to ./scss/palettes/${folder}/${folder}.scss`);
});
