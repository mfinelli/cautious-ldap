const expect = require('chai').expect;
const validPassword = require('../lib/validPassword');

it('should return new password', function() {
  return validPassword('old', 'new', 'new').then(function(pw) {
    expect(pw).to.equal('new');
  }).catch(function(_err) {
    throw new Error('was not supposed to fail');
  });
});

it('should fail if old == new', function() {
  return validPassword('old', 'old', 'old').then(function(_pw) {
    throw new Error('was not supposed to succeed');
  }).catch(function(err) {
    expect(err.message).to.equal('Old password can not equal new password.');
  });
});

it('should fail if new != verify', function() {
  return validPassword('old', 'new', 'ne').then(function(_pw) {
    throw new Error('was not supposed to succeed');
  }).catch(function(err) {
    expect(err.message).to.equal('New password must match verify password.');
  });
});
