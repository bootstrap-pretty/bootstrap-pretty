#!/usr/bin/env node

/*!
 * Bootstrap Pretty 0.2.2 (https://github.com/bootstrap-pretty/bootstrap-pretty#readme)
 * Based on Bootstrap 5.3.0-alpha1 (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
 * Copyright 2011-2023 Bootstrap (https://getbootstrap.com)
 * Copyright 2023 Bootstrap Pretty (https://bootstrappretty.dev)
 * Original code licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * Licensed under MIT (https://github.com/bootstrap-pretty/bootstrap-pretty/blob/master/LICENSE)
 */

'use strict';

const fs = require('node:fs').promises;
const path = require('node:path');
const globby = require('globby');

const VERBOSE = process.argv.includes('--verbose');
const DRY_RUN = process.argv.includes('--dry') || process.argv.includes('--dry-run');

// These are the filetypes we only care about replacing the version
const GLOB = [
    '**/*.{css,html,js,json,md,scss,txt,yml}'
];
const GLOBBY_OPTIONS = {
    cwd: path.join(__dirname, '..'),
    gitignore: true
};

// Blame TC39... https://github.com/benjamingr/RegExp.escape/issues/37
const regExpQuote = string => string.replace(/[$()*+-.?[\\\]^{|}]/g, '\\$&');

const regExpQuoteReplacement = string => string.replace(/\$/g, '$$');

const replaceRecursively = async (file, oldVersion, newVersion) => {
    const originalString = await fs.readFile(file, 'utf8');
    const newString = originalString.replace(
        new RegExp(regExpQuote(oldVersion), 'g'), regExpQuoteReplacement(newVersion)
    );

    if (originalString === newString) {
        return;
    }

    if (VERBOSE) {
        console.log(`FILE: ${file}`);
    }

    if (DRY_RUN) {
        return;
    }

    await fs.writeFile(file, newString, 'utf8');
};

const main = (async args => {
    let [oldVersion, newVersion] = args;

    if (!oldVersion || !newVersion) {
        console.error('USAGE: change-version old_version new_version [--verbose] [--dry[-run]]');
        console.error('Got arguments:', args);
        process.exit(1);
    }

    // Strip any leading `v` from arguments because otherwise we will end up with duplicate `v`s
    [oldVersion, newVersion] = [oldVersion, newVersion].map(arg => arg.startsWith('v') ? arg.slice(1) : arg);

    try {
        const files = await globby(GLOB, GLOBBY_OPTIONS);

        await Promise.all(files.map(file => replaceRecursively(file, oldVersion, newVersion)));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
});

main(process.argv.slice(2));
