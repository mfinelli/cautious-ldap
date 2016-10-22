const expect = require('chai').expect;
const validPassword = require('../lib/validPassword');

it('should return new password', function() {
  let result = validPassword('old', 'new', 'new');

  return result.then(function(pw) {
    expect(pw).to.equal('new');
  });
});
