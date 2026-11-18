import BuildingSystem from '../building/BuildingSystem.js';
import CombatSystem from '../combat/CombatSystem.js';
import PlayerInput from '../input/PlayerInput.js';
import GameState from '../state/GameState.js';
import { ASSETS, MAPS } from '../assets/AssetCatalog.js';

const COLORS = {
  forest: 0x5fa85b,
  sky: 0xf6e7b5,
  earth: 0x9a633f,
  night: 0x243a5e,
  orange: 0xe8753d,
};

const DIRECTIONS = {
  up: { label: '위', arrow: '↑' },
  down: { label: '아래', arrow: '↓' },
  left: { label: '왼쪽', arrow: '←' },
  right: { label: '오른쪽', arrow: '→' },
};

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  init(data) {
    this.gameState = new GameState(data.stage ?? 1);
  }

  create() {
    this.playerInput = new PlayerInput(this);
    this.combatSystem = new CombatSystem();
    this.buildingSystem = new BuildingSystem();
    this.map = MAPS[this.gameState.stage - 1];

    this.cameras.main.setBackgroundColor('#243A5E');
    this.renderObserver();
    this.createStatusBar();
  }

  createStatusBar() {
    this.statusContainer = this.add.container(0, 0).setDepth(20);
    const panel = this.add.rectangle(270, 54, 516, 88, COLORS.night, 0.94)
      .setStrokeStyle(4, COLORS.earth);
    const mapText = this.add.text(30, 28, this.map.name, {
      color: '#F6E7B5',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '22px',
      fontStyle: 'bold',
    });
    const dayText = this.add.text(30, 65, `${this.gameState.day}일차 · 낮`, {
      color: '#F6E7B5',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '16px',
    });
    const resourceText = this.add.text(510, 34, '체력 100  블록 0  열매 0', {
      color: '#F6E7B5',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '16px',
    }).setOrigin(1, 0);
    this.statusContainer.add([panel, mapText, dayText, resourceText]);
  }

  resetView() {
    if (this.viewContainer) {
      this.viewContainer.destroy(true);
    }
    this.viewContainer = this.add.container(0, 0).setDepth(0);
  }

  addBackground(texture) {
    const background = this.add.image(270, 480, texture).setDisplaySize(540, 960);
    this.viewContainer.add(background);
  }

  renderObserver() {
    this.resetView();
    this.addBackground(this.map.observerDay);

    const camp = this.add.image(270, 465, ASSETS.baseCamp).setScale(0.42);
    const player = this.add.image(270, 520, ASSETS.playerObserver).setScale(0.24);
    const tree = this.add.image(105, 570, ASSETS.tree).setScale(0.34);
    const berries = this.add.image(425, 570, ASSETS.berries).setScale(0.3);
    this.viewContainer.add([camp, player, tree, berries]);

    this.playerInput.bind(tree, () => this.showToast('나무: 블록을 얻는 자원'));
    this.playerInput.bind(berries, () => this.showToast('열매: 체력을 조금 회복하는 자원'));

    this.createDirectionButton(270, 180, 'up');
    this.createDirectionButton(270, 760, 'down');
    this.createDirectionButton(62, 470, 'left');
    this.createDirectionButton(478, 470, 'right');

    const guide = this.add.text(270, 875, '방향을 눌러 주변을 살펴보세요', {
      color: '#243A5E',
      backgroundColor: '#F6E7B5',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '18px',
      padding: { x: 18, y: 12 },
    }).setOrigin(0.5);
    this.viewContainer.add(guide);
  }

  createDirectionButton(x, y, direction) {
    const config = DIRECTIONS[direction];
    const button = this.createButton(x, y, 92, 66, `${config.arrow} ${config.label}`, () => {
      this.gameState.selectedDirection = direction;
      this.renderAction();
    });
    this.viewContainer.add(button);
  }

  renderAction() {
    this.resetView();
    this.addBackground(this.map.actionDay);
    this.addViewTitle(`${DIRECTIONS[this.gameState.selectedDirection].label} 방향`);
    this.addBackButton(() => this.renderObserver());

    const combatButton = this.createButton(270, 760, 340, 76, '전투 화면 보기', () => {
      this.renderCombat();
    }, true);
    const buildButton = this.createButton(270, 850, 340, 76, '벽 건축 화면 보기', () => {
      this.renderBuilding();
    });
    this.viewContainer.add([combatButton, buildButton]);
  }

  renderCombat() {
    this.resetView();
    this.addBackground(this.map.actionNight);
    this.addViewTitle(`${this.map.enemyName} 출현`);

    const enemyScale = this.gameState.stage === 3 ? 0.62 : 0.58;
    const enemy = this.add.image(270, 410, this.map.enemy).setScale(enemyScale);
    const sword = this.add.image(390, 720, ASSETS.swordReady).setScale(0.5);
    const guide = this.add.text(270, 820, '화면을 눌러 검을 휘두르세요', {
      color: '#F6E7B5',
      backgroundColor: '#243A5E',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '18px',
      padding: { x: 18, y: 12 },
    }).setOrigin(0.5);
    const attackZone = this.add.zone(270, 515, 540, 650);
    this.playerInput.bind(attackZone, () => {
      sword.setTexture(ASSETS.swordSwing).setScale(0.5);
      this.time.delayedCall(150, () => sword.setTexture(ASSETS.swordReady).setScale(0.5));
    });
    this.viewContainer.add([enemy, sword, guide, attackZone]);
    this.addBackButton(() => this.renderAction());
  }

  renderBuilding() {
    this.resetView();
    this.addBackground(this.map.actionDay);
    this.addViewTitle(`${DIRECTIONS[this.gameState.selectedDirection].label}쪽 벽`);

    const guide = this.add.text(270, 210, '블록을 눌러 벽 모양을 확인하세요', {
      color: '#243A5E',
      backgroundColor: '#F6E7B5',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '18px',
      padding: { x: 16, y: 10 },
    }).setOrigin(0.5);
    this.viewContainer.add(guide);

    for (let row = 0; row < 4; row += 1) {
      for (let column = 0; column < 3; column += 1) {
        const block = this.add.image(170 + column * 100, 340 + row * 90, ASSETS.block)
          .setDisplaySize(92, 46)
          .setAlpha(0.28);
        this.playerInput.bind(block, () => {
          block.setAlpha(block.alpha < 1 ? 1 : 0.28);
        });
        this.viewContainer.add(block);
      }
    }
    this.addBackButton(() => this.renderAction());
  }

  addViewTitle(text) {
    const title = this.add.text(270, 135, text, {
      color: '#F6E7B5',
      backgroundColor: '#243A5E',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '22px',
      fontStyle: 'bold',
      padding: { x: 18, y: 10 },
    }).setOrigin(0.5);
    this.viewContainer.add(title);
  }

  addBackButton(callback) {
    const button = this.createButton(78, 135, 108, 54, '← 돌아가기', callback);
    this.viewContainer.add(button);
  }

  createButton(x, y, width, height, label, callback, isPrimary = false) {
    const container = this.add.container(x, y);
    const shadow = this.add.rectangle(0, 6, width, height, COLORS.earth)
      .setStrokeStyle(3, COLORS.earth);
    const face = this.add.rectangle(0, 0, width, height, isPrimary ? COLORS.orange : COLORS.sky)
      .setStrokeStyle(4, COLORS.earth);
    const text = this.add.text(0, 0, label, {
      color: isPrimary ? '#F6E7B5' : '#243A5E',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '18px',
      fontStyle: 'bold',
      align: 'center',
    }).setOrigin(0.5);
    const zone = this.add.zone(0, 0, width, height);
    this.playerInput.bind(zone, callback);
    container.add([shadow, face, text, zone]);
    return container;
  }

  showToast(message) {
    if (this.toast) {
      this.toast.destroy();
    }
    this.toast = this.add.text(270, 810, message, {
      color: '#F6E7B5',
      backgroundColor: '#243A5E',
      fontFamily: 'Pretendard, sans-serif',
      fontSize: '16px',
      padding: { x: 16, y: 10 },
    }).setOrigin(0.5).setDepth(30);
    this.time.delayedCall(1400, () => {
      if (this.toast) {
        this.toast.destroy();
        this.toast = null;
      }
    });
  }

  showResult(isSuccess, remainingTroops) {
    this.scene.start('ResultScene', {
      isSuccess,
      remainingTroops,
      stage: this.gameState.stage,
    });
  }
}
