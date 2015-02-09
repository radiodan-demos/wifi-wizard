module.exports.sound = function(player) {
  player.add({ playlist: ['radio.mp3'], clear: true})
    .then(function() {
      // TODO: add random seeking
      return player.seek({ time: randomTime(10, (2*60*60)) });
    }).then(player.play);
};

module.exports.light = function(statusLED) {
  statusLED.emit({colour: [0,255,0]});
};

function randomTime(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
