import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';
import commonjs from 'rollup-plugin-commonjs';

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
    babel(),
    includePaths(includePathOptions)
  ]
}