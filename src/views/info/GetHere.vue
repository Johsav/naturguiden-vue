<template>
  <v-container fluid grid-list-md class="no-padding-bottom">
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
          <v-card-title primary-title class="display-1">How to get here</v-card-title>
          <v-card-text
            class="subheading"
          >We have adapted all our tours to make it easy for you to get here. Some of our tours start right at the airport and the others at the railway station or bus stop. For each tour you can find information about where we pick you up.</v-card-text>
          <v-card-text class="pt-1">
            If you have any questions do not hesitate to
            <router-link to="/contact">contact us.</router-link>
          </v-card-text>

          <v-card-title class="title pb-0">For private tours</v-card-title>
          <v-card-text>If you are a group of your own we can pick you up on other places as well. We can also do the tour somewhere else if you have other preferences , contact us.</v-card-text>

          <v-card-title class="title pb-0">Skating tours</v-card-title>
          <v-card-text>
            On all our skating tours we pick you up at the airport, or elsewhere after agreement. Most of our guests arrive at Stockholm airport – Arlanda.
            <p>But as some prefer RyanAir we can also pick you up at Stockholm south -Skavsta after agreement. Do not book your ticket before an agreement, we need to coordinate the pick up / drop off with the pick up / drop off at Arlanda.</p>
            <p>Or elsewhere: If you arrive before the actual day we can pick you up elsewhere after agreement. If you stay close to Arlanda then we pick you up at your hotel before we pick up the others at the airport. If you stay in Stockholm centre we can not pick you up at your hotel because of the traffic situation. But we can pick you up at Rotebro Train station to where you can easily travel by local train. (West side of the track, left side of your train). From here it is a short way to the airport.</p>Last day we drop you off at the airport or at your hotel. Sunday evening is no rush hour and we can drop you off at your hotel in Stockholm if you like.
          </v-card-text>

          <v-card-title class="title pb-0">Kayak tours</v-card-title>
          <v-card-text>
            As we do our kayak tours in the Baltic sea archipelago we have chosen to start our kayak tours in Trosa or in Nyköping, both located south of Stockholm. It is quite easy to get here with public transportation.
            <p>
              <br />
              <b>Trosa:</b> From Stockholm you take the train south to Vagnhärad and then change to bus 550. You end up in Trosa harbor where we meet you. Travel time around 1 hour.
            </p>
            <b>Nyköping:</b> If you travel with RyanAir to Sweden, then you arrive at Stockholm south – Skavsta. That is the airport of Nyköping. From the airport you take the local bus to the central bus station where we meet you.
            If you travel from Stockholm you take the train to Nyköping. Travel time 1 hour. We meet you at the train station.
          </v-card-text>

          <v-card-title class="title pb-0">Hiking and Skiing</v-card-title>
          <v-card-text>
            We do our hiking and skiing tours in Jämtland, in the middle of Sweden close to the Nowegian border. The tours normally start in Ljungdalen. Unfortunately it is not straight forward to get here. But it is possible with public transports and there are several different options. And you can of course use a rental car the last part if you prefer that.
            <p>But when you get here, the travel was worth while, It is a great place if you like the mountains, and we do.</p>
            <p>Ljungdalen is not that far from Funäsdalen and if it's more easy for you to get there we will arrange with the transport the last bit to Ljungdalen. You will then travel over Flatruet, the highest road in Sweden and a famous tourist attraction.</p>
            <p>We will of course help you with the information you need.</p>
            <b>How to get to Ljungdalen?</b>

            <v-list two-line class="pt-1">
              <v-list-tile v-for="item in n_element">
                <v-list-tile-action>
                  <v-img contain height="16px" :src="require('@/assets/postbullets.png')"></v-img>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-text>{{ item.title }}</v-list-tile-text>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

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

      n_element: [
        {
          title:
            "Fly to Östersund: From here you take the bus to Åsarna, change bus and continue to Ljungdalen. Traveltime about 3,5 hours. Or you can get a transfer direct from the airport to Ljungdalen (just above 2 hours drive)."
        },
        {
          title:
            "Fly to Röros (in Norway): Less than two hours drive, by rented car or a pre-arranged transfer."
        },
        {
          title:
            "Train from Stockholm: You need to change train in Sundsvall and continue to Brunflo. From Brunflo take a bus to Åsarna where you change to the bus to Ljungdalen. Travel time around 9 hours."
        },
        {
          title:
            "Bus from Stockholm: Direct bus (harjedalingen.se) from Stockholm to Funäsdalen where we arrange with a pick up. Total travel time 8-9 hours."
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
</style>