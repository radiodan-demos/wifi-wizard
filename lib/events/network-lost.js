module.exports.sound = function(player) {
  player.add({
    playlist: ['network-lost.mp3'],
    clear: true
  }).then(player.play);
};

module.exports.light = function(statusLED) {
  statusLED.emit([
    //{ colour: [255,255,255] },
    { colour: [255,255,0],
      transition: {
        yoyo: true
      }
    }
  ]);
};
