# Phaser 4 + ESBuild + TypeScript Template

This repo contains a bare-bones example of how to create a game using Phaser 4, TypeScript and [ESBuild](https://github.com/evanw/esbuild).

## Getting started

On GitHub, click the 'Use this template' button above the file list. This will clone the template for you under your own GitHub account. For more details see [this help file](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

Once created, clone the repo locally and install its dependencies.

Note that if you have cloned this template repo via GitHub, then you'll need to change the URLs below to match _your_ repos name:

```bash
git clone https://github.com/phaserjs/phaser-esbuild-typescript-template
cd phaser-esbuild-typescript-template
npm install

# or
npx degit "phaserjs/phaser-esbuild-typescript-template" my-game
cd my-game
npm install
```

The `public/index.html` file contains a `<script src="bundle.js">` tag, which means we need to create `public/bundle.js`. The npm command `npm run dev` tells ESBuild how to create this bundle, starting with `src/main.ts` and including all its dependencies.

`npm run dev` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm run build` will run the build using minify and no sourcemap.

This template is configured for TypeScript 3.9.6, or above.

If you do not wish to use TypeScript, please see [our ES6 template](https://github.com/phaserjs/phaser-esbuild-es6-template) instead.

## License

[MIT](LICENSE).
