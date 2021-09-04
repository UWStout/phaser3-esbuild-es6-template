import TilemapScene from './TilemapScene'

class PoliceLobbyScene extends TilemapScene {
  preload () {
    // Load images
    this.load.image('policeHuman', 'assets/tilesets/police-human.png')
    this.load.image('policeHumanDesk1', 'assets/tilesets/police-human-desk1.png')
    this.load.image('policeHumanDesk2', 'assets/tilesets/police-human-desk2.png')
    this.load.image('policeHumanChair', 'assets/tilesets/police-human-props1.png')
    this.load.image('policeHumanBottomLeft', 'assets/tilesets/police-human-bottomLeft.png')
    this.load.image('policeHumanBottomRight', 'assets/tilesets/police-human-bottomRight.png')

    // Load JSON data
    this.load.tilemapTiledJSON('mapData', 'assets/tilemaps/ExampleRoom.json')
  }

  create () {
    // Parse JSON into map
    this.parseTilemapJson('mapData')

    // Extract image and prop layers
    const [humanImage, humanProps] =
      this.parseImageAndPropsLayers('Human', 'policeHuman')
    humanImage.setVisible(false)

    // Create basic cursors
    this.cursors = this.input.keyboard.createCursorKeys()
  }
}

export default PoliceLobbyScene
