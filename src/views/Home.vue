<template>
  <div>
    <v-carousel hide-delimiters :height="$vuetify.breakpoint.smAndDown ? '200' : '400'">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
        <v-container :fill-height="!$vuetify.breakpoint.smAndDown">
          <v-layout white--text align-end column justify-center :fill-height="!$vuetify.breakpoint.smAndDown">
            <h1 class="display-3 text-shadow">{{ item.title }}</h1>
            <h2 class="display-2">{{ item.subtitle }}</h2>
            {{hightValue}} {{$vuetify.breakpoint.smAndDown}}
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "Ice-skating",
          subtitle: "Ice-skating is fun"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "Hiking",
          subtitle: "walk walk"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Kayak",
          subtitle: "paddle paddle"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "Ice-skating",
          subtitle: "Ice-skating is fun"
        }
      ]
    };
  }
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 0 0 0.4em #000;
}
</style>

