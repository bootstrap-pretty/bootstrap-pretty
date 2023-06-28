/*!
 * Bootstrap Pretty 0.2.2 (https://github.com/bootstrap-pretty/bootstrap-pretty#readme)
 * Based on Bootstrap 5.3.0-alpha1 (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
 * Copyright 2011-2023 Bootstrap (https://getbootstrap.com)
 * Copyright 2023 Bootstrap Pretty (https://bootstrappretty.dev)
 * Original code licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * Licensed under MIT (https://github.com/bootstrap-pretty/bootstrap-pretty/blob/master/LICENSE)
 */

'use strict';

const path = require('node:path');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const banner = require('./banner.js');

const BUNDLE = process.env.BUNDLE === 'true';
const ESM = process.env.ESM === 'true';

let fileDestination = `bootstrap-pretty${ESM ? '.esm' : ''}`;
const external = ['clipboard', '@popperjs/core'];
const plugins = [
    babel({
        // Only transpile our source code
        exclude: 'node_modules/**',
        // Include the helpers in the bundle, at most one copy of each
        babelHelpers: 'bundled'
    }),
    nodeResolve()
];
const globals = {
    clipboard: 'ClipboardJS',
    '@popperjs/core': 'Popper'
};

if (BUNDLE) {
    fileDestination += '.bundle';
    plugins.push(
        replace({
            'process.env.NODE_ENV': '"production"',
            preventAssignment: true
        })
    );
}

const rollupConfig = {
    input: path.resolve(__dirname, `../js/index.${ESM ? 'esm' : 'umd'}.js`),
    output: {
        banner: banner(),
        file: path.resolve(__dirname, `../dist/js/${fileDestination}.js`),
        format: ESM ? 'esm' : 'umd',
        globals,
        generatedCode: 'es2015'
    },
    external,
    plugins
};

if (!ESM) {
    rollupConfig.output.name = 'bootstrapPretty';
}

module.exports = rollupConfig;
