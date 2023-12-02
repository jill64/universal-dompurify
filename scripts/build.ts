import { build } from 'esbuild'
import { polyfillNode } from 'esbuild-plugin-polyfill-node'

build({
  entryPoints: ['src/edge.ts'],
  outfile: 'dist/edge.js',
  bundle: true,
  platform: 'browser',
  format: 'esm',
  minify: true,
  plugins: [polyfillNode()]
})
