<template>
  <div>
    <v-carousel hide-delimiters :height="$vuetify.breakpoint.smAndDown ? '200' : '400'">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
        <v-container :fill-height="!$vuetify.breakpoint.smAndDown">
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

    <LeftSideColumn>
      <v-container fluid grid-list-md>
        <v-layout column>
          <v-flex v-for="item in packages" :key="item.link">
            <v-card :to="item.link">
              <v-img class="white--text" height="200px" :src="getImgUrl(item.imageSrc)">
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>
              <v-card-text>{{item.text}}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </LeftSideColumn>
  </div>
</template>

<script>
import LeftSideColumn from "../components/LeftSideColumn";

export default {
  components: {
    LeftSideColumn
  },
    methods: {
    getImgUrl(img) {
      return require("@/assets/images/" + img);
    }
  },
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
      ],
      packages: [
        {
          title: "Ice-skating",
          link: "/",
          imageSrc: "1400/Skating_1413_3.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents (which will be provided) and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges.`
        },
        {
          title: "Kayak",
          link: "/about",
          imageSrc: "1400/kayak_1413_4.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents (which will be provided) and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges.`
        },
        {
          title: "Hiking",
          link: "/calendar",
          imageSrc: "1400/hiking_1413_4.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents (which will be provided) and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges.`
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

