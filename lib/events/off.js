module.exports = function(player, statusLED) {
  player.clear();
  statusLED.emit({emit: false});
};
