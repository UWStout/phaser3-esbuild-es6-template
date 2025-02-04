import TilemapScene from './TilemapScene.js'

// Bring in player character
import Kenney from '../sprites/Kenny.js'

class Stage1Scene extends TilemapScene {
  preload () {
    // Load images
    this.load.image('background', 'assets/skies/background.png')
    this.load.spritesheet('platformTiles', 'assets/tilesets/platformPack_tilesheet.png',
      { frameWidth: 64, frameHeight: 64 })

    // Load main character spritesheet
    this.load.spritesheet('kenney', 'assets/sprites/kenney_player.png',
      { frameWidth: 96, frameHeight: 96 })

    // Load JSON data
    this.load.tilemapTiledJSON('mapData', 'assets/tilemaps/ExampleStage1.json')

    // Pre-load the entire audio sprite
    this.load.audioSprite('gameAudio', 'assets/audio/gameAudioSprite.json', [
      'assets/audio/gameAudioSprite.ogg',
      'assets/audio/gameAudioSprite.m4a',
      'assets/audio/gameAudioSprite.mp3',
      'assets/audio/gameAudioSprite.ac3'
    ])
  }

  create () {
    // Adds background image
    const background = this.add.image(0, 0, 'background')
    background.setOrigin(0, 0)

    // Parse JSON into map
    this.parseTilemapJson('mapData')

    // Create any tilesets
    this.createTileset('platformPack', 'platformTiles')

    // Parse tile layers
    this.platformLayer = this.createTileLayer('Platforms', true)
    this.blockLayer = this.createTileLayer('Blocks', true)

    // Parse object layers
    this.spikes = this.parseObjectLayer('Spikes', 'platformTiles', 70, {
      allowGravity: false,
      immovable: true,
      createCallback: (spike) => {
        spike.body.setSize(64, 34)
        spike.body.setOffset(32, 62)
      }
    })

    // Scale our background
    background.setScale(
      this.mapData.widthInPixels / background.width,
      this.mapData.heightInPixels / background.height
    )

    // Make kenney
    this.kenney = new Kenney(this, 50, 300)

    // Turn on layer collisions
    this.physics.add.collider(this.kenney, this.platformLayer)
    this.physics.add.collider(this.kenney, this.blockLayer)
    this.physics.add.collider(this.kenney, this.spikes, this.spikeHit, null, this)

    // Create basic cursors
    this.cursors = this.input.keyboard.createCursorKeys()

    // Load and play background music
    this.music = this.sound.addAudioSprite('gameAudio')
    this.music.play('Stage1', { volume: 0.05 })
  }

  spikeHit () {
    this.kenney.reset(50, 300)
  }

  update () {
    const direction = { x: 0, y: 0 }
    if (this.cursors.space.isDown) {
      direction.y -= 1
    }
    if (this.cursors.right.isDown) {
      direction.x += 1
    }
    if (this.cursors.left.isDown) {
      direction.x -= 1
    }

    this.kenney.move(direction.x, direction.y)
  }
}

export default Stage1Scene
