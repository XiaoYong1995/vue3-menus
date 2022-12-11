import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pluginVue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import vueJsx from '@vitejs/plugin-vue-jsx'

module.exports = {
  input: path.resolve(__dirname, './package/index.js'),
  output: [
    {
      file: path.resolve(__dirname, './dist/vue-vantis-menus.js'),
      format: 'umd',
      name: 'VueVantisMenus',
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: path.resolve(__dirname, './dist/vue-vantis-menus.min.js'),
      format: 'umd',
      name: 'VueVantisMenus',
      globals: {
        vue: 'Vue'
      },
      plugins: [
        terser()
      ]
    },
    {
      file: path.resolve(__dirname, './dist/vue-vantis-menus.es.js'),
      format: 'es',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  plugins: [
    resolve(),
    vueJsx(),
    pluginVue(),
    commonjs(),
    postcss(),
    clear({
      targets: ['./dist'],
      watch: true,
    })
  ],
  external: [
    'vue'
  ]
}
