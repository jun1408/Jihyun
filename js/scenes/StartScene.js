import { ASSETS, MAPS, preloadImages } from '../assets/AssetCatalog.js';

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

  preload() {
    preloadImages(this);
  }

  create() {
    this.cameras.main.setBackgroundColor(COLORS.sky);
    this.add.image(270, 480, MAPS[0].observerDay).setDisplaySize(540, 960);
    this.add.rectangle(270, 232, 480, 260, COLORS.sky, 0.88)
      .setStrokeStyle(5, COLORS.earth);
    this.add.image(126, 650, ASSETS.baseCamp).setScale(0.34);
    this.add.image(430, 650, ASSETS.playerObserver).setScale(0.34);

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
