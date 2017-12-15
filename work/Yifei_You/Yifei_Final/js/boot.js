var bootState = {

  preload: function() {
    game.load.spritesheet('man', 'assets/image/man.png', 30, 117);
  },

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    game.state.start('load');
  }

};
