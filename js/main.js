import StartScene from './scenes/StartScene.js';
import GameScene from './scenes/GameScene.js';
import ResultScene from './scenes/ResultScene.js';

function createGame() {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game',
    width: 540,
    height: 960,
    backgroundColor: '#1d2a22',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [StartScene, GameScene, ResultScene],
  });
}

let game = null;

function boot() {
  const sdk = window._oneStoreSDK; // 원스토어 앱일 때만 존재

  if (sdk) {
    // 원스토어 앱: 로딩 진행률 보고 → startGameAsync → 게임 생성
    let progress = 0;
    const timer = setInterval(() => {
      sdk.setLoadingProgress(progress);
      if (progress >= 100) {
        clearInterval(timer);
        sdk.startGameAsync()
          .then(() => { game = createGame(); })
          .catch(() => { game = createGame(); });
      } else {
        progress += 10;
      }
    }, 80);
  } else {
    // 일반 브라우저: 바로 시작
    game = createGame();
  }

  document.addEventListener('onestore:pause', () => {
    if (!game) return;
    game.scene.getScenes(true).forEach((s) => s.scene.pause());
    game.sound.pauseAll();
  });
  document.addEventListener('onestore:resume', () => {
    if (!game) return;
    game.scene.getScenes(true).forEach((s) => s.scene.resume());
    game.sound.resumeAll();
  });
}

// onestore:ready = 일반 브라우저, onestore:init = 원스토어 앱
document.addEventListener('onestore:ready', boot, { once: true });
document.addEventListener('onestore:init', boot, { once: true });
