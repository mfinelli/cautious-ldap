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
  ldap: {}
});

config.validate({ strict: true });
module.exports = config;
