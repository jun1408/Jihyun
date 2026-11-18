export default class PlayerInput {
  constructor(scene) {
    this.scene = scene;
  }

  bind(target, callback) {
    target.setInteractive({ useHandCursor: true });
    target.on('pointerdown', callback);
    return target;
  }
}
