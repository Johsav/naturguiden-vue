<template>
  <PackageLayout :carouselItems="carouselItems">
    Skating - weekend tour
  </PackageLayout>

</template>

<script>
import PackageLayout from "@/components/PackageLayout";

export default {
  components: {
    PackageLayout
  },
  data() {
    return {
      carouselItems: [
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

