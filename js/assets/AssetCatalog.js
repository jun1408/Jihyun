const IMAGE_ROOT = 'assets/images';

export const ASSETS = {
  baseCamp: 'base-camp',
  playerObserver: 'player-observer',
  tree: 'resource-tree',
  berries: 'resource-berries',
  block: 'resource-block',
  swordItem: 'item-sword',
  swordReady: 'weapon-sword-ready',
  swordSwing: 'weapon-sword-swing',
};

export const MAPS = [
  {
    name: '이끼빛 숲',
    observerDay: 'bg-observer-forest-day',
    observerNight: 'bg-observer-forest-night',
    actionDay: 'bg-action-forest-day',
    actionNight: 'bg-action-forest-night',
    enemy: 'enemy-rabbit',
    enemyName: '숲토끼',
  },
  {
    name: '안개바람 고원',
    observerDay: 'bg-observer-plateau-day',
    observerNight: 'bg-observer-plateau-night',
    actionDay: 'bg-action-plateau-day',
    actionNight: 'bg-action-plateau-night',
    enemy: 'enemy-boar',
    enemyName: '멧돼지',
  },
  {
    name: '검은달 협곡',
    observerDay: 'bg-observer-canyon',
    observerNight: 'bg-observer-canyon',
    actionDay: 'bg-action-canyon',
    actionNight: 'bg-action-canyon',
    enemy: 'enemy-tiger',
    enemyName: '호랑이',
  },
];

const FILES = {
  [ASSETS.baseCamp]: 'base-camp.png',
  [ASSETS.playerObserver]: 'player-observer.png',
  [ASSETS.tree]: 'resource-tree.png',
  [ASSETS.berries]: 'resource-berries.png',
  [ASSETS.block]: 'resource-block.png',
  [ASSETS.swordItem]: 'item-sword.png',
  [ASSETS.swordReady]: 'weapon-sword-ready.png',
  [ASSETS.swordSwing]: 'weapon-sword-swing.png',
  'bg-observer-forest-day': 'bg-observer-forest-day.png',
  'bg-observer-forest-night': 'bg-observer-forest-night.png',
  'bg-observer-plateau-day': 'bg-observer-plateau-day.png',
  'bg-observer-plateau-night': 'bg-observer-plateau-night.png',
  'bg-observer-canyon': 'bg-observer-canyon.png',
  'bg-action-forest-day': 'bg-action-forest-day.png',
  'bg-action-forest-night': 'bg-action-forest-night.png',
  'bg-action-plateau-day': 'bg-action-plateau-day.png',
  'bg-action-plateau-night': 'bg-action-plateau-night.png',
  'bg-action-canyon': 'bg-action-canyon.png',
  'enemy-rabbit': 'enemy-rabbit.png',
  'enemy-boar': 'enemy-boar.png',
  'enemy-tiger': 'enemy-tiger.png',
};

export function preloadImages(scene) {
  Object.entries(FILES).forEach(([key, filename]) => {
    scene.load.image(key, `${IMAGE_ROOT}/${filename}`);
  });
}
