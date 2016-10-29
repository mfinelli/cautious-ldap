// http://stackoverflow.com/a/1144788

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

module.exports = function(str, search, replace) {
  return str.replace(new RegExp(escapeRegExp(search), 'g'), replace);
};
