// Create a Browsersync instance
const bs = require('browser-sync').create()

// Watch all assets and reload browser if they change
bs.watch('public/assets/**/*').on('change', (event, file) => {
  console.log('>> Asset changed, reloading')
  bs.reload()
})

// Provide a callback to capture ALL events to JS files under the src
// directory and then use ESBuild to re-compile and bundle them.
bs.watch('src/**/*.js', (event, file) => {
  console.log(`>> ${file} changed, rebuilding`)
  require('esbuild').build({
    stdio: 'inherit',
    entryPoints: ['./src/main.js'],
    outfile: 'public/bundle.js',
    bundle: true,
    sourcemap: true
  }).then(() => bs.reload())
    .catch(() => {
      console.error('ESBuild failed - Fix errors to retry')
    })
})

// Now init the Browsersync server
bs.init({
  server: './public'
})
