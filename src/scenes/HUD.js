import Phaser from 'phaser'

import CONFIG from '../config.js'

class HUDScene extends Phaser.Scene {
  create () {
    this.loadingText = this.add.text(
      CONFIG.DEFAULT_WIDTH - 10,
      CONFIG.DEFAULT_HEIGHT - 10,
      'INFORMATION', { font: '16pt Arial', color: '#FF0000', align: 'center' }
    )
    this.loadingText.setOrigin(1, 1)
  }
}

export default HUDScene
