'use strict';

const LDAP = require('ldap-client'),
  config = require('./config');

let protocol = config.get('ldap').ssl ? 'ldaps://' : 'ldap://';
let host = config.get('ldap').hostname;
let port = config.get('ldap').port;

module.exports = new LDAP({
  uri: protocol + [host, port].join(':'),
  base: config.get('ldap').searchBase
});
