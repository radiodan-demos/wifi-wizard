var parseOptions = require('./parse-options'),
    Events       = require('./events');

module.exports = function(app, player, statusLED) {
  var events = Events.create(player, statusLED);

  app.post('/*', function(req, res) {
    var eventName = req.params[0],
        outputs = parseOptions(req.body.effectType);

    if(outputs.length === 0) {
      console.log('Unknown option', req.body.effectType);
      res.sendStatus(400);
    }

    events.exec(eventName, outputs, req.body.soundType);

    res.sendStatus(200);
  });

  return app;
};
