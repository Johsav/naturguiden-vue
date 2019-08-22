<template>
  <div>
    <configured-carousel :carouselItems="carouselItems"></configured-carousel>
    <v-container fluid grid-list-lg>
      <v-layout column>
        <v-flex>
          <v-layout fill-height row>

            <v-flex lg2 xl2  class="hidden-p-xs-only">
              <v-card>
                <v-img class="white--text" :src="require('@/assets/images/500/happy_w001.jpg')"></v-img>
              </v-card>
            </v-flex>

            <v-flex xs12 sm12 md12 lg10 xl10 d-flex>
              <v-card color="blue-grey darken-2" class="white--text text-xs-left">
                <v-layout row>
                  <v-card-title primary-title class="display-2">Adventure tours in Sweden</v-card-title>
                </v-layout>
                <v-card-text
                  class="mb-5 subheading"
                >Join us on our tours. We have gathered our best outdoor experiences and are now offering all inclusive guided tours. We offer tours for small groups where we tailor each tour after the interests and wishes of the participants. Join a scheduled tour or book your own private tour together with your friends or family.</v-card-text>
              </v-card>
            </v-flex>

          </v-layout>
        </v-flex>
        <!--  <v-card color="primary" class="white--text headline">
              <v-card-text>
                Our activities
              </v-card-text>  
        </v-card>-->
        <v-flex>
          <v-layout column>
            <v-flex>
              <v-layout row wrap>
                <v-flex elevation-5 xs6 sm3 md3 lg3 xl3>
                  <v-card>
                    <v-img
                      class="white--text"
                      :src="require('@/assets/images/500/clean-bandit001.jpg')"
                    >
                      <v-card-title class="display-1">Nordic Skating</v-card-title>
                    </v-img>
                  </v-card>
                </v-flex>
                <v-flex elevation-5 xs6 sm3 md3 lg3 xl3>
                  <v-card>
                    <v-img class="white--text" :src="require('@/assets/images/500/kayak001.jpg')">
                      <v-card-title class="display-1">Kayak</v-card-title>
                    </v-img>
                  </v-card>
                </v-flex>
                <v-flex elevation-5 xs6 sm3 md3 lg3 xl3>
                  <v-card>
                    <v-img class="white--text" :src="require('@/assets/images/500/hiking007.jpg')">
                      <v-card-title class="display-1">Hiking</v-card-title>
                    </v-img>
                  </v-card>
                </v-flex>
                <v-flex elevation-5 xs6 sm3 md3 lg3 xl3>
                  <v-card>
                    <v-img class="white--text" :src="require('@/assets/images/500/skiing004.jpg')">
                      <v-card-title class="display-1">Back Country Skiing</v-card-title>
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
              <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg4 xl4>
                  <v-card height="100%">
                    <iframe
                      aspect-ratio
                      class="mt-2"
                      height="80%"
                      src="https://www.youtube.com/embed/BhAMkDSoREs"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <v-layout row>
                      <v-card-actions>
                        <v-btn flat color="orange" router-link to="/video">more videos</v-btn>
                      </v-card-actions>
                      <v-card-text class="text-xs-left ml-4">Skating in the mountains, November 2018</v-card-text>
                    </v-layout>
                  </v-card>
                </v-flex>

                <v-flex md4 lg4 xl4 class="hidden-sm-and-down">
                  <v-card height="100%">
                    <v-img
                      class="white--text"
                      height="300px"
                      :src="require('@/assets/images/500/kayak002.jpg')"
                    ></v-img>
                    <v-card-text>Enjoy a guided kayak tour in the archipelago. Camping on the islands, cocking over open fire.</v-card-text>
                    <v-card-actions>
                      <v-btn flat color="orange" router-link to="/kayak">Join our kayak tours!</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>

                <v-flex xs12 sm6 md4 lg4 xl4>
                  <v-card height="100%">
                    <v-card-title primary class="title">They write about our tours ..</v-card-title>
                    <v-flex>
                      <v-layout row class="ma-0 pa-0">
                        <a
                          href="https://www.independent.co.uk/travel/europe/sweden-go-with-the-floe-this-winter-8959544.html"
                        >
                          <v-flex>
                            <v-img
                              class="round-img"
                              contain
                              width="100px"
                              :src="require('@/assets/images/100/independent001.jpg')"
                            ></v-img>
                          </v-flex>
                        </a>
                        <v-flex>
                          <v-card-title
                            class="ma-0 pa-0 font-weight-bold text--center"
                          >The Independent</v-card-title>
                          <v-card-text
                            to="/about"
                            class="ma-0 pa-0 font-italic text-xs-left"
                          >It was the question on all of our minds, but I asked it: "How do you know when the ice isn't safe to skate on?</v-card-text>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex>
                      <v-layout row class="ma-0 pa-0">
                        <a
                          href="https://www.theguardian.com/travel/2012/nov/09/european-winter-breaks-with-twist"
                        >
                          <v-flex>
                            <v-img
                              class="round-img"
                              contain
                              width="100px"
                              :src="require('@/assets/images/100/guardian001.jpg')"
                            ></v-img>
                          </v-flex>
                        </a>
                        <v-flex>
                          <v-card-title class="ma-0 pa-0 font-weight-bold text--center">The Guardian</v-card-title>
                          <v-card-text
                            class="ma-0 pa-0 font-italic text-xs-left"
                          >Escape the circle-skating crowds at Somerset House and ice-skate with a sense of purpose on a four-day trek</v-card-text>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-card-actions>
                      <v-btn flat color="orange" router-link to="/articles">more articles</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs12 sm12 md6 lg6 xl6 d-flex>
            <v-card color="blue-grey darken-2" class="white--text text-xs-left">
              <v-card-title primary-title class="display-2">Adventure tours in Sweden</v-card-title>
              <v-card-text
                class="mb-5 subheading"
              >Join us on our tours. We have gathered our best outdoor experiences and are now offering all inclusive guided tours. We offer tours for small groups where we tailor each tour after the interests and wishes of the participants. Join a scheduled tour or book your own private tour together with your friends or family.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 d-flex>
            <v-card color="blue-grey darken-2" class="white--text text-xs-left">
              <v-card-title primary-title class="display-2">Adventure tours in Sweden</v-card-title>
              <v-card-text
                class="mb-5 subheading"
              >Join us on our tours. We have gathered our best outdoor experiences and are now offering all inclusive guided tours. We offer tours for small groups where we tailor each tour after the interests and wishes of the participants. Join a scheduled tour or book your own private tour together with your friends or family.</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <!--     <v-flex v-for="item in packages" :key="item.link">
            <v-card :to="item.link">
              <v-img class="white--text" height="200px" :src="getImgUrl(item.imageSrc)">
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>
              <v-card-text>{{item.text}}</v-card-text>
            </v-card>
        </v-flex>-->
      </v-layout>
    </v-container>
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
  .hidden-p-xs-only {
    padding: 0 !important;
  }
}
</style>

