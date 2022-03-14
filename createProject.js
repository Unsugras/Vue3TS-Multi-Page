const fs  = require("fs")
const serviceRegex =  /\-+(.+)/

//检测是否传入了服务名称
let serviceName = JSON.parse(process.env.npm_config_argv).original.find(el=>{
  return serviceRegex.exec(el)
})

if(serviceName){
  serviceName = serviceRegex.exec(serviceName)[1]
}else{
  throw Error("请检查是否正确传入服务名称 示例: --#service")
}
//检查文件夹是否存在，如果存在就报错
let servceExists = fs.existsSync(`${__dirname}/src/pages/${serviceName}`)
if(servceExists)throw Error(`抱歉 服务"${serviceName}"已经存在 请选用其他服务名或将其手动删除`)


const routerTemplate = `
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      title:'${serviceName}',
    },
    component: () => import('./Home.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
`

const indexTemplate = `
import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import { setMetaTitle } from '@/utils'

import {ElButton,ElResult} from  'element-plus'
const ELplugin = [ElButton,ElResult] //减少写app.use的次数

router.beforeEach((f,t,next)=>{
  setMetaTitle(f.meta.title)
  next()
})

const app = createApp(App)
ELplugin.forEach(el=>app.use(el))
app.use(router).mount('#app')

`

const homeTemplate = `
<template>
  <div class="home">    
     <el-result
        icon="success"
        title="已成功构建服务:${serviceName}"
      >
        <template #extra>
          <el-button @click="helloWorld">Helloworld</el-button>
        </template>
      </el-result>
     
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
//api已自动引入全局
// import api from '@/api' 
export default defineComponent({
  setup(){
    const helloWorld = ()=>{alert("Hello!")}
    return {
      helloWorld
    }
  },
})
</script>
<style lang="scss" scoped>
</style>
`

const apiTemplate = `
import request from '../axios'

export default {
  ${serviceName}_GetRequest:(params:Object)=>request.get("/get",params,{},true),
  ${serviceName}_PostRequest:(params:Object)=>request.post("/post",params,{},true)
}               
`


console.time('构建项目模板完成 总构建时间')
console.log("正在创建文件夹")
//创建文件夹
fs.mkdirSync(`${__dirname}/src/pages/${serviceName}`)
console.log("正在写入router.ts")
fs.writeFileSync(`${__dirname}/src/pages/${serviceName}/router.ts`,routerTemplate,'utf-8')

console.log("正在写入main.ts")
fs.writeFileSync(`${__dirname}/src/pages/${serviceName}/main.ts`,indexTemplate,'utf-8')

console.log("正在写入Home.vue")
fs.writeFileSync(`${__dirname}/src/pages/${serviceName}/Home.vue`,homeTemplate,'utf-8')

console.log("正在写入接口文件")
fs.writeFileSync(`${__dirname}/src/api/module/${serviceName}.ts`,apiTemplate,'utf-8')

console.timeEnd('构建项目模板完成 总构建时间')

