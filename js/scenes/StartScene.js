export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#1d2a22');

    this.add.text(640, 255, '떡 하나 주면 안 잡아먹지', {
      color: '#fff7df',
      fontFamily: 'sans-serif',
      fontSize: '52px',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    const startButton = this.add.text(640, 425, '시작', {
      backgroundColor: '#d98a3d',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      fontSize: '30px',
      padding: { x: 42, y: 18 },
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    startButton.on('pointerdown', () => {
      this.scene.start('GameScene', { stage: 1 });
    });
  }
}
