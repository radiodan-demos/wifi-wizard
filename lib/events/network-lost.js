module.exports = function(player, statusLED) {
  player.add({
    playlist: ['network-lost.mp3'],
    clear: true
  }).then(player.play);

  statusLED.queue([
    { colour: [255,255,255] },
    { colour: [255,255,0],
      transition: {
        yoyo: true
      }
    }
  ]);
};
