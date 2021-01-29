<template>
  <AdventureMenu>
    <v-layout row wrap grid-list-md class="pt-2">
      <v-flex xs12 sm12 md8 lg9 xl9>
        <v-layout row wrap grid-list-md class="pt-2">
          <v-flex xs12 sm12 md8 lg8 xl8>
            <!-- First Card - general info  -->
            <v-card class="grey lighten-3">
              <v-card-title class="pt-1 pb-0">
                <h1>Nordic Skating in Sweden during the Corona pandemic</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <div class="pb-1">
                  It's still great adventure, and we can make it corona safe and within the Swedish regulation if we keep the group size of no more than 8 people.
                </div>
                <div class="pb-1">
                  Gather some friends and book your own private tour for one or more days. You can book any dates.
                </div>
                <div class="pb-1">
                  If you are not a group. We will also arrange open tours if we get enough interest. Contact us and we will see what we can arrange.
                </div>
                <div class="pb-1">  
                  You are all welcome, beginners or good skaters. Swedes or guests from other countries who succeed in traveling to Sweden. If you need equipment, no problem. If you have your own equipment, that's fine.
                </div>
                <div class="pb-1">
                  As always, it is the ice situation that determines where we should skate. The final decisions are usually made three days before the tour.
                </div>
                <div>
                  <b>Join us on a tour</b>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <!-- Second Card - Private or Open tour  -->
          <v-flex xs12 sm12 md4 lg4 xl4>
            <v-card class="grey lighten-3">
  
              <v-card-title class="pt-1 pb-0">
                <h1>Skate close to home, or travel for the best ice</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <div>Where to go skating can change from week to week. Either you chase the best ice, even if we need to travel far. Or you wait for good conditions near where you live, or just hope that the conditions are good when you plan to skate. The choice is yours, we are flexible. Also with cancellation if the conditions are not good for skating.</div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- Main Card - detailed information  -->
        <v-layout class="pt-2">
          <v-flex>
            <v-card class="text-xs-left">
              <v-card-title class="pt-1 pb-0">
                <h1>Nordic Skating - the corona adopted tour</h1>
              </v-card-title>

              <v-card-text class="subheading pb-0">
                <v-img
                  contain
                  class="right"
                  width="350"
                  :src="require('@/assets/images/500/skating002.jpg')"
                ></v-img>

                <p>
                  <v-img contain height="16px" position="left" :src="require('@/assets/postbullets.png')"></v-img>
                  One or more days with an experienced skating guide who will take you to the best skating lakes, or the sea if possible.
                  <v-img contain height="16px" position="left" :src="require('@/assets/postbullets.png')"></v-img> 
                  Maximum group size 7 people.
                  <v-img contain height="16px" position="left" :src="require('@/assets/postbullets.png')"></v-img>
                  If necessary, you can rent all the necessary skating equipment.
                  <v-img contain height="16px" position="left" :src="require('@/assets/postbullets.png')"></v-img>
                  Accommodation, food and travel are not included. 
                </p>
              </v-card-text>

              <v-card-title class="title pb-0">A normal day on the ice</v-card-title>
              <v-card-text>We will meet you at the agreed place and time. The first day we start with a safety review and make sure that everyone has equipment that works. Then a lot of skating. We adapt the pace and distance to you. We usually take two slightly longer breaks where we eat our packed lunch. Maybe we also grill sausages. At the end of the day we return to the starting point. Talk through the day and plan for tomorrow if we are going to skate then too. We may not share accommodation with you but will meet again the next day at the ice. If you want, we can arrange booking of accommodation nearby.</v-card-text>

              <v-flex class="grey lighten-3">
              <v-card-title class="title pb-0">Price for a group</v-card-title>
              <v-card-text class="pb-0">
                <p class="mb-0">Price for the whole group, max 7 persons</p>
                <p class="mb-0">Rent of equipment:  600 SEK/person </p>
              </v-card-text>
              <v-card-text>
              <v-simple-table>
                <tr v-for="item in accom" :key="item.level">
                  <td class="tr">{{item.level}}</td>
                  <td class="tr">{{item.price}}</td>
                  <td>{{item.type}}</td>
                </tr>
              </v-simple-table>
              </v-card-text>
              <v-card-title class="title pb-0">Price open tours</v-card-title>
              <v-card-text class="pb-0">
                <p class="mb-0">About 1100 SEK per person and day.</p>
                <p class="mb-0">Rent of equipment:  600 SEK/person </p>
              </v-card-text>
              
              </v-flex>

              <v-card-title class="title pb-0">Personal equipment</v-card-title>
              <v-card-text>
                <p class="mb-0">Skates, boots, backpack, safety line, ice nails and poles</p>
                <p class="mb-0">A complete set of extra clothes in a drybag, or in double plastic bags.</p>
                <p class="mb-0">Clothing suitable for skating, a warm jacket for the breaks</p>
                <p class="mb-0">Good to have but not necessary: Sun glasses, dry bag for your mobile/camera</p>
              </v-card-text>

              <v-card-title class="title pb-0">Equipment possible to rent</v-card-title>
              <v-card-text>
                <p class="mb-0">Skates, boots, backpack, safety line, ice nails drybag and poles</p>
                <p class="mb-0">Helmet, knee pad, wrist and arm bow protectors</p>
              </v-card-text>

              <v-card-title class="title pb-0">About the skates</v-card-title>
              <v-card-text>
                <v-img
                  contain
                  class="right"
                  width="150"
                  :src="require('@/assets/images/200/schoen_and_skate.jpg')"
                ></v-img>We use special skates well adopted for Nordic skating. They are longer than hockey or figure skates. The front has a long curve compared to speed skates with sharp front, which is necessary if the ice in not completely smooth. And most important, the skate and the boot are separate so you can take off the skate when walking to and from the ice. If you have suitable skates, for example the Salomon skates, you may use them if you like.
              </v-card-text>

              <v-card-title class="title pb-0">About safety</v-card-title>
              <v-card-text>
                <p>Safety is an important issue. We cover great distances on the ice during a day. The whole time we keep track of the quality of the ice and avoid all weak areas. If someone should break through the ice the safety equipment we have helps us to pick the person up in a minute. And soon all wet clothes are changed to dry and warm clothes. The skating trip can continue.</p>
                <p>PS: The only time we had a person falling into the water, they did not follow the given instructions.</p>
              </v-card-text>
      
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Right side column - short info  -->
      <v-flex xl3 lg3 md4 sm12 xs12>
        <v-layout row wrap>
          <v-flex xl12 lg12 md12 sm6 xs12>
            <v-card>
              <v-card-title class="d-block grey lighten-1">
                <div class="title">Nordic skating</div>
                <div class="subheading">{{packageType}}</div>
              </v-card-title>

              <v-container fluid grid-list-sm>
                <v-layout column>
                  <v-flex v-for="item in packageItems" :key="item.type">
                    <v-layout row>
                      <v-card-text class="text-xs-right py-1 px-2">{{item.type}}</v-card-text>
                      <v-card-text class="text-xs-left py-1 px-2">
                        {{item.content}}
                      </v-card-text>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          

          <!-- Right side column - Booking  -->
          <v-flex xl12 lg12 md12 sm6 xs12>
            <booking-private :activity="activity"></booking-private>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </AdventureMenu>
