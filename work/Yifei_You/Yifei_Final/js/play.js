var cursors;
var wasd;

var man;
var bitch;
var doggie;
var bounds;
var music;
var sounds;
var bone;
var bark;
var doghouse;
var key;

var items = [];

var dog_status = 'calm';
var dog_attack_man = true;
var man_speed;
var door_bound;
var door_hit;
var open_door;

var playState = {
  create: function() {

    music = game.add.audio('music');
    music.play();

    game.add.sprite(0, 0, 'bg');

    var cat = game.add.sprite(800, 300, 'cat');

    bone = game.add.button(400, 600, 'bone', this.stop_attack, this);
    bone.scale.set(0.5 , 0.5);

    var manhole = game.add.sprite(190, 730, 'manhole');
    key = game.add.sprite(50, 10, 'key');
    key.visible = false;

    cactus_needle = game.add.sprite(150, 10, 'cactus_needle');
    cactus_needle.visible = false;
    open_door = game.add.sprite(746, 427, 'open_door');
    open_door.visible = false;

    this.add_man();
    this.add_bitch();
    this.add_doggie();



    bounds = game.add.group();
    bounds.enableBody = true;

    var carbound = bounds.create(0, 450, 'ground');
    carbound.width = 195;
    carbound.height = 50;
    carbound.body.immovable = true;
    carbound.visible = false;

    var housebound = bounds.create(750, 575, 'ground');
    housebound.width = 25;
    housebound.height = 270;
    housebound.body.immovable = true;
    housebound.visible = false;

    door_bound = game.add.sprite(750, 425, 'ground');
    game.physics.arcade.enable(door_bound);
    door_bound.width = 25;
    door_bound.height = 140;
    door_bound.body.immovable = true
    door_bound.visible = false;

    var house_back_wall = bounds.create(game.world.width - 25, 400, 'ground');
    house_back_wall.width = 25;
    house_back_wall.height = 270;
    house_back_wall.body.immovable = true;
    house_back_wall.visible = false;

    var house_ground = bounds.create(750, 570, 'ground');
    house_ground.width = 667;
    house_ground.height = 25;
    house_ground.body.immovable = true;
    house_ground.visible = false;

    var ground = bounds.create(0, game.world.height - 60, 'ground');
    ground.width = 750;
    ground.height = 60;
    ground.body.immovable = true;
    ground.visible = false;



    doghouse = bounds.create(450, 690, 'doghouse');
    doghouse.body.immovable = true;
    doghouse.body.setSize(120, 50, 30, 70);

    cursors = game.input.keyboard.createCursorKeys();
    wasd = {
      up: game.input.keyboard.addKey(Phaser.Keyboard.W),
      down: game.input.keyboard.addKey(Phaser.Keyboard.S),
      left: game.input.keyboard.addKey(Phaser.Keyboard.A),
      right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
  },


  door_open: function() {

  }
}

playState.stop_attack = function() {
  console.log('stop attack');

  if (typeof bark !== 'undefined') {
    bark.stop();
  }
  dog_attack_man = false;
  dog_status = 'calm';

  bone.x = doggie.x - 15;
  bone.y = doggie.y + 17;
  doggie.body.velocity.setTo(0, 0);
  doggie.animations.play('left');
  doggie.animations.stop();
}


playState.game_over = function() {
  console.log('game over!!!');
  game.state.start('gameover', false);
  this.stop_attack();
  man.animations.stop();
  man.body.velocity.x = 0;
}

playState.man_tries_to_enter = function() {
  if (items.indexOf('key') > -1) {
    open_door.visible = true;
    door_bound.body = null;
    var that = this;
    setTimeout(function(){
      that.win();
    }, 1000);
  }
}

playState.win = function() {
  var win = game.add.sprite(
    game.world.width/2 - 377/2,
    game.world.height/2 - 213/2, 'win');
  this.stop_attack();
}

playState.update = function() {
  var hitBounds = game.physics.arcade.collide(man, bounds);
  var hitBounds = game.physics.arcade.collide(bitch, bounds);
  door_hit = game.physics.arcade.collide(man, door_bound, this.man_tries_to_enter, null, this);
  game.physics.arcade.collide(doggie, bounds);
  // game.physics.arcade.collide(doggie, man);
  // game.physics.arcade.collide(doggie, man, game_over, null, this);


  man.body.velocity.x = 0;
  man.body.velocity.y = 0;
  bitch.body.velocity.x = 0;
  bitch.body.velocity.y = 0;

  man_speed = dog_status == 'calm' ? 100 : 200;

  if (cursors.left.isDown || wasd.left.isDown) {
			man.body.velocity.x = -man_speed;
			man.animations.play('left');

	}
  else if (cursors.right.isDown || wasd.right.isDown) {
			man.body.velocity.x = man_speed;
			man.animations.play('right');

  }

  if (cursors.up.isDown || wasd.up.isDown) {

    if (cursors.right.isDown || wasd.right.isDown) {
      man.animations.play('right');
    }
    else if (cursors.left.isDown || wasd.left.isDown) {
      man.animations.play('left');
    }
    else {
      man.animations.play('down');
    }

    if (man.y + man.height > 595) { // todo: fix
        man.body.velocity.y = -man_speed;

    }
    else if (man.x > 700 && man.y + man.height > 570) {
      man.body.velocity.y = -man_speed;
    }
    else {
      man.animations.stop();
    }



  } else if (cursors.down.isDown || wasd.down.isDown) {
    man.body.velocity.y = man_speed;
    if (cursors.right.isDown || wasd.right.isDown) {
      man.animations.play('right');
    }
    else if (cursors.left.isDown || wasd.left.isDown) {
      man.animations.play('left');
    }
    else {
      man.animations.play('down');
    }
	}


  if (
    !cursors.down.isDown && !wasd.down.isDown &&
    !cursors.up.isDown && !wasd.up.isDown &&
    !cursors.left.isDown && !wasd.left.isDown &&
    !cursors.right.isDown && !wasd.right.isDown

  ) {
			man.animations.stop();
      man.frame = 4;
	}

  this.animate_bitch();

  if (dog_attack_man && game.physics.arcade.distanceBetween(doggie, man) < 201) {
    this.attack_man();
  }

  if (
    dog_attack_man && game.physics.arcade.distanceBetween(doggie, man) < 40
  ) {
    this.game_over();
  }

  if (game.physics.arcade.distanceToXY(man, 525, 646) <= 10) {
    if (items.indexOf('key') < 0) {
      items.push('key');
      man.loadTexture('man_key', 4);
      key.visible = true;
      var item_pickup = game.add.audio('item_pickup');
      item_pickup.play();
    }
  }

  if (game.physics.arcade.distanceToXY(man, 542, 474) <= 10) {
    if (items.indexOf('cactus_needle') < 0) {
      items.push('cactus_needle');
      cactus_needle.visible = true;
      var item_pickup = game.add.audio('item_pickup');
      item_pickup.play();
    }
  }
}


var bitch_direction = 'left';
playState.animate_bitch = function() {
  if (bitch_direction == 'left') {
    bitch.body.velocity.x = -90;
    bitch.animations.play('left');
  }

  if (bitch_direction == 'right') {
    bitch.body.velocity.x = 70;
    bitch.animations.play('right');
  }

  if (bitch.x <= 800) {
    bitch_direction = 'right';
  }

  if (bitch.x >= 1300) {
    bitch_direction = 'left';
  }
}

playState.attack_man = function() {
  if (dog_status == 'calm') {
    // man.loadTexture('bitch', 4);
    doggie.animations.play('left');
    bark = game.add.audio('bark');
    bark.loopFull(1);
    bark.play();
  }
  dog_status = 'attacking';

  if (doggie.x > man.x) {
    doggie.animations.play('left');
  }
  else {
    doggie.animations.play('right');
  }

  game.physics.arcade.moveToXY(
    doggie,
    man.x,
    man.y,
    2000,
    500
  );
}

playState.dog_left = function() {
  doggie.animations.play('left');
  doggie.body.velocity.x = -150;
}
playState.dog_right = function() {
  doggie.animations.play('right');
  doggie.body.velocity.x = 150;
}

playState.add_man = function() {
  man = game.add.sprite(100, 520, 'man', 4);
  game.physics.arcade.enable(man);
	man.body.collideWorldBounds = true;

  man.animations.add('up', [4, 5, 4, 5], 10, true);
  man.animations.add('down', [4, 5, 4, 5], 10, true);
  man.animations.add('left', [0, 1, 2, 3], 10, true);
	man.animations.add('right', [5, 6, 7, 8], 10, true);
}

playState.add_bitch = function() {
  bitch = game.add.sprite(1000, 450, 'bitch', 4);
  game.physics.arcade.enable(bitch);
	bitch.body.collideWorldBounds = true;

  bitch.animations.add('up', [4, 5, 4, 5], 10, true);
  bitch.animations.add('down', [4, 5, 4, 5], 10, true);
  bitch.animations.add('left', [0, 1, 2, 3], 10, true);
	bitch.animations.add('right', [5, 6, 7, 8], 10, true);
}

playState.add_doggie = function() {
  doggie = game.add.sprite(450, 720, 'doggie', 1);
  game.physics.arcade.enable(doggie);
	doggie.body.collideWorldBounds = true;
  doggie.body.immovable = true;

  doggie.animations.add('left', [0, 1, 0, 1], 10, true);
	doggie.animations.add('right', [2, 3, 2, 3], 10, true);
}
