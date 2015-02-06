module.exports = function(options) {
  var outputs = [];

  switch(options) {
  case 'sound':
    outputs.push('sound');
    break;
  case 'light':
    outputs.push('light');
    break;
  case 'both':
    outputs.push('sound');
    outputs.push('light');
    break;
  }

  return outputs;
};
