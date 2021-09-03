import Phaser from 'phaser'

class WitchSprite extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'witch', 1)

    if (!WitchSprite.animInitialized) {
      WitchSprite.setupAnim(scene)
    }

    scene.add.existing(this)
  }
}

WitchSprite.animInitialized = false
WitchSprite.setupAnim = (scene) => {
  console.log('Creating witch animation')
  scene.anims.create({
    key: 'witchWalkDown',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('witch', { start: 0, end: 7 })
  })

  scene.anims.create({
    key: 'witchWalkUp',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('witch', { start: 8, end: 15 })
  })

  scene.anims.create({
    key: 'witchWalkHoriz',
    frameRate: 10,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('witch', { start: 16, end: 23 })
  })
  WitchSprite.animInitialized = true
}

export default WitchSprite
