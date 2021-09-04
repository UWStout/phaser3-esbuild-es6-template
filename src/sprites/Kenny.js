import Phaser from 'phaser'
import CONFIG from '../config.js'

class KenneySprite extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    // Pass parameters to parent's constructor
    super(scene, x, y, 'kenney', 1)

    // Initialize animation info if it hasn't been already
    if (!KenneySprite.animInitialized) {
      KenneySprite.setupAnim(scene)
    }

    // Enable physics
    scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
    this.setImmovable(true)
    this.body.setCollideWorldBounds(true)

    // Control body size and position
    this.body.setSize(56, 70)
    this.body.setOffset(20, 26)

    // Add self to the given scene
    scene.add.existing(this)

    // Add audio context for sound effects
    this.sfx = scene.sound.addAudioSprite('gameAudio')
  }

  reset (x, y) {
    // Move player and stop all motion
    this.setVelocity(0, 0)
    this.setPosition(x, y)
    this.anims.play('kenneyIdle', true)
    this.sfx.play('deathSound', { volume: 0.1 })

    // Setup blink tween
    this.setAlpha(0)
    this.resetTween = this.scene.tweens.add({
      targets: this,
      alpha: 1,
      duration: 100,
      ease: 'Linear',
      repeat: 5
    })
  }

  move (x, y) {
    // Don't allow movement during reset
    if (this.resetTween && this.resetTween.totalProgress < 1.0) {
      return
    }

    // Movement
    if (Math.abs(x) > 0) {
      if (this.body.onFloor()) {
        this.anims.play('kenneyWalk', true)
      }
      this.setFlipX(x < 0)
      this.setVelocityX(x * CONFIG.WALK_SPEED)
    } else {
      if (this.body.onFloor()) {
        this.anims.play('kenneyIdle', true)
      }
      this.setVelocityX(0)
    }

    // Jump Input
    if (y < 0 && this.body.onFloor()) {
      this.anims.play('kenneyJump', true)
      this.sfx.play('jumpSound', { volume: 0.05 })
      this.setVelocityY(y * CONFIG.JUMP_SPEED)
    }
  }
}

// Sprite animation configuration as static members
// of the WitchSprite class
KenneySprite.animInitialized = false
KenneySprite.setupAnim = (scene) => {
  // Create the animations using the global anim controller
  scene.anims.create({
    key: 'kenneyWalk',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('kenney', { start: 2, end: 3 })
  })

  scene.anims.create({
    key: 'kenneyJump',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('kenney', { start: 1, end: 1 })
  })

  scene.anims.create({
    key: 'kenneyIdle',
    frameRate: 1,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('kenney', { start: 0, end: 0 })
  })

  // Indicate that the animation has been setup
  KenneySprite.animInitialized = true
}

// Export class for access in other classes
export default KenneySprite
