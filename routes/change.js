const express = require('express'),
  router = express.Router(),
  log = require('../config/log'),
  validPassword = require('../lib/validPassword');

router.post('/change', function(req, res) {
  validPassword(req.body.old_password, req.body.new_password, req.body.confirm_password).then(function(new_password) {
    res.send(new_password);
  }).catch(function(err) {
    log.error(err.message);
    res.redirect('/');
  });
});

module.exports = router;
