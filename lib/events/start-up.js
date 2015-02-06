module.exports = function(player, statusLED) {
  player.add({
    playlist: ['start-up.mp3'],
    clear: true
  }).then(player.play);

  statusLED.emit({ colour: [255,0,0] });
};
