module.exports = function(player, statusLED) {
  player.add({
    playlist: ['standby.mp3'],
    clear: true
  }).then(player.play);

  statusLED.queue([
    { colour: [255,255,255] },
    { colour: [0,0,0],
      transition: {
        yoyo: true
      }
    }
  ]);
};
