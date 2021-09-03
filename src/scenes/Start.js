import Phaser from 'phaser'
import CONFIG from '../config.js'

class StartScene extends Phaser.Scene {
  init () {
    // Display a simple loading message
    this.loadingText = this.add.text(
      CONFIG.DEFAULT_WIDTH / 2,
      CONFIG.DEFAULT_HEIGHT / 2,
      'Loading ...', { font: '16pt Arial', fillColor: '#FFFFFF', align: 'center' }
    )
    this.loadingText.setOrigin(0.5, 0.5)
  }

  preload () {
    // Load the image assets needed for THIS scene
    this.load.image('StartScreen', 'assets/StartScreen.png')

    // Load the image assets needed for 'ExampleScene'
    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')

    // DEBUG: Fake loading lots of data
    for (let i = 0; i < 300; i++) {
      this.load.image('sky' + i, 'assets/skies/space3.png')
    }
  }

  create () {
    // Remove loading text
    this.loadingText.destroy()

    // Add background image
    const startScreen = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'StartScreen')
    startScreen.setScale(
      CONFIG.DEFAULT_WIDTH / startScreen.width,
      CONFIG.DEFAULT_HEIGHT / startScreen.height
    )

    // Add a callback when a key is released
    this.input.keyboard.on('keyup', this.keyReleased)
  }

  keyReleased () {
    // Log the key release
    console.log('Key released')

    // Switch scenes
    this.game.scene.start('ExampleScene')
    this.game.scene.stop('StartScene')
  }
}

export default StartScene
