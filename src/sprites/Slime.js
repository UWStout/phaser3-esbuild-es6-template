import Phaser from 'phaser'

class SlimeSprite extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'slime', 1)

    if (!SlimeSprite.animInitialized) {
      SlimeSprite.setupAnim(scene)
    }

    scene.add.existing(this)
  }
}

SlimeSprite.animInitialized = false
SlimeSprite.setupAnim = (scene) => {
  scene.anims.create({
    key: 'slimeWalkHoriz',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('slime', { start: 0, end: 3 })
  })
  SlimeSprite.animInitialized = true
}

export default SlimeSprite
