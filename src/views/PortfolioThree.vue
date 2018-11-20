<template>
  <div class="home main-content">
    <div class="left-content slideUp">

      
      <router-link to="/portfolio/two">img</router-link>
      <h1>Cross country skiing</h1>
      <p class="subtext">Magic cross country skiing in the total wildernes with Naturguiden</p>
      <p class="subtext">We do Cross country skiing tours in the mountains of Sweden.</p>

      <router-link to="/portfolio/two">img</router-link>
    </div>  
    <div class="right-content img2">

    </div>  
  </div>
</template>

<script>

export default {
  name: 'three',
  }

</script>

<style lang="scss" scoped>

  $page_color: #48b886;

  h1 {
    color: $page_color !important;
  }

  .img2 {
    /*background: url('../assets/home.jpg'); */
    background-size: cover;
    background-position: 50%;

    img {
      width: 50%;
    }
  }  
</style>

