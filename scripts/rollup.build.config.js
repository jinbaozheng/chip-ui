import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
    experimentalCodeSplitting: true,
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    },
    plugins: [
        json(),
        babel()
    ],
    external: [ 'vue' ]
};