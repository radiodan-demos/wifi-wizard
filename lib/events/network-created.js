module.exports = function(player, statusLED) {
  player.add({
    playlist: ['network-created.mp3'],
    clear: true
  }).then(player.play);

  statusLED.queue([
    { colour: [0,0,0] },
    { colour: [0,0,255],
      transition: {
        yoyo: true
      }
    }
  ]);
};
