import Phaser from 'phaser'

import CONFIG from '../config.js'

class ExampleScene extends Phaser.Scene {
  preload () {
    // Loading is done in 'StartScene'
    // - 'sky' is background image
    // - 'red' is our particle
    // - 'logo' is the phaser3 logo
  }

  create () {
    // Add background image
    const sky = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'sky')
    sky.setScale(
      CONFIG.DEFAULT_WIDTH / sky.width,
      CONFIG.DEFAULT_HEIGHT / sky.height
    )

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
    logo.body.onWorldBounds = true

    // Play sound when we hit the world bounds
    this.physics.world.on('worldbounds', () => { this.sfx.play('hitSound') }, this)

    // Make the particle emitter follow the logo
    emitter.startFollow(logo)

    // Add a callback when a key is released
    this.input.keyboard.on('keyup', this.keyReleased, this)

    // Load and play background music
    this.music = this.sound.addAudioSprite('gameAudio')
    this.music.play('freeVertexStudioTrack2')

    // Create a sound instance for sfx
    this.sfx = this.sound.addAudioSprite('gameAudio')
  }

  keyReleased () {
    console.log('Key released')
    this.game.scene.start('StartScene')
    this.game.scene.stop('ExampleScene')
    this.music.stop()
  }
}

export default ExampleScene
