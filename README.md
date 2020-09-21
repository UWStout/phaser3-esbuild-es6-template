# Phaser 3 + ESBuild + ES6 Template

This repo contains an example of how to create a game using Phaser 3, ES6 and [ESBuild](https://github.com/evanw/esbuild).  It uses Browsersync to run a local server when in dev mode.

## Dev Environment Software

Before beginning, you will need to have the following installed on your development computer:
- git (on windows, [git for windows](https://git-scm.com/download/win) is recommended)
- node.js: available for all major platforms [here](https://nodejs.org/en/download/) (the LTS version is recommended)

A good code editor is also recommended and this repo is designed around [Visual Studio Code](https://code.visualstudio.com/).

## Getting Started

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

## How To Build and Run
To run commands, open any terminal and change to the root directory of your local working copy.  The terminal that is built into VS Code works well and already starts in the right directory.  Press `Ctrl + ~` to bring it up.  I highly recommend switching the default terminal to be 'Bash' instead of 'Powershell' on windows.

The `public/index.html` file contains a `<script src="bundle.js">` tag, which means we need to create `public/bundle.js`. The npm command `npm run build` tells ESBuild how to create this bundle, starting with `src/main.js` and including all its dependencies.

`npm run dev` builds the application to `public/bundle.js`, along with a sourcemap file for debugging. It also uses Browsersync to serve the files locally for debugging purposes at `localhost:3000`.  It will continue to run and automatically rebuild and refresh your browser until you kill it with `ctrl + C` in the terminal where you ran it.  It will also attempt to automatically open `http://localhost:3000/` in your default browser set in your OS when it starts.

`npm run build` will run the build only using minify with no sourcemap or local server and does NOT continue to monitor for changes.

## License

[MIT](LICENSE).
