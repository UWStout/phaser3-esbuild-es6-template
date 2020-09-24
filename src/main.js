// Bring in the phaser library
import Phaser from 'phaser'

// Bringing in our base example scene
import ExampleScene from './scenes/Example.js'

const config = {
  // Configure Phaser graphics settings
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  // Configure physics settings
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  }
}

// Initialize the base phaser game object (must always be done once)
const game = new Phaser.Game(config)

// Add and auto-starting ExampleScene
game.scene.add('ExampleScene', ExampleScene, true)
