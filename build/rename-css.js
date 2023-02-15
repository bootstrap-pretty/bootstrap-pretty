#!/usr/bin/env node

/*!
 * Bootstrap Pretty 0.2.1 (https://github.com/bootstrap-pretty/bootstrap-pretty#readme)
 * Copyright 2023 Bootstrap Pretty (https://bootstrappretty.dev)
 * Licensed under MIT (https://github.com/bootstrap-pretty/bootstrap-pretty/blob/master/LICENSE)
 */

'use strict';

const glob = require('glob');
const { rename } = require('node:fs');
const path = require('node:path');

// Rename .css to .min.css
glob('./dist/css/**/*.css', (err, files) => {
    if (err) {
        throw err;
    }

    files.forEach(file => {
        const newFile = `${file.slice(0, Math.max(0, file.lastIndexOf('.')))}.min.css`;

        rename(file, newFile, err => {
            if (err) {
                throw err;
            }

            console.log(`✅ ${path.basename(file)} to ${path.basename(newFile)}`);
        });
    });
});
