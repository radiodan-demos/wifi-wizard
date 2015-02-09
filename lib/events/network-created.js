module.exports.sound = function(player, soundType) {
  player.add({
    playlist: ['radiodan_fx_'+soundType+'_02-miniwifi.wav'],
    clear: true
  }).then(function() {
    player.repeat({ value: true });
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
