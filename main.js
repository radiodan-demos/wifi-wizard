var express      = require('express'),
    app          = express(),
    bodyParser   = require('body-parser'),
    serveStatic  = require('serve-static'),
    radiodan     = require('radiodan-client').create(),
    player       = radiodan.player.get('main'),
    statusLED    = radiodan.RGBLED.get('power'),
    apiRoutes    = require('./lib/routes'),
    port         = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(serveStatic(__dirname + '/public'));

app.use('/api', apiRoutes(express.Router(), player, statusLED));

app.listen(port);

console.log('Listening on http://127.0.0.1:'+port);
