#!/usr/bin/env node

/*!
 * Bootstrap Pretty 0.2.0 (https://github.com/bootstrap-pretty/bootstrap-pretty#readme)
 * Copyright 2023 Bootstrap Pretty (https://bootstrappretty.dev)
 * Licensed under MIT (https://github.com/bootstrap-pretty/bootstrap-pretty/blob/master/LICENSE)
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const sourceJs = path.join(__dirname, '../node_modules/bootstrap/js/src');
const destinationJs = path.join(__dirname, '../js/src/bootstrap/');

const sourceCss = path.join(__dirname, '../node_modules/bootstrap/scss');
const destinationCss = path.join(__dirname, '../scss/bootstrap/');

const copyFolderRecursive = (src, dst) => {
    if (!fs.existsSync(dst)) {
        fs.mkdirSync(dst, { recursive: true });
    }

    const files = fs.readdirSync(src);

    files.forEach(file => {
        const currentSrc = path.join(src, file);
        const currentDst = path.join(dst, file);

        if (fs.lstatSync(currentSrc).isDirectory()) {
            copyFolderRecursive(currentSrc, currentDst);
        } else {
            fs.copyFileSync(currentSrc, currentDst);
        }
    });
};

copyFolderRecursive(sourceJs, destinationJs);
copyFolderRecursive(sourceCss, destinationCss);
