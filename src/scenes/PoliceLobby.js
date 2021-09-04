import TilemapScene from './TilemapScene'

import Ghost from '../sprites/Ghost.js'
class PoliceLobbyScene extends TilemapScene {
  preload () {
    // Load images
    this.load.image('policeHuman', 'assets/tilesets/police-human.png')
    this.load.image('policeHumanDesk1', 'assets/tilesets/police-human-desk1.png')
    this.load.image('policeHumanDesk2', 'assets/tilesets/police-human-desk2.png')
    this.load.image('policeHumanChair', 'assets/tilesets/police-human-props1.png')
    this.load.image('policeHumanBottomLeft', 'assets/tilesets/police-human-bottomLeft.png')
    this.load.image('policeHumanBottomRight', 'assets/tilesets/police-human-bottomRight.png')

    // Load character spritesheet
    this.load.spritesheet('ghost', 'assets/sprites/ghost-sheet.png', { frameWidth: 290, frameHeight: 290 })

    // Load JSON data
    this.load.tilemapTiledJSON('mapData', 'assets/tilemaps/ExampleRoom.json')
  }

  create () {
    // Parse JSON into map
    this.parseTilemapJson('mapData')

    // Extract image and prop layers
    const [humanImage, humanProps] =
      this.parseImageAndPropsLayers('Human', 'policeHuman')

    // Create Colliders
    this.colliderGroup = this.parseColliderObjects('Colliders')

    // Make a new ghost for the player
    this.player = new Ghost(this,
      this.mapData.widthInPixels / 2,
      this.mapData.heightInPixels / 2
    )
    this.player.setScale(0.333)

    // Configure collision checks
    this.colliderGroup.getChildren().forEach((curCollider) => {
      if (curCollider.isEntrance) {
        console.log('setting up entrance callback')
        this.physics.add.collider(this.player, curCollider, this.atEntrance, null, this)
      } else {
        this.physics.add.collider(this.player, curCollider)
      }
    })

    // Create basic cursors
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  atEntrance () {
    console.log('Leaving so soon?')
  }

  update () {
    const direction = { x: 0, y: 0 }
    if (this.cursors.right.isDown) {
      direction.x += 1
    }
    if (this.cursors.left.isDown) {
      direction.x -= 1
    }
    if (this.cursors.up.isDown) {
      direction.y -= 1
    }
    if (this.cursors.down.isDown) {
      direction.y += 1
    }

    this.player.move(direction.x, direction.y)
    this.player.update()
  }
}

export default PoliceLobbyScene
