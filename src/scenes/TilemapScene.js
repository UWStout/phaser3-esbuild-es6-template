import Phaser from 'phaser'

class TilemapScene extends Phaser.Scene {
  // Read the JSON from 'Tiled' and create a tilemap object
  parseTilemapJson (jsonKey) {
    this.mapData = this.make.tilemap({ key: jsonKey })

    // Adjust world bounds for physics and camera
    if (this.physics.world) {
      this.physics.world.setBounds(
        0, 0, this.mapData.widthInPixels, this.mapData.heightInPixels
      )
    }
    this.cameras.main.setBounds(0, 0, this.mapData.widthInPixels, this.mapData.heightInPixels)
  }

  // Read tilemap data from 'Tiled' and associate with a texture key
  createTileset (tilesetName, textureKey) {
    this.tilesetData = this.mapData.addTilesetImage(tilesetName, textureKey)
  }

  // Parse tile layer from tilemap using given tileset
  createTileLayer (layerName, enableCollision) {
    const newLayer = this.mapData.createStaticLayer(layerName, this.tilesetData)
    if (enableCollision && newLayer) {
      newLayer.setCollisionByExclusion(-1, true)
    }
    return newLayer
  }

  createObjectGroup (physicsConfig) {
    // Create a new GameObject group to hold new objects
    let objGroup = {}
    if (physicsConfig) {
      objGroup = this.physics.add.staticGroup(physicsConfig)
      if (physicsConfig.createCallback) {
        objGroup.createCallbackHandler = physicsConfig.createCallback
      }
    } else {
      objGroup = this.add.group()
    }

    // Return created group
    return objGroup
  }

  // Parse object layer from tilemap and create given sprite
  parseObjectLayer (layerName, spriteKey, spriteFrame, physicsConfig) {
    // Create a new GameObject group to hold new objects
    const objGroup = this.createObjectGroup(physicsConfig)

    // Grab array of objects from the layer
    const objectData = this.mapData.getObjectLayer(layerName).objects

    // Loop over object array and make new object for each item
    objectData.forEach((curObj) => {
      objGroup.create(
        curObj.x, curObj.y - curObj.height,
        spriteKey, spriteFrame
      ).setOrigin(0, 0)
    })

    return objGroup
  }

  parseImageAndPropsLayers (layerPrefix, keyPrefix) {
    // Pull out image and add to scene
    const imageIndex = this.mapData.getImageIndex(layerPrefix)
    const imageLayer = this.mapData.images[imageIndex]
    const imageObj = this.add.image(imageLayer.x, imageLayer.y, keyPrefix)
    imageObj.setOrigin(0, 0)

    // Create a new GameObject group to hold new objects
    const propGroup = this.createObjectGroup()

    // Loop over props and create sprites
    const objectData = this.mapData.getObjectLayer(layerPrefix + 'Props').objects
    objectData.forEach((curObj) => {
      const curProp = propGroup.create(
        curObj.x, curObj.y - curObj.height, keyPrefix + curObj.name
      )
      curProp.setOrigin(0, 0)
      curProp.depth = curObj.y
    })

    // Return image and props group
    return [imageObj, propGroup]
  }

  parseColliderObjects (layerName) {
    // Create a new GameObject group to hold new objects
    const colliderGroup = this.createObjectGroup({ physics: true })

    // Loop over colliders and create rectangles
    const objectData = this.mapData.getObjectLayer(layerName).objects
    objectData.forEach((curObj) => {
      const curCollider = new Phaser.GameObjects.Rectangle(
        this, curObj.x, curObj.y, curObj.width, curObj.height
      )
      curCollider.setOrigin(0, 0)

      // Handle entrances
      if (curObj.type === 'Entrance') {
        curCollider.isEntrance = true
      }

      // Configure physics body
      this.physics.add.existing(curCollider, true)
      curCollider.body.allowGravity = false
      curCollider.body.immovable = true
      colliderGroup.add(curCollider)
    })

    return colliderGroup
  }
}

export default TilemapScene
