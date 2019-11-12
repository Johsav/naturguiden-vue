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

      <v-flex xs12 sm12 md8 lg9 xl9 class="my-3">

 
        <v-card class="text-xs-left">

         <v-img
            :height='imageHeight'
            :width='imagewidth'
            class="my-img"
            :src="require('@/assets/images/map/map_m.png')">
          </v-img>

          <v-card-title primary-title class="display-1 pb-0">About Sweden</v-card-title>
          <v-card-text
            class="subheading"
          >Sweden has a lot to offer when it comes to outdoor sports. With over 250.000 lakes, 1.350 km of coast with more than 40.000 islands and several big rivers, we have one of the best areas in the world for skating on natural ice, awesome. Kayaking in the archipelago or on any of the lakes is also fantastic. </v-card-text>
          <v-card-text class="pt-1">
            The forest is another reason for being a great outdoor nation, over 50% is forest. Fantastic opportunities for biking, hiking, hunting, cross country skiing or going by snowmobiles or dog sledges.
          </v-card-text>
<v-card-text class="pt-1">
Then we have the mountains, high areas without trees. Down hill skiing is almost a national sport, cross country skiing something all kids learn. Ski tours in the mountain are popular in wintertime as well as hiking tours in summertime of course. Visit the mountains in April, the fifth season. Still cold and snowy but long lasting sunny days.
</v-card-text>
<v-card-text class="pt-1">
Sweden is a long country, 1.570 km, and the climate changes a lot from North to South. In winter the average temperature is around 0 degrees in the South and about minus 20 - 30 degrees in the North. In summer the temperature is around 20 - 25 degrees in the South and around 10 degrees in the North. Midnight sun in summer and no sun at all during a couple of weeks around Christmas in the North. To tell what´s normal in Sweden is not possible, it´s all about where you are.
</v-card-text>
<v-card-text class="pt-1">
It is all about space, we have 22 persons/km² in Sweden, 10 million on 450.000 km². Compare to the Netherlands that have 410 persons/km². Together with the ”allemansrätt” that gives us the right to travel and camp anywhere (except in someone´s garden). Sweden is perfect if you are looking for freedom and peacefulness.
</v-card-text>
<v-card-text class="pt-1">
Our currency is still Kronor (SEK), we have not changed to Euro. The exchange rate is around [Sorry, Can not load exchange rate] SEK for 1 EUR. (If you divide the Swedish price with 10 you got the price in Euro approximately)
</v-card-text>
<v-card-text class="pt-1">
On all our tours everything you need is included (there is some exception). On some tours you not even have much opportunity to spend money. But if you want some money to be able to buy a beer or something else, you can always withdraw money on the airport. You can also use credit cards almost everywhere.
</v-card-text>
<v-card-text class="pt-1">
You get along well with English in Sweden, most people will understand you. With other languages it can be more difficult even though there are people knowing German, French, Spanish etc.
</v-card-text>
<v-card-text class="pt-1">
More information about Sweden is found on the web page of Visit Sweden 
<a href="https://visitsweden.com/">visitsweden.com</a>
</v-card-text>
<v-card-text class="pt-1">
More information about what to bring and what to wear you find connected to each type of tour.
          </v-card-text>
        </v-card>

<!-- Weather card -->
        <v-card class="text-xs-left">

           <v-img
            :height='w_imageHeight'
            :width='w_imagewidth'
            class="my-img"
            :src="require('@/assets/images/500/clean-bandit001.jpg')">
          </v-img>
           <v-card-title primary-title class="display-1">Weather in Sweden</v-card-title>
           <v-card-text
            class="subheading pb-0"
          >What about the weather, what can we expect when coming to Sweden?</v-card-text>
          <v-card-text>As the main thing with the holiday is the outdoor activity, the weather is important.
</v-card-text>
<v-card-text class="pt-1">
The weather depends of course on time of year and where in Sweden the tour takes place. We will try to give you a rough idea here so that you know what to expect.
</v-card-text>
<v-card-text class="pt-1">
Below we present two tables with average temperature during night and during daytime for each month. You also see the amount of rain or snow for each month (it is measured in millimetre water, when it comes as snow you will get approximately ten times more in thickness.)
</v-card-text>
<v-card-title class="title pb-0">Summertime</v-card-title>
<v-card-text class="pt-1">
The temperature is an average value and measured in the shadow. In the mountain you might have down to four degrees and rain and wind even in the middle of the summer and it can be 25 degrees and clear blue sky a couple of days later. Here we are completely exposed to the weather, there is no shelter. We always recommend to bring both gloves, a cap and a swim suite when going to the mountains.
</v-card-text>
<v-card-text class="pt-1">
When hiking in the south of Sweden there are not that many extremes, the forest gives us shelter. On a sunny day in July we can have around 25 – 30 degrees, and on a cold and rainy day it might be around 18 degrees.
</v-card-text>
<v-card-text class="pt-1">
When it comes to kayak tours you are more dependent to the weather and especially to the wind. But as there are thousands of small islands along the cost you can always get some shelter. The temperature relates to the temperature of the water. The spring is colder than the autumn. Therefore late summer is the best choice for a kayak tour and even late autumn is fantastic in the archipelago. During summertime it is important to have a long arm jumper, sunglasses and a hat otherwise you might get a sunburn being out on the water the whole day.
</v-card-text>

<v-card-title class="title pb-0">Wintertime</v-card-title>
<v-card-text class="pt-1">
On our winter activities you can expect temperatures between zero and minus twenty degrees. There could be snowfall and wind. On our skating tours we might even have around zero degrees and rain. And on our ski tours in the mountain during April or May there could be such warm and sunny days that you can ski with only a T-shirt. The best recommendation is to have several layers of clothes to be able to adapt to the actual temperature. </v-card-text>   
        </v-card>
        <v-card>


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

mounted () {
      console.log(this.$vuetify.breakpoint)
    },

  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '700px'
        case 'sm': return '700px'
        case 'md': return '700px'
        case 'lg': return '700px'
        case 'xl': return '700px'
      }
    },
    imagewidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '40%'
        case 'md': return '40%'
        case 'lg': return '35%'
        case 'xl': return '23%'
      }
    },
    w_imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '200px'
        case 'sm': return '200px'
        case 'md': return '300px'
        case 'lg': return '300px'
        case 'xl': return '300px'
      }
    },
    w_imagewidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '30%'
        case 'md': return '30%'
        case 'lg': return '30%'
        case 'xl': return '30%'
      }
    }
  },

  data() {
    return {
      drawer: null,
      m_element: [
        {
          title: "Our tours",
          img: require("@/assets/postbullets.png"),
          link: "/info"
        },
        {
          title: "Get here",
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
.my-img {
  float: left;
  margin: 10px;
}
</style>