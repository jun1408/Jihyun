export default class PlayerInput {
  constructor(scene) {
    this.cursors = scene.input.keyboard.createCursorKeys();
  }
}
