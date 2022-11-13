#!/usr/bin/env node

/*!
 * Bootstrap Pretty 0.2.0 (https://github.com/bootstrap-pretty/bootstrap-pretty#readme)
 * Copyright 2023 Bootstrap Pretty (https://bootstrappretty.dev)
 * Licensed under MIT (https://github.com/bootstrap-pretty/bootstrap-pretty/blob/master/LICENSE)
 */

'use strict';

const fs = require('node:fs');
const PALETTES = require('../palettes.json');
const folders = PALETTES.map(folder => folder.palette);

folders.forEach(folder => {
    fs.copyFileSync('./scss/templates/_palette.scss', `./scss/palettes/${folder}/${folder}.scss`);
    console.log(`✅ Copied to ./scss/palettes/${folder}/${folder}.scss`);
});
