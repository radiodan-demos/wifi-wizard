module.exports.sound = function(player) {
  player.add({
    playlist: ['shutdown.mp3'],
    clear: true
  }).then(player.play);
};

module.exports.light = function(statusLED) {
  statusLED.change({ queue: [
    { colour: [10,10,10] },
    { colour: [255,0,0],
      transition: {
        yoyo: true
      }
    }
  ]});
};
