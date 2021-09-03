// Bring in the phaser library
import Phaser from 'phaser'

// Bring in global config options
import CONFIG from './config.js'

// Bringing in our different game scenes
import ExampleScene from './scenes/Example.js'
import StartScene from './scenes/Start.js'

const config = {
  // Configure Phaser graphics settings
  type: Phaser.AUTO,
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: CONFIG.DEFAULT_WIDTH,
    height: CONFIG.DEFAULT_HEIGHT
  },

  // Configure physics settings
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: CONFIG.DEFAULT_GRAVITY }
    }
  }
}

// Initialize the base phaser game object (must always be done once)
const game = new Phaser.Game(config)

// Add all our enabled scenes and start the 'StartScene'
game.scene.add('StartScene', StartScene)
game.scene.add('ExampleScene', ExampleScene)
game.scene.start('StartScene')
