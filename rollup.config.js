import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};

let includePathOptions = {
  include: {},
  paths: ['src/'],
  external: [
    'react', 
    'react-dom', 
    'prop-types',
    'classnames'
  ],
  extensions: ['.js']
};

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    postcss({
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens;
          }
        })
      ],
      getExportNamed: false,
      getExport (id) {
        return cssExportMap[id];
      },
      extract: 'styles.css',
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    includePaths(includePathOptions)
  ]
}