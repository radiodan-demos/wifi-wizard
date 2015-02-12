module.exports.sound = function(player) {
  player.add({ playlist: ['silence.wav', 'radio.mp3'], clear: true})
    .then(function() {
      player.repeat({ value: true });
    })
    .then(player.play)
    .then(function() {
      // seek somewhere between 5 and 10 minutes into the show
      var seekTime = randomTime(5, (10*60));
      return player.seek({ position: 1, time: seekTime });
    });
};

module.exports.light = function(statusLED) {
  statusLED.emit({colour: [0,255,0]});
};

function randomTime(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
