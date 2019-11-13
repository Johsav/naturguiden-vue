<template>
  <div>
    <configured-carousel :carouselItems="carouselItems"></configured-carousel>
   <v-container fluid grid-list-lg class="pt-1">
    
    <slot></slot>

    </v-container>
    
  </div>
</template> 



<script>
import ConfiguredCarousel from "@/components/ConfiguredCarousel.vue";

export default {
  components: {
    ConfiguredCarousel
  },

  methods: {
    getImgUrl(img) {
      return require("@/assets/images/" + img);
    }
  },
  data() {
    return {
      drawer: null,
      packages: [
        {
          title: "Nordic-skating",
          link: "/adventures/skating/weekend"
        },
        {
          title: "Kayak",
          link: "/adventures/skating/private"
        },
        {
          title: "Hiking",
          link: "/about"
        },
        {
          title: "Back Country skiing",
          link: "/calendar"
        }
      ],

     

      carouselItems: [
        {
          src: require("@/assets/images/1400/hiking_1413_1.jpg"),
          title: "", //"Ice-skating",
          subtitle: ""//"Ice-skating is fun"
        },
        {
          src: require("@/assets/images/1400/Skating_1413_3.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },
        {
          src: require("@/assets/images/1400/kayak_1413_4.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },
        {
          src: require("@/assets/images/1400/hiking_1413_2.jpg"),
          title: "", //"Hiking",
          subtitle: ""//"walk walk"
        },
        {
          src: require("@/assets/images/1400/kayak_1413_1.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },
        {
          src: require("@/assets/images/1400/Skating_1413_2.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },
        {
          src: require("@/assets/images/1400/hiking_1413_4.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },

        {
          src: require("@/assets/images/1400/kayak_1413_2.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },
        {
          src: require("@/assets/images/1400/Skating_1413_1.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },

        {
          src: require("@/assets/images/1400/hiking_1413_3.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },
        {
          src: require("@/assets/images/1400/kayak_1413_5.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
        },
        {
          src: require("@/assets/images/1400/Skating_1413_4.jpg"),
          title: "", //"Ice-skating",
          subtitle: ""//"Ice-skating is fun"
        },
        {
          src: require("@/assets/images/1400/kayak_1413_3.jpg"),
          title: "", //"Kayak",
          subtitle: ""//"paddle paddle"
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
@media only screen and (max-width: 600px) {
  .hidden-p-xs-only {
    padding: 0 !important;
  }
}
</style>