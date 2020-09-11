# Phaser 3 + ESBuild + ES6 Template

This repo contains an example of how to create a game using Phaser 3, ES6 and [ESBuild](https://github.com/evanw/esbuild).  It uses Browsersync to run a local server when in dev mode.

## Getting started

On GitHub, click the 'Use this template' button above the file list. This will clone the template for you under your own GitHub account. For more details see [this help file](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

Once created, clone the repo locally and install its dependencies.

Note that if you have cloned this template repo via GitHub, then you'll need to change the URLs below to match _your_ repo's name:

```bash
git clone https://github.com/UWStout/gdd325-esbuild-phaser3
cd phaser-esbuild-typescript-template
npm install

# or
npx degit "UWStout/gdd325-esbuild-phaser3" my-game
cd my-game
npm install
```

The `public/index.html` file contains a `<script src="bundle.js">` tag, which means we need to create `public/bundle.js`. The npm command `npm run build` tells ESBuild how to create this bundle, starting with `src/main.js` and including all its dependencies.

`npm run dev` builds the application to `public/bundle.js`, along with a sourcemap file for debugging. It also uses Browsersync to serve the files locally for debugging purposes at `localhost:3000`.

`npm run build` will run the build using minify and no sourcemap or local server.

## License

[MIT](LICENSE).
