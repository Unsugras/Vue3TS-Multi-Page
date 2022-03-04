<template>
    <div>
        Count1:{{state.count1}}
        Count2:{{state.count2}}
        <button @click="Addcount1">addCount1</button>
        <button @click="Addcount2">addCount2</button>



        <input type="text" v-model="state.inputValue" />

        
        <p>
        <input type="text" v-model="state.num1" />
        +
        <input type="text" v-model="state.num2" />
        =
        <span>
            {{numSum}}
        </span>
        </p>
        <button @click="submitInput">提交咯</button>

         <button @click="emitFather">emit他爹的方法</button>
    </div>
</template>

<script setup>
import {reactive,computed} from 'vue'

    const state = reactive({
        count1:0,
        count2:1,
        inputValue:'',
        num1:0,
        num2:0
    })

    const numSum = computed(() =>{
    
        return Number(state.num1) + Number(state.num2)
    })

    const Addcount1 = () =>{
        state.count1++
    }

    const Addcount2 = () =>{
        state.count2++
    }

    const submitInput = () =>{
        alert(state.inputValue)
    }

    const emitFather = ()=>{
        // EmitsOptions('emitFather',"这是来自子组件的数据捏")
    }




</script>

<style lang="scss" scoped>

</style>