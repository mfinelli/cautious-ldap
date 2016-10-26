# Cautious LDAP

[![Build Status](https://travis-ci.org/mfinelli/cautious-ldap.svg?branch=master)](https://travis-ci.org/mfinelli/cautious-ldap)

Allow ldap users to self-manage their passwords.

## Template Overrides

It's possible to override the default templates to provide custom branding or
different language. Unfortunately, all of the templates need to be overridden.

When launching the app pass the `CL_TEMPLATE_DIR` option with the full path
to where the custom templates are stored.
