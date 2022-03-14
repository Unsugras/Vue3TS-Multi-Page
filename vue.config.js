
const pConfig = require('./pageConfig.ts')

module.exports = {
    devServer:{
        host:'0.0.0.0',
        port:8080,
        // proxy: {
        //   '/student': {
        //       target: "http://localhost:3000",
        //       changeOrigin: true,
        //   },
        // },
    },
    publicPath:'./',
    outputDir:`dist/${pConfig.serviceName}`,//打包到dist 目录下 根据服务名称分包
    chainWebpack: config => {
      //设置别名
      config.resolve.alias
      .set('@assets',`${__dirname}/src/assets`)
      .set('@',`${__dirname}/src`)

      //添加url-loader 插件 把图片解析成base64
      config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 51200 }));
      
      },
      configureWebpack: {
        plugins: [
          //这个负责按需引入ElementPlus的样式
          require('unplugin-element-plus/webpack')({}),
        ],
      },
    pages: {
      index:pConfig.serviceOptions
    }
}