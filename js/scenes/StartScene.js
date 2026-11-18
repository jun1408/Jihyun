const COLORS = {
  forest: 0x5fa85b,
  sky: 0xf6e7b5,
  earth: 0x9a633f,
  night: 0x243a5e,
  orange: 0xe8753d,
};

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  create() {
    this.cameras.main.setBackgroundColor(COLORS.sky);
    this.drawLandscape();

    this.add.text(270, 292, '떡 하나 주면\n안 잡아먹지', {
      align: 'center',
      color: '#243A5E',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '32px',
      fontStyle: 'bold',
      lineSpacing: 8,
    }).setOrigin(0.5);

    this.add.text(270, 410, '세 산을 지키고 집을 완성하세요', {
      color: '#9A633F',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '16px',
    }).setOrigin(0.5);

    this.createStartButton();
  }

  drawLandscape() {
    const graphics = this.add.graphics();

    graphics.fillStyle(COLORS.orange, 1);
    graphics.fillCircle(425, 138, 48);

    graphics.fillStyle(COLORS.forest, 1);
    graphics.fillTriangle(0, 560, 255, 370, 540, 560);
    graphics.fillTriangle(80, 590, 365, 415, 540, 590);
    graphics.fillRect(0, 555, 540, 405);

    graphics.fillStyle(COLORS.earth, 1);
    graphics.fillRect(0, 822, 540, 138);

    this.drawTree(graphics, 92, 635, 0.9);
    this.drawTree(graphics, 454, 650, 1.1);
  }

  drawTree(graphics, x, y, scale) {
    graphics.fillStyle(COLORS.earth, 1);
    graphics.fillRoundedRect(x - 14 * scale, y, 28 * scale, 78 * scale, 8 * scale);
    graphics.fillStyle(COLORS.forest, 1);
    graphics.fillCircle(x, y - 8 * scale, 48 * scale);
    graphics.fillCircle(x - 32 * scale, y + 20 * scale, 34 * scale);
    graphics.fillCircle(x + 32 * scale, y + 20 * scale, 34 * scale);
  }

  createStartButton() {
    const graphics = this.add.graphics();
    const x = 122;
    const y = 700;
    const width = 296;
    const height = 88;

    graphics.fillStyle(COLORS.earth, 1);
    graphics.fillRoundedRect(x, y + 8, width, height, 18);
    graphics.fillStyle(COLORS.orange, 1);
    graphics.fillRoundedRect(x, y, width, height, 18);
    graphics.lineStyle(5, COLORS.earth, 1);
    graphics.strokeRoundedRect(x, y, width, height, 18);

    this.add.text(270, y + height / 2, '시작', {
      color: '#F6E7B5',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '22px',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    const startButton = this.add.zone(270, y + height / 2, width, height)
      .setInteractive({ useHandCursor: true });

    startButton.on('pointerdown', () => {
      this.scene.start('GameScene', { stage: 1 });
    });
  }
}
