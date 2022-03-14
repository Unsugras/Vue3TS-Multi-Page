
## 安装依赖
```
npm install
```

### 创建服务
```
npm run create --${ServiceName}
```

### 运行服务
```
npm run serve --${ServiceName}
```

### 打包服务
```
npm run build --${ServiceName}
```



## 简介

这是基于Vue3+TypeScript的一个脚手架，可以解决一个项目下构建微服务 资源共享的问题，只需要运行```npm run serve --${serviceName}```即可运行指定的服务**(src/pages下)** 这样就不需要每次创建服务都要去新建一个大项目了。

原理：vue本身支持multi-page，``pages``项支持指定的main运行，这里只是对入口进行动态配置 ，可以通过控制台指定服务运行，

对一些页面UI框架和开发流程进行整合，

## 开发

#### 样式引入：

默认以Element Plus为UI框架 同时添加了**unplugin-element-plus**插件 ，解决了引入完整css后，项目体积较大的问题

引入插件请在**main.ts**按需引入

```javascript
import {ElButton,ElResult} from  'element-plus'//unplugin-element-plus 会自己引入样式，所以不用写了。
const ELplugin = [ElButton,ElResult]

const app = createApp(App)
ELplugin.forEach(el=>app.use(el)) //减少写app.use的次数
```

#### API的使用：

api默认全局引入，构建项目的时候 会在```/api/module```目录下创建一个接口文件，并且全部引入。

在vue文件中使用 仅需要引入全局的api对象，再**api.方法**即可，这里不会区分服务， 意味着你可以在A服务引入B服务的接口（比如有公共的登录，获取用户信息，上传图片接口等...）

栗子：

page.vue

````vue
<template>
 ....
</template>
<script lang="ts">
import { defineComponent } from 'vue'
//引入api 即可
import api from '@/api' 
export default defineComponent({
  setup(){
    const helloWorld = ()=>{
      //直接api.方法即可
      api.base64Test_PostRequest({}).then((res:any)=>{
        .....
      })
    }
    return {
      helloWorld
    }
  },
})
</script>
<style lang="scss" scoped>
  ....
</style>
````

生成的接口文件：

```javascript
import request from '../axios'

export default {
  //##接口地址  ##参数  ##自定义header ##是否需要loading遮罩窗
  base64Test_PostRequest:(params:Object)=>request.post("/post",params,{},true)
}
```

（未来看看研究下怎么写个插件，打包的时候去掉没引入的接口方法）

#### 打包

执行```npm run build --${service}```之后 会在```src/dist```目录下生成服务名称的文件夹 直接用反向代理容器(比如nginx)部署即可。



