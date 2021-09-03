// Bring in the phaser library
import Phaser from 'phaser'

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
  },

  // Establish scene callbacks
  scene: {
    preload: preload,
    create: create
  }
}

// Initialize the base phaser game object (must always be done once)
// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config)

// pre-load scene callback (loads all assets)
function preload () {
  this.load.image('sky', 'assets/skies/space3.png')
  this.load.image('logo', 'assets/sprites/phaser3-logo.png')
  this.load.image('red', 'assets/particles/red.png')
}

// Create scene callback: layout and setup the scene
function create () {
  // Add background image
  this.add.image(400, 300, 'sky')

  // Create and configure a particle emitter
  const particles = this.add.particles('red')
  const emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
  })

  // Create and animate the logo
  const logo = this.physics.add.image(400, 100, 'logo')
  logo.setVelocity(100, 200)
  logo.setBounce(1, 1)
  logo.setCollideWorldBounds(true)

  // Make the particle emitter follow the logo
  emitter.startFollow(logo)
}
