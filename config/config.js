const convict = require('convict');

const config = convict({
  admin: {
    user: {
      doc: '(full) Distinguished name (DN) of the admin user/',
      format: String,
      default: null,
      env: 'CL_ADMIN_DN'
    },
    password: {
      doc: 'Password for the LDAP admin account.',
      format: String,
      default: '',
      env: 'CL_ADMIN_PASSWORD'
    }
  },
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
      format: 'port',
      default: 389,
      env: 'CL_LDAP_PORT'
    },
    ssl: {
      doc: 'Whether to connect to the LDAP server over SSL.',
      format: Boolean,
      default: false,
      env: 'CL_LDAP_SSL'
    },
    searchBase: {
      doc: 'Default base for all searches.',
      format: String,
      default: 'dc=com',
      env: 'CL_LDAP_BASE'
    },
    filter: {
      doc: 'Filter to use when searching for users (will replace %USER%).',
      format: String,
      default: '(|(uid=%USER%))',
      env: 'CL_LDAP_FILTER'
    }
  }
});

config.validate({ strict: true });
module.exports = config;
