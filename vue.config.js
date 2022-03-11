
const pConfig = require('./pageConfig.ts')

module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy: {
          '/student': {
              target: "http://localhost:3000",
              changeOrigin: true,
          },
        },
    },
    publicPath:'./',

    outputDir:`dist/${pConfig.serviceName}`,//打包到dist 目录下 根据服务名称分包
    chainWebpack: config => {
      //设置别名
      config.resolve.alias
      .set('@assets',`${__dirname}/src/assets`)
      .set('@',`${__dirname}/src`)
    },
    pages: {
      index:pConfig.serviceOptions
    }
}