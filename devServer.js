// Include the debounce library and make a debounced version of rebuild
const debounce = require('debounce')

// Create a Browsersync instance
const bs = require('browser-sync').create()

// Request a rebuild of the bundle
let rebuildRequested = false

// Make a version of the rebuild event function that is 'debounced' by 200ms.
// That means it will wait until some time has passed with no calls to it and
// THEN run it just once (avoids lots of concurrent calls)
const debouncedRebuild = debounce(rebuildEvent, 200)

// Function to rebuild the JS bundle and/or reload the browser
function rebuildEvent () {
  // Only rebuild the bundle if requested (some of the JS changed)
  if (rebuildRequested) {
    rebuildRequested = false
    console.log('  << Rebuilding JS bundle')
    require('esbuild').build({
      stdio: 'inherit',
      entryPoints: ['./src/main.js'],
      outfile: 'public/bundle.js',
      target: 'es6',
      define: { __DEV__: true },
      bundle: true,
      sourcemap: true
    }).then(() => bs.reload())
      .catch(() => {
        console.error('ESBuild failed - Fix errors to retry')
      })
  } else {
    // Otherwise, just reload the browser (only runtime assets changed)
    console.log('  << Reloading')
    bs.reload()
  }
}

// Watch all assets and reload browser if they change
bs.watch('public/assets/**/*').on('change', () => {
  console.log('>> Assets changed')
  debouncedRebuild()
})

// Provide a callback to capture ALL events to JS files under the src
// directory and then use ESBuild to translate and bundle them.
bs.watch('src/**/*.js', (event, file) => {
  console.log(`>> Code in ${file} changed`)
  rebuildRequested = true
  debouncedRebuild()
})

// Start the Browsersync server and serve the contents of the 'public' folder
bs.init({ server: './public' })
