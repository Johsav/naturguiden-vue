<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>OUTDOOR ADVENTURES</h1>
      <p class="subtext">Exceting outdoor experinces in Sweden with Naturguiden</p>
      <p class="subtext">We do Ice skating on natural ice, Kayak tours, Hiking, Cross country skiing and other simular adventures</p>

    </div>  
    <div class="right-content img1">
      <button><router-link to="/one">Ice skating</router-link></button>
       <router-link to="/one">Ice skating</router-link>

    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

  .left-content  {
    background: #a3e6a3
  }
  .img1 {
    /*background: url('../assets/home.jpg'); */
    background: #eb8181
  }
</style>

