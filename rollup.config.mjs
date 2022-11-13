import { terser } from 'rollup-plugin-terser';

const inputPath = './js/';
const outputPath = './dist/js/';

export default [
    {
        input: `${inputPath}head-bootstrap-pretty-theme-toggle.js`,
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
        input: `${inputPath}body-bootstrap-pretty-theme-toggle.js`,
        output: [
            {
                file: `${outputPath}body-bootstrap-pretty-theme-toggle.js`,
                format: 'cjs',
            },
            {
                file: `${outputPath}body-bootstrap-pretty-theme-toggle.min.js`,
                format: 'cjs',
                plugins: [terser()]
            }
        ]
    }
]
