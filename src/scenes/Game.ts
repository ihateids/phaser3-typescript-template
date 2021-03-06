import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', 'assets/images/phaser3-logo.png');
  }

  create() {
    const logo = this.add.image(896, 200, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }
}
