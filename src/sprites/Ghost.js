import Phaser from 'phaser'
import CONFIG from '../config.js'

// Ghost sprite object that adds itself to the given scene
class GhostSprite extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    // Pass parameters to parent's constructor
    super(scene, x, y, 'ghost', 1)
    this.setOrigin(0.5, 1.0)
    this.setAlpha(0.5)

    // Setup depth sorting
    this.depth = y
    this.lastY = y

    // Initialize animation info if it hasn't been already
    if (!GhostSprite.animInitialized) {
      GhostSprite.setupAnim(scene)
    }

    // Enable physics
    scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
    this.body.setAllowGravity(false)
    this.body.setCollideWorldBounds(true)

    // Adjust the body
    this.body.setSize(100, 30)
    this.body.setOffset(95, 260)

    // Add self to the given scene
    scene.add.existing(this)

    // Initialize facing direction
    this.facingForward = true
  }

  move (x, y) {
    if (Math.abs(x) > 0) {
      if (this.facingForward) {
        this.anims.play('ghostWalkForward', true)
      } else {
        this.anims.play('ghostWalkBackward', true)
      }
    } else {
      if (y < 0) {
        this.facingForward = false
        this.anims.play('ghostWalkBackward', true)
      } else if (y > 0) {
        this.facingForward = true
        this.anims.play('ghostWalkForward', true)
      } else {
        if (this.facingForward) {
          this.anims.play('ghostIdleForward', true)
        } else {
          this.anims.play('ghostIdleBackward', true)
        }
      }
    }

    this.setVelocity(x * CONFIG.WALK_SPEED, y * CONFIG.WALK_SPEED)
  }

  update () {
    if (this.y !== this.lastY) {
      this.depth = this.y
      this.lastY = this.y
    }
  }
}

// Sprite animation configuration as static members
// of the GhostSprite class
GhostSprite.animInitialized = false
GhostSprite.setupAnim = (scene) => {
  // Create the animations using the global anim controller
  scene.anims.create({
    key: 'ghostIdleForward',
    frameRate: 4,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('ghost', { start: 0, end: 7 })
  })

  scene.anims.create({
    key: 'ghostIdleBackward',
    frameRate: 4,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('ghost', { start: 8, end: 15 })
  })

  scene.anims.create({
    key: 'ghostWalkForward',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('ghost', { start: 16, end: 23 })
  })

  scene.anims.create({
    key: 'ghostWalkBackward',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('ghost', { start: 24, end: 31 })
  })

  scene.anims.create({
    key: 'ghostInteractForward',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('ghost', { start: 32, end: 39 })
  })

  scene.anims.create({
    key: 'ghostInteractBackward',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('ghost', { start: 40, end: 47 })
  })

  // Indicate that the animation has been setup
  GhostSprite.animInitialized = true
}

// Export class for access in other classes
export default GhostSprite
