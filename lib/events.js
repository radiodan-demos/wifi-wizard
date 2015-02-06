var events  = {
    'off': require('./events/off'),
    'start-up': require('./events/start-up'),
    'standby': require('./events/standby'),
    'play': require('./events/play'),
    'network-created': require('./events/network-created'),
    'shutdown': require('./events/shutdown'),
    'network-lost': require('./events/network-lost'),
  };

module.exports.create = function(player, statusLED) {
  return {exec: exec};

  function exec(eventName, outputs) {
    var method = events[eventName];

    if(typeof method === 'undefined') {
      console.log('Unknown event', eventName);
      return false;
    }

    if(outputs.indexOf('sound') == -1) {
      player.clear();
    } else {
      method.sound(player);
    }

    if(outputs.indexOf('light') == -1) {
      statusLED.emit({emit: false});
    } else {
      method.light(statusLED);
    }
  }
}
