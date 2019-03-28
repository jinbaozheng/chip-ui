import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import VuePlugin from 'rollup-plugin-vue'

export default {
    experimentalCodeSplitting: true,
    input: 'src/index.js',
    output: {
        file: 'dist/chips-ui.js',
        format: 'esm'
    },
    plugins: [
        json(),
        babel(),
        commonjs({
            include: 'node_modules/**'
        }),
        VuePlugin()
    ],
    external: [ 'vue' ]
};
