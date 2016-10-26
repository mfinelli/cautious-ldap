const convict = require('convict');

const config = convict({
  admin: {},
  app: {
    templateOverrideDir: {
      doc: 'Directory where custom template overrides live.',
      format: String,
      default: '',
      env: 'CL_TEMPLATE_DIR'
    }
  },
  ldap: {
    hostname: {
      doc: 'Hostname of the LDAP server.',
      format: String,
      default: 'localhost',
      env: 'CL_LDAP_HOST'
    },
    port: {
      doc: 'Port of the LDAP server.',
      format: "port",
      default: 389,
      env: 'CL_LDAP_PORT'
    },
    ssl: {
      doc: 'Whether to connect to the LDAP server over SSL.',
      format: Boolean,
      default: false,
      env: 'CL_LDAP_SSL'
    }
  }
});

config.validate({ strict: true });
module.exports = config;
