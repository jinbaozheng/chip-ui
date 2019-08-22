import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import VuePlugin from 'rollup-plugin-vue'
import postcss from "rollup-plugin-postcss";

export default {
    experimentalCodeSplitting: true,
    input: 'src/index.js',
    output: {
        file: 'dist/chips-ui.js',
        format: 'esm'
    },
    plugins: [
        postcss({
            plugins: []
        }),
        json(),
        VuePlugin(),
        commonjs({
            include: 'node_modules/**'
        }),
        babel(),
    ],
    external: [ 'vue' ]
};
