<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1>Ice skating</h1>
      <p class="subtext">Exceting Nordic skating on natrual in Sweden with Naturguiden</p>
      <p class="subtext">We do Ice skating on natural ice the whole day long - Great experience - Eat our lunch at some small island. Sleep in hostels and make a fantastic dinner togheter in the evening.</p>

      <router-link to="/portfolio/two">img</router-link>
    </div>  
    <div class="right-content img2">
      <img src="../assets/logo.png">

    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'one',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>

  $page_color: #625B7E;

  h1 {
    color: $page_color;
  }

  .left-content  {
    background: #a3e6a3
  }
  .img2 {
    /*background: url('../assets/home.jpg'); */
    background: $page_color;
  }
</style>

