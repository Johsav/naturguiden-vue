<template>
  <div>
    <configured-carousel :carouselItems="carouselItems"></configured-carousel>

    <LeftSideColumn>
      <v-container fluid grid-list-lg>
        <v-layout column>
          <v-flex>
            <v-layout fill-height>
              <v-flex sm6 md6 lg6 xl6 d-flex hidden-xs-only class="hidden-p-xs-only">
                <v-card>
                  <v-img
                    class="white--text"
                    min-height="400px"
                    :src="require('@/assets/images/500/happy_w001.jpg')"
                  ></v-img>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6 md6 lg6 xl6 d-flex>
                <v-card color="blue-grey darken-2" class="white--text text-xs-left">
                  <v-card-title primary-title>
                      <h3 class="headline">Adventure Tours in Sweden</h3>
                  </v-card-title>
                  <v-card-text>
                        Join us on our tours. We have gathered our best outdoor experiences and are now offering all inclusive guided tours. We offer tours for small groups where we tailor each tour after the interests and wishes of the participants. Join a scheduled tour or book your own private tour together with your friends or family.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <h3 class="headline">Our different activities</h3>
          <v-flex>
            <v-layout column>
              <v-flex>
                <v-layout row>
                  <v-flex xs3 sm3 md3 lg3 xl3>
                    <v-card>
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/500/clean-bandit001.jpg')"
                      >
                        <v-card-title>Nordic Skating</v-card-title>
                      </v-img>
                    </v-card>
                  </v-flex>
                  <v-flex xs3 sm3 md3 lg3 xl3>
                    <v-card>
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/500/kayak001.jpg')"
                      >
                        <v-card-title>Kayak</v-card-title>
                      </v-img>
                    </v-card>
                  </v-flex>
                  <v-flex xs3 sm3 md3 lg3 xl3>
                    <v-card>
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/500/hiking007.jpg')"
                      >
                        <v-card-title>Hiking</v-card-title>
                      </v-img>
                    </v-card>
                  </v-flex>
                  <v-flex xs3 sm3 md3 lg3 xl3>
                    <v-card>
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/500/skiing004.jpg')"
                      >
                        <v-card-title>Back Country Skiing</v-card-title>
                      </v-img>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>  
            </v-layout>
          </v-flex>
          <v-text-field></v-text-field>
          <v-flex>
            <v-layout column>
              <v-flex>
                <v-layout row>
                  <v-flex xs6 sm6 md6 lg6 xl6>
                    <v-card router-link to="/about">
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/1000/open_group.jpg')"
                      >
                        <v-card-title>Scheduled tours</v-card-title>
                      </v-img>
                      <v-card-text>
                        Book one of our scheduled tours and enjoy the tour together with new friends. You find all our scheduled tours here.
                      </v-card-text>  
                    </v-card>
                  </v-flex>
                  <v-flex xs6 sm6 md6 lg6 xl6>
                    <v-card router-link to="/about">
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/1000/private_group.jpg')"
                      >
                        <v-card-title>Private tour</v-card-title>
                      </v-img>
                      <v-card-text>
                        Book your own private tour together with friends or family, choose any date you like.
                      </v-card-text>  
                    </v-card>
                  </v-flex>
                </v-layout>
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
          src: require("@/assets/images/1400/Skating_1413_2.jpg"),
          title: "Ice-skating",
          subtitle: "Fantastic skating on the lakes of Sweden"
        },
        {
          src: require("@/assets/images/1400/hiking_1413_4.jpg"),
          title: "Hiking",
          subtitle: "Walk in the wilderness of northern Sweden"
        },
        {
          src: require("@/assets/images/1400/kayak_1413_3.jpg"),
          title: "Kayak",
          subtitle: "Paddle among the islands of the Swedish arcepelago"
        },
        {
          src: require("@/assets/images/1400/Skating_1413_4.jpg"),
          title: "Skiing",
          subtitle: "Back country skiing in the mountains"
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
@media only screen and (max-width: 600px) {
  .hidden-p-xs-only{
    padding: 0 !important;
  }
}
</style>

