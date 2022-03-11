
//文件夹下所有接口文件
const moduleList = require.context('./module',true,/\.ts$/)

//存储接口方法
const apiList:any = {}
moduleList.keys().forEach(el=>{
    const module = moduleList(el)
    Object.keys(module.default).forEach((keys:any) => apiList[keys] = module.default[keys])
})

export default apiList