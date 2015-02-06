module.exports = function(player, statusLED) {
  player.add({
    playlist: ['shutdown.mp3'],
    clear: true
  }).then(player.play);

  statusLED.queue([
    { colour: [255,255,255] },
    { colour: [255,0,0],
      transition: {
        yoyo: true
      }
    }
  ]);
};
