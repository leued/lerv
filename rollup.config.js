// const alias = require('rollup-plugin-alias');
// import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default [{
  input: 'src/core/rv.js',
  output: {
    file: './dist/rv.js',
    format: 'umd',
    moduleName: '$$$',
  },
  plugins: [
    resolve()
    // babel()
    // alias({
    //   'vue': 'src/vue/vue.esm.brower.js'
    // })
  ],
  treeshake : false
}];

