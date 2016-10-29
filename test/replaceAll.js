const expect = require('chai').expect,
  replaceAll = require('../lib/replaceAll');

it('should replace all occurrences', function() {
  return expect(replaceAll('replace %ME% with %ME%', '%ME%', 'YOU')).to
    .equal('replace YOU with YOU');
});
