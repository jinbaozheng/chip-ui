import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import VuePlugin from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
export default {
    input: 'example/main.js',
    output: {
        file: './example/dist/bundle.js',
        format: 'umd'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
        }),
        json(),
        VuePlugin(),
        resolve(),
        commonjs({
            include: 'node_modules/**'
        }),
        babel()
    ]
};