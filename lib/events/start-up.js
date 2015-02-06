module.exports.sound = function(player) {
  player.add({
    playlist: ['start-up.mp3'],
    clear: true
  }).then(player.play);
};

module.exports.light = function(statusLED) {
  statusLED.emit({ colour: [255,0,0] });
};
