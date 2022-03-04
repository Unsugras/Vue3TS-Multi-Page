<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <newTemplate></newTemplate>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import newTemplate from '@/views/newTemplate.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    newTemplate
  }
}
</script>
