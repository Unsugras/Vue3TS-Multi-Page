
// 配置多页面page
// 运行服务的形式为 npm run xxx --${pages下的文件夹}


const fs = require('fs')
const serviceRegex =  /\-+(.+)/

try{
  //检测是否传入了服务名称
  let serviceName = JSON.parse(process.env.npm_config_argv).original.find(el=>{
    return serviceRegex.exec(el)
  })

  if(serviceName){
    serviceName = serviceRegex.exec(serviceName)[1]
  }else{
    throw Error("请检查是否正确传入服务名称 示例: --#service")
  }

  //检查文件夹是否存在
  let servceExists = fs.existsSync(`${__dirname}/src/pages/${serviceName}`)
  if(!servceExists)throw Error(`找不到名称为"${serviceName}"的服务`)


  let serviceOptions = {
    // page 的入口
    entry: `src/pages/${serviceName}/main.ts`,
    // 模板来源
    template: 'public/index.html',
    // 在 dist/index.html 的输出
    filename: 'index.html',
  }

  module.exports = {
    serviceOptions,//打包参数
    serviceName,//服务名称
  }
}catch(e){
  throw Error(e)
}