<template>
  <div class="two main-content">
    <div class="left-content slideUp">
      <h1>Kayak tours</h1>

      <router-link to="/one">img</router-link>

      <p class="subtext">Exceting kayak tours in the archepelago of Sweden with Naturguiden</p>
      <p class="subtext">We do great kayak tours among the islands in the archepelago. Wild camp on an island, making dinner over open fire. Sleeping in tents and wash ourself in the ocean.</p>

      <router-link to="/portfolio/three">img</router-link>
    </div>  
    <div class="right-content img2">
      

    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'two',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>

  $page_color: #48b886;

  h1 {
    color: $page_color !important;
  }

  .img2 {
    /*background: url('../assets/home.jpg'); */
    background: $page_color;
    background-size: cover;
    background-position: 50%;

    img {
      width: 50%;
    }
  }
</style>

