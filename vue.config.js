const { defineConfig } = require('@vue/cli-service');
let path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: (config)=>{
    config.resolve = {
      extensions:['.js','.json','.vue'],
      alias:{
        '@':path.resolve(__dirname,'./src')
      }
    }
  },
  devServer:{
    compress: true,
    open: true,
    hot: true,
    port: '8080',
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api', // 请求的时候使用这个api就可以
        },
      },
    },
  }
});
