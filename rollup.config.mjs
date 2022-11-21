import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const inputPath = './js/';
const outputPath = './dist/js/';

export default [
    {
        input: `palettes.ts`,
        output: [
            {
                file: `./node/palettes.js`,
                format: 'cjs'
            }
        ],
        plugins: [typescript()] 
    },
    {
        input: `${inputPath}head-bootstrap-pretty-theme-toggle.ts`,
        output: [
            {
                file: `${outputPath}head-bootstrap-pretty-theme-toggle.js`,
                format: 'cjs',
            },
            {
                file: `${outputPath}head-bootstrap-pretty-theme-toggle.min.js`,
                format: 'cjs',
                plugins: [terser()]
            }
        ]
    },
    {
        input: `${inputPath}body-bootstrap-pretty-theme-toggle.ts`,
        output: [
            {
                file: `${outputPath}body-bootstrap-pretty-theme-toggle.js`,
                format: 'cjs',
            },
            {
                file: `${outputPath}body-bootstrap-pretty-theme-toggle.min.js`,
                format: 'cjs',
                plugins: [terser()]
            },
        ],
        plugins: [typescript()]
    }
]
