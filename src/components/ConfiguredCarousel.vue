<template>

  <v-carousel hide-delimiters :height="$vuetify.breakpoint.smAndDown ? '200' : '400'">
    <v-carousel-item v-for="(item,i) in carouselItems" :key="i" :src="item.src">
      <v-container :fill-height="!$vuetify.breakpoint.smAndDown" >
        <v-layout
          white--text
          align-end
          column
          justify-center
          :fill-height="!$vuetify.breakpoint.smAndDown"
        >
          <h1 class="display-3 font-weight-bold text-shadow">{{ item.title }}</h1>
          <h2 class="headline text-shadow">{{ item.subtitle }}</h2>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "configured-carousel",
  props: {
    carouselItems: Array
  },
  data: () => ({})
};
</script>

<style scoped>
.no-padding-right {
  padding-right: 0;
}
.no-padding {
  padding: 0;
}
.no-padding-bottom {
  padding-bottom: 0;
}
</style>
