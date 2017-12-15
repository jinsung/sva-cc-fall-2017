var loadState = {
  loading_animation: function() {
    man = game.add.sprite(
      game.world.centerX - 30/2,
      game.world.centerY - 117/2,
      'man',
      4
    );
    man.animations.add('right', [5, 6, 7, 8], 10, true);
    man.animations.play('right');

    var text = game.add.text(game.world.centerX, game.world.centerY + man.height - 20, 'loading', {});
    text.anchor.set(0.5);
    text.align = 'center';
    text.font = 'monospace';
    text.fontSize = 20;
    text.fill = '#ffffff';
  },

  preload: function () {
    this.loading_animation();

    game.load.image('bg', 'assets/image/game.png');
    game.load.spritesheet('man_key', 'assets/image/man_key.png', 30, 117);
    game.load.spritesheet('bitch', 'assets/image/bitch.png', 30, 117);
    game.load.spritesheet('doggie', 'assets/image/doggie.png', 67.5, 59);
    game.load.image('ground', 'assets/image/platform.png');
    game.load.image('open_door', 'assets/image/open_door.png');
    game.load.image('win', 'assets/image/formalwin.png');
    game.load.image('manhole', 'assets/image/manhole.png');
    game.load.image('doghouse', 'assets/image/doghouse.png');
    game.load.image('cat', 'assets/image/cat.gif');
    game.load.image('bone', 'assets/image/bone.png');
    game.load.image('key', 'assets/image/key.png');
    game.load.image('cactus_needle', 'assets/image/cactus_needle.png');

    game.load.image('gameover', 'assets/image/game_over.png');

    game.load.audio('music', 'assets/sound/zelda-Track-4.mp3');
    game.load.audio('bark', 'assets/sound/bark.mp3');
    game.load.audio('item_pickup', 'assets/sound/item_pickup.m4a');
  },

  create: function () {


    // game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);
    // game.add.plugin(PhaserSuperStorage.StoragePlugin);
    // game.add.plugin(PhaserInput.Plugin);

    game.state.start('play');
  }

};
