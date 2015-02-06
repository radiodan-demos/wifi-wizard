module.exports.sound = function(player) {
  player.add({
    playlist: ['network-created.mp3'],
    clear: true
  }).then(player.play);
};

module.exports.light = function(statusLED) {
  statusLED.queue([
    { colour: [0,0,0] },
    { colour: [0,0,255],
      transition: {
        yoyo: true
      }
    }
  ]);
};
