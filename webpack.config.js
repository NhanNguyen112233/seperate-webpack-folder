const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    // no need to declare remotes as they are dynamically loaded.
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    "admin-core-web-libs": {
      singleton: false,
      strictVersion: false,
      requiredVersion: "0.0.1",
    },
  },
});
