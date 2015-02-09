module.exports.sound = function(player) {
  player.add({
    playlist: ['start-up.mp3'],
    clear: true
  }).then(player.play);
};

module.exports.light = function(statusLED) {
  statusLED.change({ queue: [
    { colour: [0,0,0] },
    { colour: [255,255,255],
      transition: {
        yoyo:true
      }
    }
  ]});
};
