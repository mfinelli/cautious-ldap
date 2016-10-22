const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function() {
  console.log('cautious-ldap listening on port 3000');
});
