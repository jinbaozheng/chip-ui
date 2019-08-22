import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import VuePlugin from "rollup-plugin-vue";
import replace from "rollup-plugin-replace";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
module.exports = () => {
    return {
        input: './example/main.js',
        output: {
            name: 'chips',
            globals: {
                // icemilk: 'icemilk'
            },
            file: './example/dist/bundle.js',
            format: 'umd'
        },
        plugins: [
            postcss({
                plugins: []
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify( 'production' )
            }),
            json(),
            VuePlugin(),
            resolve(),
            commonjs(),
            babel()
        ],
        // external: [ 'icemilk' ],
        treeshake: false
    }
};