// Import the entire 'phaser' namespace
import Phaser from 'phaser'

class GameScene extends Phaser.Scene {
  // Queue up assets to load from our local assets directory
  // Note: these are loaded asynchronously after preload() completes
  // and before 'create()' is run.
  preload () {
    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
  }

  // Build the scene by adding GameObjects and configuring specific
  // entities (runs after all queued assets are loaded)
  create () {
    // The background sky
    this.add.image(400, 300, 'sky')

    // A sprite to use as a particle
    const particles = this.add.particles('red')

    // A particle emitter
    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    })

    // The Phaser 3 logo (which sill bounce around the screen)
    const logo = this.physics.add.image(400, 100, 'logo')

    // Make the logo move
    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    // Make the emitter follow the logo
    emitter.startFollow(logo)
  }
}

export default GameScene
