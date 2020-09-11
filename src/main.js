// Import the entire 'phaser' namespace
import Phaser from 'phaser'

import GameScene from './scenes/GameScene'

// Core phaser configuration object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 }
    }
  }
}

// Start Phaser by making a Phaser.Game object and passing in the
// config object from above.
const game = new Phaser.Game(config)
game.scene.add('main', GameScene, true)
