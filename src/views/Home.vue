<template>
  <div>
    <configured-carousel :carouselItems="carouselItems"></configured-carousel>
    <v-container fluid grid-list-lg>
      <v-layout row fill height wrap>
        <v-flex xl3 lg3 md4 class="hidden-sm-and-down">
          <LeftSideColumn></LeftSideColumn>
        </v-flex>
        <v-flex xs12 sm12 md8 lg9 xl9 class="py-3">
          <v-flex>
            <v-layout fill-height row>
              <v-flex lg2 xl2 d-sm-flex>
                <v-card height="100%">
                  <v-img height="100%" :src="require('@/assets/images/500/happy_w001.jpg')"></v-img>
                </v-card>
              </v-flex>

              <v-flex xs12 sm12 md12 lg10 xl10 d-flex>
                <v-card color="blue-grey darken-2" class="white--text text-xs-left ml-0">
                  <v-layout row>
                    <v-card-title primary-title class="display-2">Adventure tours in Sweden</v-card-title>
                  </v-layout>
                  <v-card-text
                    class="mb-1 subheading"
                  >Join us on our tours. We have gathered our best outdoor experiences and are now offering all inclusive guided tours. Adventures for ordinary people that want to enjoy outdoor activities in the nature. We offer tours for small groups where we tailor each tour after the interests and wishes of the participants. Join a scheduled tour or book your own private tour together with your friends or family.</v-card-text>
                  <v-card-text class="mb-5 subheading" >
                  </v-card-text>  
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex>
            <v-layout fill-height row>
              <v-flex xs12 sm12 md12 lg12 xl12 d-flex>
                <v-card
                  v-for="item in firstSide"
                  :key="item.month"
                  router-link :to = "item.route"
                  :img="require('@/assets/images/1400/' + item.img1)"
                > 
                  <v-card-text primary-title class="text-xs-right white--text pb-0">
                    {{item.month}}</v-card-text>
                  <v-card-text class="text-xs-left subheading white--text ml-5 pa-0">
                    {{item.heading}}
                  </v-card-text>
                  <v-card-text class=" subheading white--text pt-0">
                    {{item.text1}}
                  </v-card-text>
                  <v-card-text class="white--text">
                    {{item.text2}}
                  </v-card-text>  
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>  

          <v-flex>
            <v-layout column>
              <v-flex>
                <v-layout row wrap>
                  <v-flex xs12 sm6 md6 lg3 xl3>
                    <v-card
                      style="margin-bottom: 35px;"
                      height="100%"
                      router-link
                      to="/adventures/skating/weekend"
                    >
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/500-300/Skating004.jpg')"
                      >
                        <v-card-title class="display-1"></v-card-title>
                      </v-img>
                      <v-layout column fill-height>
                        <v-card-title class="headline py-1">Nordic Skating</v-card-title>
                        <v-card-text
                          align="left"
                          class="pt-0 px-3"
                        >It's great adventure, it's fun, it's skating on natural ice. Enjoy skating on our lakes or on the Baltic.</v-card-text>
                      </v-layout>
                      <v-flex style="position: absolute; bottom: 0;">
                        <v-btn
                          text
                          small
                          color="blue-grey darken-2"
                          class="white--text"
                        >Read more / Book now</v-btn>
                      </v-flex>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg3 xl3>
                    <v-card
                      style="margin-bottom: 35px;"
                      height="100%"
                      router-link
                      to="/adventures/kayak/weekend"
                    >
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/500-300/kajak4.jpg')"                        

                      >
                        <v-card-title class="display-1"></v-card-title>
                      </v-img>
                      <v-layout column fill-height>
                        <v-card-title class="headline py-1">Kayak</v-card-title>
                        <v-card-text
                          align="left"
                          class="pt-0 px-3"
                        >Kayak between islands and skerries in the beautiful archipelago of the Baltic sea.</v-card-text>
                      </v-layout>
                      <v-flex style="position: absolute; bottom: 0;">
                        <v-btn
                          text
                          small
                          color="blue-grey darken-2"
                          class="white--text"
                        >Read more / Book now</v-btn>
                      </v-flex>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg3 xl3>
                    <v-card
                      style="margin-bottom: 35px;"
                      height="100%"
                      router-link
                      to="/adventures/hiking/eightdays"
                    >
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/500-300/Hiking001.jpg')"
                      >
                        <v-card-title class="display-1"></v-card-title>
                      </v-img>
                      <v-layout column fill-height>
                        <v-card-title class="headline py-1">Hiking</v-card-title>
                        <v-card-text
                          fill-height
                          align="left"
                          class="pt-0 px-3"
                        >Hiking in the mountains of Sweden.</v-card-text>
                      </v-layout>
                      <v-flex style="position: absolute; bottom: 0;">
                        <v-btn
                          class="white--text"
                          text
                          small
                          color="blue-grey darken-2"
                        >Read more / Book now</v-btn>
                      </v-flex>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 sm6 md6 lg3 xl3>
                    <v-card
                      style="margin-bottom: 35px;"
                      height="100%"
                      router-link
                      to="/adventures/skiing/weekend"
                    >
                      <v-img
                        class="white--text"
                        :src="require('@/assets/images/500-300/skiing004.jpg')"
                      >
                        <v-card-title class="display-1"></v-card-title>
                      </v-img>
                      <v-layout column fill-height>
                        <v-card-title class="headline py-1">Back Country Skiing</v-card-title>
                        <v-card-text
                          align="left"
                          class="pt-0 px-3"
                        >Experience the fifth season. Cross country skiing in Swedish mountains.</v-card-text>
                      </v-layout>

                      <v-flex style="position: absolute; bottom: 0;">
                        <v-btn
                          text
                          small
                          color="blue-grey darken-2"
                          class="white--text"
                        >Read more / Book now</v-btn>
                      </v-flex>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          
          <v-flex>
            <v-layout column>
              <v-flex>
                <v-layout row wrap>
                  <v-flex xs12 sm6 md6 lg6 xl6>
                    <v-card style="margin-bottom: 100px;" height="100%">
                      <iframe
                        aspect-ratio
                        class="mt-2"
                        height="70%"
                        src="https://www.youtube.com/embed/BhAMkDSoREs"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <v-layout column fill-height>
                      <v-card-text>A great skating tour, November 2018</v-card-text>
                      </v-layout>
                      <v-flex style="position: absolute; bottom: 0; left: 0; right: 0;   text-align: center;">
                        <v-btn
                          router-link
                          to="/video"
                          text
                          small
                          color="blue-grey darken-2"
                          class="white--text"
                        >More videos</v-btn>
                      </v-flex>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 sm6 md6 lg6 xl6>
                    <v-card style="margin-bottom: 35px;" height="100%">
                      <v-card-title primary class="title">They write about our tours ..</v-card-title>
                      <v-flex>
                        <v-layout  fill-height row class="ma-0 pa-0">
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
                            <v-card-title
                              class="ma-0 pa-0 font-weight-bold text--center"
                            >The Guardian</v-card-title>
                            <v-card-text
                              class="ma-0 pa-0 font-italic text-xs-left"
                            >Escape the circle-skating crowds at Somerset House and ice-skate with a sense of purpose on a four-day trek</v-card-text>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex style="position: absolute; bottom: 0; left: 0; right: 0;   text-align: center;">
                        <v-btn
                          router-link
                          to="/article"
                          text
                          small
                          color="blue-grey darken-2"
                          class="white--text"
                        >More articles</v-btn>
                      </v-flex>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex>
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 lg6 xl6 d-flex>
                <v-card color="blue-grey darken-2" class="white--text text-xs-left">
                  <v-card-title primary-title class="display-1">Ecotourism</v-card-title>
                  <v-card-text class="mb-2 subheading">
                    Naturguiden is a Nature´s Best eco-certified tour operator
                    Travel experience with quality, combined with strict environment and nature conservation measures, as well as a clear local connection.
                    <br />Nature´s Best is a Swedish quality label for nature tourism and have six basic principals.
                    <a class="white--text" href="https://naturesbestsweden.com/en/about-natures-best/"
                    >Read more about Nature´s Best</a>
                    <br />We have the regulated travel guarantees according to the requirements of the Package travel and linked travel arrangements regulations that allows you to get full refund of your payment to us if the tour will be cancelled by any reason.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6 xl6 d-flex>
                <v-card color="blue-grey darken-2" class="white--text text-xs-left">
                  <v-card-title primary-title class="display-1">Your very own adventure</v-card-title>
                  <v-card-text class="mb-2 subheading">
                    Create your own adventure. Maybe you like to combine ice skating with ice climbing. Building a base camp in the forest. Ice skating and hiking in November.
                    <br />We have for many years created unique adventures on requests from a lot of different groups.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import LeftSideColumn from "../components/LeftSideColumn";
import ConfiguredCarousel from "@/components/ConfiguredCarousel.vue";
import axios from "axios";

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
  created() {
    axios.get('./json/firstside.json')
      .then((result) => {
        this.firstSide = result.data.firstSideCard;
      });
  },

  data() {
    return {
      firstSide:'',
      carouselItems: [
        {
          src: require("@/assets/images/1400/Skating_1413_2.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/1400/hiking_1413_4.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/1400/kayak_1413_3.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/1400/skiing_1413_1.jpg"),
          title: "",
          subtitle: ""
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

<style scoped lang="scss">
.text-shadow {
  text-shadow: 0 0 0.4em #000;
}
@media only screen and (max-width: 600px) {
  .hidden-p-xs-only {
    padding: 0 !important;
  }
}
</style>

