const {
    shareAll,
    withModuleFederationPlugin,
  } = require("@angular-architects/module-federation/webpack");

module.exports=withModuleFederationPlugin({
    name:"mfeApp2",
    filename:'remoteEntry.js',
    exposes:{
        './ModuleFirst':'./src/app/mfe2-component/mfe2-component.module.ts'
    },
    shared:{
        ...shareAll({
            singleton:true,
            strictVersion:true,
            requiredVersion:'auto'
        })
    }
});