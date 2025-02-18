
import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import { setMetaTitle } from '@/utils'

import {ElButton,ElResult,ElSwitch} from  'element-plus'
const ELplugin = [ElButton,ElResult,ElSwitch] //减少写app.use的次数

router.beforeEach((f,t,next)=>{
  setMetaTitle(f.meta.title)
  next()
})

const app = createApp(App)
ELplugin.forEach(el=>app.use(el))
app.use(router).mount('#app')

