# Phaser 3 + ESBuild + ES6 Template

This repo contains an example of how to create a game using Phaser 3, ES6 and [ESBuild](https://github.com/evanw/esbuild).  It uses esbuild's built-in server when used in dev or prod mode.

## Dev Environment Software

Before beginning, you will need to have the following installed on your development computer:
- git (on windows, [git for windows](https://git-scm.com/download/win) is recommended)
- node.js: available for all major platforms [here](https://nodejs.org/en/download/) (the LTS version is recommended)
- ffmpeg: optional, used in tutorials for audio-sprite support (recommend latest gpl, n4.4 release from [here](https://github.com/BtbN/FFmpeg-Builds/releases))

A good code editor is also recommended and this repo is designed around [Visual Studio Code](https://code.visualstudio.com/).

## Getting Started

On GitHub, click the 'Use this template' button above the file list. This will clone the template for you under your own GitHub account. For more details see [this help file](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

Once created, clone/checkout a local copy on your computer and install the dependencies.

Note: If you have forked/cloned this template to your own account, then you'll need to change the URLs below to match _your_ repo's name:

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

`npm run dev` starts a local server on port 3000 that serves the contents of `public`.  Any request for `bundle.js` will cause it to automatically rebuild your game and then it will serve the results live.  Simply open `localhost:3000` in your browser and as you edit your code, have the developer-tools open.  When you refresh the page, it will automatically rebuild your game and serve the latest version. Make sure you have your browser's caching disabled (usually under the 'Network' tab of the developer tools).

When the game is run in `dev` mode, the global JS variable `__DEV__` is true.  You can use this variable with console logs and other statements to adjust behavior while developing the game.

`npm run prod` is similar to `dev` in that it runs a local server and builds your code as you go, BUT it does not generate a source-code map, it minifies the code, and `__DEV__` is set to false.  This is a 'preview' of the final production build you can do with the `build` command below.

`npm run build` will do a build only using minify with no sourcemap or local server and does NOT continue to monitor for changes.  Use this when you are ready to deploy your game to a dedicated web server. The game is completely contained under the `public` folder.

## Dev Environment Config
Most JS devs already have their environment configured the way they want so you can ignore this if that is you!

For students (and those that are just curious) here's how I have my environment configured and my own practices. This repo likely expects a few of these things to be in place if you want the best experience but none of it is requried:

- Use [Visual Studio Code](https://code.visualstudio.com/) as the main editor
- Employ [Standard JS](https://standardjs.com/) as a coding standard (hater's gonna hate)
  - You can always consider re-configuring for [airbnb](https://github.com/airbnb/javascript) or [Google](https://google.github.io/styleguide/jsguide.html) or whatever you please, but USE SOME STANDARD!!
- Recommended VSCode extensions:
  - Beautify
  - Code Spell Checker
  - GitLens
  - Node.js Extension Pack
  - vscode-icons (and remember to enable)
- Other VSCode Config:
  - Set git bash as your default terminal profile
  - Always make sure your eslint is working (look for errors under `output -> ESLint` in the terminal panel)

## Node Package Voulnrability
After running "npm install" it will report a high-severity vulnerability.  This comes from the Audiosprite package.  To solve this, we employ 'npm-force-resolutions' which runs automatically after install.  You can run the install process a second time to see that no more vulnerabilities are reported.

We are specifically focing minimist and underscore (used by Audiosprite) to newer versions that are not vulnerable to this attack (see the package.json for details).

## License

[MIT](LICENSE).
