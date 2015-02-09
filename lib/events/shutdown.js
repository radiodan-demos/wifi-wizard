module.exports.sound = function(player, soundType) {
  player.add({
    playlist: ['radiodan_fx_'+soundType+'_04-goodbye.wav'],
    clear: true
  }).then(function() {
    player.repeat({ value: false });
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
