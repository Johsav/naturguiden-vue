<template>
  <div>
    <configured-carousel :carouselItems="carouselItems"></configured-carousel>

    <LeftSideColumn>
      <v-container fluid grid-list-md>
        <v-layout column>
          <v-flex>
            <v-layout fill-height>
              <v-flex md6 lg6 sm6 xl6 d-flex>
                <v-card>
                  <v-img
                    class="white--text"
                    height="300px"
                    src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                  ></v-img>
                </v-card>
              </v-flex>
              <v-flex md6 lg6 sm6 xl6 d-flex>
                <v-card color="blue-grey darken-2" class="white--text" >
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline">Adventure Tours in Sweden</h3>
                      <blockquote class="blockquote">
                        Join us on our tours. We have gathered our best outdoor experiences and are now offering all inclusive guided tours. We offer tours for small groups where we tailor each tour after the interests and wishes of the participants. Join a scheduled tour or book your own private tour together with your friends or family.
                      </blockquote>
                    </div>
                  </v-card-title>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
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
import ConfiguredCarousel from "@/components/ConfiguredCarousel.vue";

export default {
  components: {
    ConfiguredCarousel,
    LeftSideColumn
  },
  methods: {
    getImgUrl(img) {
      return require("@/assets/images/" + img);
    }
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

