<template>
    <div>
        Count:{{count}}
        <button @click="addCount">addCount</button>
        oldCount: {{oldCount}}
        <button @click="addOldCount">addOldCount</button>
    </div>
</template>
<script  >
import { ref } from 'vue'
   export default { 
       data(){
           return{
               oldCount : 0
           }
       },
       methods:{
           addOldCount(){
                this.oldCount ++ 
           }
       },
       setup(){
            let count = ref(0)

            const addCount = ()=>{
                count.value++
            }

            return {
                count,
                addCount
            }

       }
   }

</script>

<style lang="scss" scoped>

</style>