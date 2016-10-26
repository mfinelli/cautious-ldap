const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const log = require('bunyan').createLogger({name: 'cautious-ldap'});
const config = require('./config/config');
const router = {
  change: require('./routes/change')
};

if (config.get('app').templateOverrideDir === '') {
  app.set('views', path.join(__dirname, 'views'));
} else {
  log.info('template override directory set: ' + config.get('app').templateOverrideDir);
  app.set('views', [config.get('app').templateOverrideDir, path.join(__dirname, 'views')]);
}

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router.change);

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function() {
  log.info('cautious-ldap listening on port 3000');
});
