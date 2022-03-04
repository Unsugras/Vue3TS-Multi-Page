<template>
    <div>
        Count:{{count}}
        <button @click="addCount">addCount</button>
    </div>
</template>

<script setup >
   import {ref} from 'vue'

   let count = ref(0)

   const addCount = ()=>{
       count.value++
   }

</script>

<style lang="scss" scoped>

</style>