</template>

<script>
import AdventureMenu from "@/components/AdventureMenu.vue";
import BookingPrivate from "@/components/BookingPrivate.vue";

export default {
  components: {
    AdventureMenu,
    BookingPrivate
  },

  data() {
    return {

        activity: "skating",
        packageType: "private tour",
        l_element: [
        {
          nr: "1",
          text: "One or more days with an experienced skating guide who will take you to the best skating lakes, or the sea if possible.",
        },
        {
          nr: "2",
          text: "Maximum group size 7 people.",
        },
        {
          nr: "3",
          text: "If necessary, you can rent all the necessary skating equipment.",
        },
        {
          nr: "4",
          text:
            "Accommodation, food and travel are not included.",
        }
      ],
        days: [
        {
          day: "Day I",
          title: "",
          text: `Arrival at the airport. The guide will meet you and if possible we start skating already in the afternoon. We start with a safety and security briefing and then hand out all equipment. Time to change to proper clothes if you have not yet done that. Late afternoon we drive towards the chosen skating area. Arriving to the hostel/hotel you check in and then we have dinner at the hostel/hotel. `
        },
        {
          day: "Day II-III",
          title: "",
          text: `We have breakfast and also time to prepare the lunch packages. Depending on distance we walk or take the minibus towards the ice. At the lake we start by examining the ice before we put on the skates and step out on the ice. We skate in a row, the guide always first, checking the ice and looking out for weak spots. The speed and distance is adjusted to the group and the ice condition. Now and then we take short stops to admire the beauty, chat for a while or just rest. During the day we go ashore from time to time to take something to eat or walk to another lake nearby. At the end of the day we return to the minibus and head back to the hotel/hostel. A nice sauna before the dinner is a pleasant experience. If the conditions are right we might go for another skating trip in moonlight late in the evening. `
        },
        {
          day: "Day IV",
          title: "",
          text: `After breakfast we head off to another day on ice, skating as long as possible depending on the scheduled departure times. On our way back to the airport we stop for a shower and to change clothes and maybe for something to eat. The guide then drives you back to the airport. `
        }
      ],

      packageItems: [
        { type: "Season:", content: "December - March" },
        { type: "Days:", content: "1 - 5 day" },
        { type: "Price:", content: "" },
        { type: "Meeting point:", content: "Close to the lake" },
        { type: "Lodging:", content: "Not included" }
      ],
      accom: [
        { level: "One day",
          price: "6600 SEK",
          type: "" },
        { level: "Two days",
          price: "12100 SEK",
          type: "" },
        { level: "Three days",
          price: "17700 SEK",
          type: "" },
        { level: "Four days",
          price: "23200 SEK",
          type: "" }
      ],
      extra: [
        { level: "Basic 1:", price: "from 104 EUR" },
        { level: "Basic 2:", price: "from 122 EUR" },
        { level: "Basic 3:", price: "from 177 EUR" },
        { level: "Comfort 1:", price: "from 177 EUR" },
        { level: "Comfort 2:", price: "from 244 EUR" }
      ]
    };
  }
};




</script>

<style scoped lang="scss">
.tr {
  width: 100px;
}
</style>