
<template>
  <div class="home">    
     <el-result
        icon="success"
        title="已成功构建服务:HelloWorld"
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
