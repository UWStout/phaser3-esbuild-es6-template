import TilemapScene from './TilemapScene.js'

class Stage1Scene extends TilemapScene {
  preload () {
    // Load images
    this.load.image('background', 'assets/skies/background.png')
    this.load.spritesheet('platformTiles', 'assets/tilesets/platformPack_tilesheet.png',
      { frameWidth: 64, frameHeight: 64 })

    // Load JSON data
    this.load.tilemapTiledJSON('mapData', 'assets/tilemaps/ExampleStage1.json')
  }

  create () {
    // Parse JSON into map
    this.parseTilemapJson('mapData')

    // Create any tilesets
    this.createTileset('platformPack', 'platformTiles')

    // Parse tile layers
    this.platformLayer = this.createTileLayer('Platforms')
    this.blockLayer = this.createTileLayer('Blocks')

    // Parse object layers
    this.parseObjectLayer('Spikes', 'platformTiles', 70)
  }
}

export default Stage1Scene
