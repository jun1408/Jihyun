export default class ResultScene extends Phaser.Scene {
  constructor() {
    super('ResultScene');
  }

  init(data) {
    this.isSuccess = data.isSuccess ?? false;
    this.remainingTroops = data.remainingTroops ?? 0;
    this.stage = data.stage ?? 1;
  }

  create() {
    this.cameras.main.setBackgroundColor('#1d2a22');

    const resultText = this.isSuccess ? '성공' : '실패';
    const resultColor = this.isSuccess ? '#f4d35e' : '#ef767a';

    this.add.text(640, 210, resultText, {
      color: resultColor,
      fontFamily: 'sans-serif',
      fontSize: '64px',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(640, 315, `남은 병력: ${this.remainingTroops}`, {
      color: '#fff7df',
      fontFamily: 'sans-serif',
      fontSize: '30px',
    }).setOrigin(0.5);

    const retryButton = this.add.text(530, 450, '다시 하기', {
      backgroundColor: '#d98a3d',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      fontSize: '26px',
      padding: { x: 28, y: 16 },
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    retryButton.on('pointerdown', () => {
      this.scene.start('GameScene', { stage: this.stage });
    });

    this.add.text(750, 450, '다음 스테이지', {
      backgroundColor: '#67736a',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      fontSize: '26px',
      padding: { x: 28, y: 16 },
    }).setOrigin(0.5);
  }
}
