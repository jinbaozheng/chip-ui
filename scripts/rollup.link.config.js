import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import postcss from "rollup-plugin-postcss";
import VuePlugin from "rollup-plugin-vue";
module.exports = () => {
    return {
        input: './src/index.js',
        output: {
            name: 'chips-ui',
            exports: 'named',
            sourceMap: true,
            globals: {
            },
            file: './lib/index.js',
            format: 'cjs',
        },
        plugins: [
            postcss({
                plugins: []
            }),
            json(),
            VuePlugin(),
            resolve(),
            commonjs(),
        ],
        external: [],
    }
};