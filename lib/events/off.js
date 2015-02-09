module.exports.sound = function(player) {
  player.clear();
};

module.exports.light = function(statusLED) {
  statusLED.emit({colour: [0,0,0]});
};
