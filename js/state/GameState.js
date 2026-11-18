export default class GameState {
  constructor(stage) {
    this.stage = Phaser.Math.Clamp(stage, 1, 3);
    this.day = 1;
    this.health = 100;
    this.blocks = 0;
    this.berries = 0;
    this.hasSword = false;
    this.selectedDirection = null;
  }
}
