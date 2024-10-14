const { merge } = require('webpack-merge');
const moduleFederationConfig=require('./webpack.config.js');

const productionConfig={
    output: {
        uniqueName: "mfeApp",
        publicPath: 'https://mfe-app-nhan9x.netlify.app/',
      },
}

module.exports = merge(moduleFederationConfig, productionConfig)
