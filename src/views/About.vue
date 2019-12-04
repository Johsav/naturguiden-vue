<template>
  <v-container fluid grid-list-md class="pa-3">
    <v-layout row fill-height>
      <v-flex md4 lg3 xl3 class="hidden-sm-and-down">
        <LeftSideColumn></LeftSideColumn>
      </v-flex>

      <v-flex xs12 sm12 md8 lg9 xl9 class="py-3">
        <v-card class="text-xs-left">
          <v-card-title primary-title>
            <h2>Naturguiden your guide to great adventures</h2>
          </v-card-title>
          <v-card-text>
            <p
              class="subheading"
            >Adventures, outdoor in the nature, is our passion. All inclusive adventure-packages with an experienced guide, all equipment, food and accommodation (everything that you need) are what we offer.</p>

            <P>Our most common adventures are</P>

            <v-list class="pt-1">
              <v-list-tile v-for="item in l_element" :key="item.link" router :to="item.link">
                <v-list-tile-action>
                  <v-img contain height="16px" :src="require('@/assets/postbullets.png')"></v-img>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.text }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <br />
            <h3>Private or a scheduled tour?</h3>
            <p>
              You can book one of our scheduled tours and enjoy the tour together with new friends.
              <br />Or you can make your own private tour together with friends or family, choose any date you like.
            </p>
            <div
              class="red--text"
            >Did you know that our speciality is to create custom tours. What are you dreaming of? Try us!</div>
            <p>
              Naturguiden was founded in 1996 and since then has given thousands of people a great time in the Swedish
              nature.
              <br />
            </p>

            <v-img
              width="100"
              class="left"
              contain
              :src="require('@/assets/images/logga_upplevelser.svg')"
            ></v-img>
            <h3>Ecoturism!</h3>
            <p>Ecotourism or a nature friendly approach is important for us. We are member of the Swedish ecotourist organisation and try to minimize our impact on the environment.</p>

            <p>
              You will also find our adventure tours on the
              <a
                href="https://naturesbestsweden.com/en/home/"
              >Nature's best Sweden</a> site. The best outdoor activities in Sweden.
            </p>

            <h3>Where in Sweden?</h3>
            <p>
              We are located in Linköping, 200 km south of Stockholm, in the county of Östergötland but our activities
              take place all over Sweden. We always try to find the best possible places for our different outdoor
              activities.
            </p>
            <p>Our kayak tours are normally in the archipelago south of Stockholm. On the skating tours we meet you at Stockholm airport / Arlanda.</p>
            <p>The Hiking and Skiing tours are in a remote part of Sweden. We start the tours in Ljungdalen and here we have the mountain almost by ourselves.</p>
            <p>
              <i>But of course different locations are possible.</i>
            </p>
            <br />

            <p
              class="font-weight-bold"
            >We have found the most beautiful places for you, we have all equipment you need. We have done all preparation, you just have to show up and enjoy.</p>
            <br />
            <p>Welcome to join us on our tours</p>
            <br />
            <p>
              /John Savelid
              <br />Naturguiden
              <br />+46 70 53 53 630
              <br />
              <a href="mailto:john@naturguiden.se">john@naturguiden.se</a>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LeftSideColumn from "@/components/LeftSideColumn.vue";

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
      drawer: null,
      m_element: [
        {
          title: "About us",
          link: "/about"
        },
        { title: "Contact us", link: "/contact" }
      ],
      l_element: [
        {
          title: "Nordic Skating",
          text: "It's fantastic and sometimes little scary.",
          link: "/adventures/skating/weekend"
        },
        {
          title: "Kayak",
          text: "All those islands in the archipelago, amazing.",
          link: "/adventures/kayak/weekend"
        },
        {
          title: "Hiking",
          text: "Find the way and yourself up in the mountain.",
          link: "/adventures/hiking/weekend"
        },
        {
          title: "Back Country skiing",
          text:
            "Spring in the mountain, they call it the fifth season. Still winter but with long lasting days.",
          link: "/adventures/skiing/weekend"
        }
      ],
      carouselItems: [
        {
          src: require("@/assets/images/500/clean-bandit001.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/forest001.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/happy_w001.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/hiking001.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/kayak002.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/skating_2018_002.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/skiing002.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/hiking007.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/kayak003.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/skating002.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/tent003.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/lake001.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/skating005.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/skiing004.jpg"),
          title: "",
          subtitle: ""
        },
        {
          src: require("@/assets/images/500/kayak001.jpg"),
          title: "",
          subtitle: ""
        }
      ]
    };
  }
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