const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  name: "mfeApp",
  filename: "remoteEntry.js", // this doesn't need to be set, if not specified it defaults to remoteEntry.js. Setting it here just for demo purposes.
  exposes: {
    "./Module": "./src/app/mfe-component/mfe-component.module.ts",
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

module.exports = moduleFederationConfig;



// './Module': './src/app/mfe-component/mfe-component.routing.module.ts',
