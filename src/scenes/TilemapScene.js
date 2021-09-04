import Phaser from 'phaser'

class TilemapScene extends Phaser.Scene {
  // Read the JSON from 'Tiled' and create a tilemap object
  parseTilemapJson (jsonKey) {
    this.mapData = this.make.tilemap({ key: jsonKey })
  }

  // Read tilemap data from 'Tiled' and associate with a texture key
  createTileset (tilesetName, textureKey) {
    this.tilesetData = this.mapData.addTilesetImage(tilesetName, textureKey)
  }

  // Parse tile layer from tilemap using given tileset
  createTileLayer (layerName) {
    return this.mapData.createLayer(layerName, this.tilesetData)
  }

  // Parse object layer from tilemap and create given sprite
  parseObjectLayer (layerName, spriteKey, spriteFrame) {
    // Create a new GameObject group to hold new objects
    this.objGroup = this.add.group()

    // Grab array of objects from the layer
    const objectData = this.mapData.getObjectLayer(layerName).objects

    // Loop over object array and make new object for each item
    objectData.forEach((curObj) => {
      this.objGroup.create(
        curObj.x, curObj.y - curObj.height,
        spriteKey, spriteFrame
      ).setOrigin(0, 0)
    })
  }
}

export default TilemapScene
