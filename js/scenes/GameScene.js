import BuildingSystem from '../building/BuildingSystem.js';
import CombatSystem from '../combat/CombatSystem.js';
import PlayerInput from '../input/PlayerInput.js';
import GameState from '../state/GameState.js';

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

    this.cameras.main.setBackgroundColor('#36543b');

    this.add.text(270, 120, `${this.gameState.stage} 스테이지`, {
      color: '#fff7df',
      fontFamily: 'sans-serif',
      fontSize: '30px',
    }).setOrigin(0.5);

    this.add.text(270, 480, '플레이 화면', {
      color: '#ffffff',
      fontFamily: 'sans-serif',
      fontSize: '42px',
    }).setOrigin(0.5);
  }

  showResult(isSuccess, remainingTroops) {
    this.scene.start('ResultScene', {
      isSuccess,
      remainingTroops,
      stage: this.gameState.stage,
    });
  }
}
