const Promise = require('bluebird');

module.exports = function(old_pw, new_pw, ver_pw) {
  return new Promise(function(resolve, reject) {
    if (old_pw === new_pw) {
      return reject(new Error('Old password can not equal new password.'));
    }

    if (new_pw !== ver_pw) {
      return reject(new Error('New password must match verify password.'));
    }

    return resolve(new_pw);
  });
};
