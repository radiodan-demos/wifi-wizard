module.exports.sound = function(player) {
  player.add({
    playlist: ['network-created.mp3'],
    clear: true
  }).then(player.play);
};

module.exports.light = function(statusLED) {
  statusLED.change({ queue: [
    { colour: [10,10,10] },
    { colour: [0,0,255],
      transition: {
        yoyo: true
      }
    }
  ]});
};
