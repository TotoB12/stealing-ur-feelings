const loadState = {
  preload: function () {
    loadGfx = game.add.graphics(0, 0);

    if (K_USER_MUST_INITIATE_VIDEO) {
      game.load.image("playButtonImage", "img/play.png", 335, 375);
    }

    game.load.image("webbyLaurel", "img/webby_laurel.png", 334, 334);
    game.load.image("don", "img/surprised-man.jpg", 640, 480);
    game.load.image("tribecaLaurel", "img/tribeca_laurel.png", 300, 157);
    game.load.image("ridmLaurel", "img/ridm_laurel.png", 300, 218);
    game.load.image("opencityLaurel", "img/opencity_laurel.png", 300, 159);
    game.load.image("ciffLaurel", "img/ciff_laurel.png", 300, 186);
    game.load.image("sufStamp", "img/suf_stamp.png", 200, 201);
    // game.load.image("pizzaStamp", "img/pizza_stamp.png", 1280, 704);

    game.load.image("fullscreenButton", "img/fullscreen_button.png", 48, 48);
    game.load.image("tophat", "img/tophat.png", 500, 470);
    game.load.image("monocle", "img/monocle.png", 250, 359);
    game.load.image("mustache", "img/mustache.png", 500, 164);
    game.load.image("sunglasses", "img/sunglasses.png", 500, 200);
    game.load.image("mozillaLogo", "img/mozilla-logo-bw-rgb.png", 188, 54);
    game.load.image("headPhysicsSprite", "img/headPhysicsSprite.png", 100, 100);
    game.load.image("secretEmoji", "img/secretEmoji.png", 30, 30);
    game.load.image("moneyFaceEmoji", "img/moneyFaceEmoji.png", 30, 30);
    game.load.image("dogNose", "img/dogNose.png", 500, 296);
    game.load.image("dogEars", "img/dogEars.png", 500, 127);
    game.load.image("smileEmoji", "img/smileEmoji.png", 30, 30);
    game.load.image("frownEmoji", "img/frownEmoji.png", 30, 30);
    game.load.image("gradient1", "img/gradient1.png", 1280, 720);
    game.load.image("gradient2", "img/gradient2.png", 640, 720);
    game.load.image("gradient3", "img/gradient3.png", 1280, 720);
    game.load.image("pictureFrame", "img/picture_frame.png", 1600, 1455);
    game.load.image("museumCard", "img/museumCard.png", 413, 215);
    game.load.image("springStudiosMap", "img/springStudiosMap.png", 640, 720);
    game.load.image("moneyBagEmoji", "img/moneyBagEmoji.png", 72, 72);

    game.load.image("computerDesktop", "img/computerDesktop.png", 1280, 720);
    game.load.image("mouseCursor", "img/mouseCursor.png", 30, 48);

    game.load.image("disney", "img/disney.png", 697, 386);
    game.load.image("20thCenturyFox", "img/20thCenturyFox.png", 512, 374);
    game.load.image(
      "kelloggsCornFlakes",
      "img/kelloggsCornFlakes.png",
      497,
      359
    );
    game.load.image("yourLocalPizzeria", "img/yourLocalPizzeria.png", 451, 458);
    game.load.image("forYourNextJob", "img/forYourNextJob.png", 733, 539);

    game.load.image("zuck1", "img/zuck/1.png", 675, 280);
    game.load.image("zuck2", "img/zuck/2.png", 675, 280);
    game.load.image("zuck3", "img/zuck/3.png", 675, 280);
    game.load.image("zuck4", "img/zuck/4.png", 675, 280);
    game.load.image("zuck5", "img/zuck/5.png", 675, 280);
    game.load.image("zuck6", "img/zuck/6.png", 675, 280);
    game.load.image("zuck7", "img/zuck/7.png", 675, 280);
    game.load.image("zuck8", "img/zuck/8.png", 675, 280);
    game.load.image("zuck9", "img/zuck/9.png", 900, 373);
    game.load.image("zuck10", "img/zuck/10.png", 675, 280);
    game.load.image("zuck11", "img/zuck/11.png", 675, 280);

    game.load.image("poorHat", "img/poorHat.png", 500, 459);
    game.load.image("crown", "img/crown.png", 500, 388);
    game.load.image("heart", "img/heart.png", 250, 203);
    game.load.image("prohibited", "img/prohibited.png", 250, 243);
    game.load.image(
      "thoughtBubbleHappy",
      "img/thoughtBubbleHappy.png",
      500,
      492
    );
    game.load.image("thoughtBubbleSad", "img/thoughtBubbleSad.png", 500, 493);
    game.load.image(
      "mozillaLogoWhite",
      "img/moz-logo-1color-white-rgb.png",
      375,
      107
    );

    game.load.image(
      "faceCameraAndCheckLighting",
      "img/faceCameraAndCheckLighting.png",
      571,
      80
    );
    game.load.image(
      "pressRedButtonToStart",
      "img/pressRedButtonToStart.png",
      451,
      80
    );

    // Note - there are 151 frames total, but the animation locks up at frame 79
    // Is it a waste of resources? You bet
    for (let i = 0; i < 80; i += 1) {
      let pidx = i.toString();
      let len = i.toString().length;

      for (let j = 0; j < 5 - len; j += 1) {
        pidx = `0${pidx}`;
      }

      game.load.image(
        `logoFrame${i}`,
        `img/logo_animation/Final_SteelingUrFeelings_Logo_03_${pidx}.png`
      );
    }

    game.load.audio("doubleclick", "sfx/doubleclick.mp3");
    game.load.audio("kaching", "sfx/kaching.mp3");
    game.load.audio("youLikeDogs", "sfx/ohio_tags/youLikeDogs.mp3");
    game.load.audio("youDontLikeDogs", "sfx/ohio_tags/youDontLikeDogs.mp3");
    game.load.audio("youPreferMen", "sfx/ohio_tags/youPreferMen.mp3");
    game.load.audio("youPreferWomen", "sfx/ohio_tags/youPreferWomen.mp3");
    game.load.audio(
      "youPreferWhitePeople",
      "sfx/ohio_tags/youPreferWhitePeople.mp3"
    );
    game.load.audio(
      "youPreferBlackPeople",
      "sfx/ohio_tags/youPreferBlackPeople.mp3"
    );
    game.load.audio("thatPartBit", "sfx/ohio_tags/thatPartBit.mp3");
    game.load.audio("thatPartWay", "sfx/ohio_tags/thatPartWay.mp3");
    game.load.audio("isPoor", "sfx/ohio_tags/isPoor.mp3");
    game.load.audio("isNotPoor", "sfx/ohio_tags/isNotPoor.mp3");
    game.load.audio("isMentallyIll", "sfx/ohio_tags/isMentallyIll.mp3");
    game.load.audio("isNotMentallyIll", "sfx/ohio_tags/isNotMentallyIll.mp3");
    game.load.audio("isSelfLoathing", "sfx/ohio_tags/isSelfLoathing.mp3");
    game.load.audio("isNotSelfLoathing", "sfx/ohio_tags/isNotSelfLoathing.mp3");
    game.load.audio("finalPop", "sfx/finalPop.mp3");

    game.load.video("dogloop", "vid/dogs_720p_4mbps_05242019.mp4");
    game.load.video("film", "vid/revision_4_720p_4mbps_08202019.mp4");
  },

  create: function () {
    game.state.start("bootcv");
  },

  loadUpdate: function () {
    loadGfx.clear();
    loadGfx.beginFill(0x8c8c8c, 1);
    loadGfx.drawRect(
      game.world.centerX - 300,
      game.world.centerY - 100,
      600,
      20
    );
    loadGfx.beginFill(0xffffff, 1);
    loadGfx.drawRect(
      game.world.centerX - 300,
      game.world.centerY - 100,
      game.load.progress * 6,
      20
    );
  },
};
