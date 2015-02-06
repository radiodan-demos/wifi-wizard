module.exports = function(player, statusLED) {
  player.add({ playlist: ['radio.mp3'], clear: true})
    .then(function() {
      // TODO: add random seeking
      return player.seek({ time: 104 });
    }).then(player.play);

  statusLED.emit({colour: [0,0,255]});
}
