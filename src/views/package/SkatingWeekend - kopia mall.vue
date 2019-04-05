<template>
 <v-container fluid class="no-padding">
    <v-layout row>
      <v-flex lg10>
        hello hello
        <configured-carousel :carouselItems="carouselItems"></configured-carousel>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm12 md8 lg7 xl8>

        <v-container fluid grid-list-lg>
          <v-layout column>
            <v-flex>
              <v-card>
                <v-card-title>
                 <h1>Nordic Skating - the weekend tour for you</h1>
                </v-card-title>
                
                <v-card-text class="text-xs-left">
                  <p>
                  Nordic skating in Sweden, an all inclusive guided tour with a lot of good skating. We travel by minibus
                  in small groups of maximum eight persons and one guide. Your guide picks you up at the airport/train
                  station and if possible we go directly for skating on a good lake nearby. All needed equipment for
                  skating is provided. We sleep in hostels and are making the dinner together in the evenings. At breakfast
                  we also prepare our lunch that we bring in our backpacks.
                  </p>

                  <v-img
                    class="right"
                    width="100"                
                    :src="require('@/assets/images/Logo_RGB.jpg')"
                  >
                  </v-img>
                  <p>
                  Where we skate depends on the ice and weather situation, we always choose the area that provides the
                  best skating conditions. The accommodations are located in the area but could change from day to
                  day depending on where we choose to go skating.
                  </p>
                  <p><i>
                  If you come together with your friends or family and you are 4-6 persons or more consider the options
                  for your own private tour.
                  <a href="/adventures/skating-yourown">Read more here..</a>
                  </i></p>
              
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    
      <v-flex xl3 lg3 md4 class="hide-sm-and-down">
        <v-container fluid grid-list-md class="no-padding-sides">
          <v-layout column>
            <v-flex>
              <v-card>
                <v-card-title class="d-block">
                  <h2 class="title">Nordic skating</h2>
                  <h3 class="subheading">weekend tour</h3>
                </v-card-title>
                <v-card-text class="text-xs-left">
                  <v-list-tile v-for="item in packageItems" :key="item.type">
                    <v-list-tile-content>{{item.type}}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{item.content}}</v-list-tile-content>
                  </v-list-tile> 
                </v-card-text>
              </v-card>
            </v-flex>
            <h4 class="grey--text text-xs-left pl-3">Other simular packages</h4>
            <v-flex v-for="item in carouselItems" :key="item.src">
              <v-card color="indigo" dark height="200">
                <v-card-title primary class="title">{{item.src}}</v-card-title>
                <v-card-text>andra card uppifrån till vänster</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import ConfiguredCarousel from "@/components/ConfiguredCarousel.vue";

export default {
  components: {
    ConfiguredCarousel
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
       packageItems:  [
        {type: "Season:", content: "January - mid March"},
        {type: "Days:", content: "4 days/3 nights"},
        {type: "Price:", content: "from 655 EUR"},
        
       
      ],
            days: [
        {
          day: 'Day 1',
          title: 'Arive and skate',
          text: `Arrival at the airport. The guide will meet you and if possible we start skating already in the afternoon.
                We start with a safety and security briefing and then hand out all equipment. Time to change to proper
                clothes if you have not yet done that. Late afternoon we drive towards the chosen skating area. Arriving
                to the hostel/hotel you check in and then we have dinner at the hostel/hotel.`
        },
        {
          day: 'Day 2 & 3',
          title: 'Skate some more',
          text: `We have breakfast and also time to prepare the lunch packages. Depending on distance we walk or take
                the minibus towards the ice. At the lake we start by examining the ice before we put on the skates
                and step out on the ice. We skate in a row, the guide always first, checking the ice and looking
                out for weak spots. The speed and distance is adjusted to the group and the ice condition. Now and
                then we take short stops to admire the beauty, chat for a while or just rest. During the day we go
                ashore from time to time to take something to eat or walk to another lake nearby. At the end of the
                day we return to the minibus and head back to the hotel/hostel. A nice sauna before the dinner is
                a pleasant experience. If the conditions are right we might go for another skating trip in moonlight
                late in the evening.`
        },
        {
          day: 'Day 4',
          title: 'Skate and leave',
          text: `After breakfast we head off to another day on ice, skating as long as possible depending on the scheduled departure times.
                On our way back to the airport we stop for a shower and to change clothes and maybe for something
                to eat. The guide then drives you back to the airport.`
        }
      ]
    };
  }
};
</script>
