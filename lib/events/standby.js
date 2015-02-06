module.exports.sond = function(player) {
  player.add({
    playlist: ['standby.mp3'],
    clear: true
  }).then(player.play);
};

module.exports.light = function(statusLED) {
  statusLED.queue([
    { colour: [255,255,255] },
    { colour: [0,0,0],
      transition: {
        yoyo: true
      }
    }
  ]);
};
