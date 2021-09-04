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

  // Parse object layer from tilemap and create given sprite
  parseObjectLayer (layerName, spriteKey, spriteFrame, physicsConfig) {
    // Create a new GameObject group to hold new objects
    let objGroup = {}
    if (physicsConfig) {
      objGroup = this.physics.add.group(physicsConfig)
      if (physicsConfig.createCallback) {
        objGroup.createCallbackHandler = physicsConfig.createCallback
      }
    } else {
      objGroup = this.add.group()
    }

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
}

export default TilemapScene
