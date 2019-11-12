<template>
  <v-container fluid grid-list-md class="pa-3">
    <v-card>
      <v-tabs fixed-tabs grow slider-color="primary">
        <v-tab v-for="item in m_element" :key="item.link" :to="item.link" replace>{{item.title}}</v-tab>
      </v-tabs>
    </v-card>

    <v-layout row fill height>
      <v-flex xl3 lg3 md4 class="hidden-sm-and-down">
        <LeftSideColumn></LeftSideColumn>
      </v-flex>

      <v-flex xs12 sm12 md8 lg9 xl9 class="py-3">
        <v-card class="text-xs-left">
          <v-card-title primary-title class="display-1">About our tours</v-card-title>
          <v-card-text
            class="subheading"
          >Naturguiden specializes in nature tourism and offers guided adventures in the provinces of Östergötland and Jämtland. We offer our customers all inclusive adventure-packages with an experienced guide, transfer, food and accommodation.</v-card-text>
          <v-card-text
            class="pt-1"
          >Naturguiden offers adventures all year around. We have found the most beautiful places for you, we provide you with information about the area, nature-related and practical outdoor knowledge. Our local knowledge makes the trip secure, comfortable and more memorable. With our network we can offer you activities and experiences beyond what you can achieve by yourself.</v-card-text>

          <v-card-title class="title pb-0">The packages Naturguiden has to offer:</v-card-title>

          <v-list class="pt-1">
            <v-list-tile class="list-height" v-for="item in l_element">
              <v-list-tile-action>
                <v-img contain height="16px" :src="require('@/assets/postbullets.png')"></v-img>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-text>{{ item.title }}</v-list-tile-text>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-card-text>The activities always take place outdoors where you can relax, enjoy nature and life as well as giving your body and soul healthy experiences. The price level differs, mainly due to the level of accommodation.</v-card-text>

          <v-card-title class="title pb-0">All our packages always include</v-card-title>

          <v-list class="pt-1">
            <v-list-tile class="list-height" v-for="item in n_element">
              <v-list-tile-action>
                <v-img contain height="16px" :src="require('@/assets/postbullets.png')"></v-img>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-text>{{ item.title }}</v-list-tile-text>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-card-text></v-card-text>

          <v-card-title class="title pb-0">Get here</v-card-title>
          <v-card-text
            class="pb-1"
          >Our different activities take place on different place of Sweden, how to travel to get there differs.</v-card-text>

          <v-flex v-for="item in o_element">
            <v-card-text class="py-1">
              <span v-html="item.text"></span>
            </v-card-text>
          </v-flex>

          <v-card-text class="pb-0">
            <router-link to="/get-here">More information in "How to get here"</router-link>
          </v-card-text>
          <v-card-text>If you are a group of your own and would prefer another starting point, tell us and we will see what we can do.</v-card-text>

          <v-card-title class="title pb-0">Accommodation</v-card-title>
          <v-card-text
            class="pb-0"
          >We choose the best possible accommodation for each package depending on location and availability. In our packages often the accommodation is already chosen in advance. However for some of the packages it is possible to choose between several types of accommodations, although all participants need to make the same choice.</v-card-text>
          <v-card-title class="pb-0">
            We offer these types of accommodation:
          </v-card-title>

          <v-flex v-for="item in p_element">
            <v-card-text class="py-1">
              <span v-html="item.text"></span>
            </v-card-text>
          </v-flex>
          <v-card-text>
            <router-link to="/accommodation">More information in accommodation</router-link>
          </v-card-text>

          <v-card-title class="title pb-0">Food</v-card-title>
          <v-card-text>
            We offer full board meals to all our packages, in some of the packages meals are served in restaurants, in others they are prepared by the guide and in other packages preparing the food is a part of the experience. We often eat some of the meals outside during the tours – food always tastes very good out in nature!
            <br />Information about, for example, vegetarians/vegans in the party, or about persons with allergies, needs to be provided well in advance.
          </v-card-text>

          <v-card-title class="title pb-0">Groups</v-card-title>
          <v-card-text>
            All our guided adventures are for smaller groups, normally between 6-10 persons. We claim the right to cancel a trip if there are less than 3 persons.
            <br />For an entire group (at least 6 persons) you choose any date that suites you. Naturguiden has a high flexibility and can adjust any of the packages to meet the wishes of an entire group.
            <br />If there is a group of less than 6 persons who would like to experience one of our packages without other participants that is possible with an agreed fee.
          </v-card-text>

          <v-card-title class="title pb-0">Gradient</v-card-title>
          <v-card-text
            class="pb-0"
          >The gradient on the packages is based on the needed condition rather than the technical skills.</v-card-text>
          <v-flex v-for="item in q_element">
            <v-card-text class="py-1">
              <span v-html="item.text"></span>
            </v-card-text>
          </v-flex>
          <v-card-text>The difficulty level of the activities and the tempo will of course be suited to match the group.</v-card-text>

          <v-card-title class="title pb-0">Environment</v-card-title>
          <v-card-text>
            All of Naturguiden activities take place in our wonderful outdoors. To be able to continue doing this it is important to reduce the impact on our countryside as much as possible. Naturguiden is a member of the Swedish Ecotourism Society and we have products that are certified according to Natures Best,
            <a href="https://naturesbestsweden.com/en/about-natures-best/"
            >www.naturesbestsweden.com</a>
            <br />None of our packages contains activities that have a negative impact on the environment (like rib boats, snowmobiles, etc). We try to minimize the transports and use public transport as much as possible. Our goal is to leave no trace.
          </v-card-text>

          <v-card-title class="title pb-0">Price:</v-card-title>
          <v-card-text>
            All prices are given in Euro. We claim the right to change the price due to changes in exchange rates.
            Full payment must take place at the latest two weeks prior the arrival date.
          </v-card-text>

          <v-card-text class="pb-0">Welcome to join us on our tours</v-card-text>
          <v-card-text>
            /John Savelid
            <br />Naturguiden
            <br />+46 70 53 53 630
            <br />
            <a href="mailto:john@naturguiden.se">john@naturguiden.se</a>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LeftSideColumn from "@/components/LeftSideColumn.vue";
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
      drawer: null,
      m_element: [
        {
          title: "About our tours",
          img: require("@/assets/postbullets.png"),
          link: "/info"
        },
        {
          title: "How to get here",
          img: require("@/assets/postbullets.png"),
          link: "/get-here"
        },
        {
          title: "Accommodation",
          img: require("@/assets/postbullets.png"),
          link: "/accommodation"
        },
        {
          title: "About Sweden",
          img: require("@/assets/postbullets.png"),
          link: "/sweden"
        }
      ],

      l_element: [
        {
          title: "Nordic Skating",
          text: "It's fantastic and sometimes little scary.",
          link: "/skating"
        },
        {
          title: "Kayak",
          text: "All those islands in the archipelago, amazing.",
          link: "/kayak"
        },
        {
          title: "Hiking",
          text: "Find the way and yourself up in the mountain.",
          link: "/hiking"
        },
        {
          title: "Back Country skiing",
          text:
            "Spring in the mountain, they call it the fifth season. Still winter but with long lasting days.",
          link: "/skiing"
        }
      ],

      n_element: [
        {
          title: "An experienced guide available 24 hours a day.",
          text: "",
          link: ""
        },
        { title: "Full board service", text: "", link: "" },
        { title: "Required equipment", text: "", link: "" }
      ],

      o_element: [
        {
          title: "",
          text:
            "<b>Hiking and cross country skiing:</b> Meeting point, Ljungdalen. There are several different ways to get here. Detailed travel information on request. Closest airport Östersund in Sweden and Röros in Norway.",
          link: ""
        },
        {
          title: "",
          text:
            "<b>Kayak:</b> Meeting point, Trosa. You get here with train and bus from Stockholm. Travel time less than 2 hours",
          link: ""
        },
        {
          title: "",
          text:
            "<b>Skating:</b> We pick you up at Stockholm airport, or elsewhere after agreement.",
          link: ""
        }
      ],

      p_element: [
        {
          title: " ",
          text: "<b>Hotel:</b> Twin or double rooms with toilet and shower in each room.",
          link: ""
        },
        {
          title: " ",
          text: "<b>Hostel:</b> Two or four bed dormitory rooms with shared toilets and shower.",
          link: ""
        },
        {
          title: "",
          text: "<b>Tent:</b> Two persons in each tent, sleeping bag and sleeping pad is not provided, you can rent for 30 EUR",
          link: ""
        }
      ],

      q_element: [
        {
          title: "",
          text: "<b>Easy:</b> for everyone with “normal” physique.",
          link: ""
        },
        {
          title: "",
          text: "<b>Middle:</b> active people, but not necessary exercise regularly.",
          link: ""
        },
        {
          title: "",
          text: "<b>Tough:</b> nothing extreme, but recommended for people that exercise regularly.",
          link: ""
        }
      ],

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

<style scoped lang="scss">
.no-padding-right {
  padding-right: 0;
}
.no-padding {
  padding: 0;
}
.no-padding-bottom {
  padding-bottom: 0;
}
.list-height {
  height: 25px;
}
.my-img {
  float: left;
  margin: 10px;
  //width: 5%;
}
.one-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>