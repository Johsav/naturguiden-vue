<template>
  <AdventureMenu>
    <v-layout row wrap grid-list-md class="pt-2">
      <v-flex xs12 sm12 md8 lg9 xl9>
        <v-layout row wrap grid-list-md class="pt-2">
          <v-flex xs12 sm12 md8 lg8 xl8>
            <!-- First Card - general info  -->
            <v-card class="grey lighten-3">
              <v-card-title class="pt-1 pb-0">
                <h1>Nordic Skating in Sweden</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <v-img
                  contain
                  class="right"
                  width="100"
                  :src="require('@/assets/images/Logo_RGB.png')"
                ></v-img>
                <div>
                  It's great adventure, it's fun, it's skating on natural ice. Experience some amazing skating adventures in Sweden. The unspoiled countryside and the huge expanse of glossy ice – everything is here waiting for you.
                  Sweden is one of the best countries for Nordic skating. The variety of lakes and the Baltic sea gives us a lot of possibilities for ice-skating. No wonder that it have become very popular among all types of people in all ages.You don't need to be an expert on skates to come here for skating, but you need to be able to skate on some kind of skates, for example Rollerblades or figure skates.
                </div>

                <div>
                  We relay like to share this fantastic experience with you.
                  <b>Join us on our weekend tours or book your own private tour</b>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <!-- Second Card - Private or Open tour  -->
          <v-flex xs12 sm12 md4 lg4 xl4>
            <v-card class="grey lighten-3">
              <v-card-title class="pt-1 pb-0">
                <h1>Private or Open tour</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <div>If you are a family or a couple of friends, a private tour might be perfect for you. You can chose any date, and also the standard of accommodation. If you travel as single or as a small group our open tours are open for anyone and you are very welcome to follow. On those tours we are not more than eight skaters.</div>

                <div>
                  <router-link
                    to="/adventures/skating/weekend"
                  >Read more about our open weekend tours here.</router-link>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- Main Card - detailed information  -->
        <v-layout class="pt-2">
          <v-flex>
            <v-card class="text-xs-left">
              <v-card-title class="pt-1 pb-0">
                <h1>Nordic Skating - your own tour</h1>
              </v-card-title>

              <v-card-text class="subheading pb-0">
                <v-img
                  contain
                  class="right"
                  width="350"
                  :src="require('@/assets/images/500/skating002.jpg')"
                ></v-img>
                <p>Enjoy Nordic skating together with your friends or family. When booking your own private tour you can come any date and stay as long as you like. You can chose the type of accommodation and combine skating with other activities if you like.</p>
                <p>We always travel in small groups and most of our guests are private groups. We are maximum eight persons and one guide and travel in a minibus. If you are more than eight we use a second bus.</p>
                <p>The guide picks you up at the airport or where you like to be picked up. If possible we go directly for skating on a good lake nearby. All skating equipment is provided.</p>Where we skate depends on the ice and weather situation, we always choose the area that provides the best skating conditions. The accommodations are located in the area but could change from day to day depending on where we choose to go skating.
              </v-card-text>

              <v-card-title class="title pb-0">A normal day on the ice</v-card-title>
              <v-card-text>We start with breakfast where we also prepare our lunch packages. As soon as everyone is ready we head off for skating. If we are lucky we can walk from our accommodation directly out on the ice. Otherwise we take the minibus to the lake. The guide is always first, checking the ice and looking out for weak spots. The speed and distance is adjusted to the group and the ice condition. Now and then we take short stops to admire the beautiful landscape, chat for a while or just rest. During the day we go ashore from time to time, for the first or second lunch break or for walking to another lake nearby. At the end of the day we return to the minibus and head back to the hotel/hostel. A nice sauna before the dinner is a pleasant experience. If the conditions are right we might go for another skating trip in moonlight late in the evening.</v-card-text>

              <v-card-title class="title pb-0">Lodging</v-card-title>
              <v-card-text>
                <p>
                  Hostel or Hotel, B1, B2, B3, C1 and C2.
                  More information under
                  <router-link to="/accommodation">accommodation</router-link>
                </p>Sheets and towel are not included if you stay in hostel (B1, B2 or B3),
                <br />+24 EUR extra if you don't bring your own.
              </v-card-text>

              <v-flex class="grey lighten-3">
              <v-card-title class="title pb-0">Price</v-card-title>
              <v-card-text class="pb-0">
                <b>37 EUR early season discount</b> before 3 February
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
              
              </v-flex>
              <v-card-title class="title pb-0">Pick up</v-card-title>
              <v-card-text>At Stockholm/Arlanda airport. Other locations possible after agreement.</v-card-text>

              <v-card-title class="title pb-0">Time for arrival and departure:</v-card-title>
              <v-card-text>We pick you up at arrival and drop you off in time for departure on the last day</v-card-text>

              <v-card-title class="title pb-0">Personal equipment</v-card-title>
              <v-card-text>
                Clothing suitable for skating, a complete set of clothes to bring in provided backpack.
                <br />Good to have but not necessary: Sun glasses, dry bag for your mobile/camera, indoor shoes
              </v-card-text>

              <v-card-title class="title pb-0">Equipment included</v-card-title>
              <v-card-text>Skates, boots, backpack and required safety equipment, thermos, lunch box and sit pad</v-card-text>

              <v-card-title class="title pb-0">Extra equipment that we can provide</v-card-title>
              <v-card-text>
                <p>We can provide you with the following but you need to make a reservation for it when you place your order:</p>
                <p>Extra safety equipment: Helmet, knee pad, wrist and arm bow protectors -free of charge.</p>
                <p>Sheets and towel: +24 EUR extra.</p>
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
                <v-img
                  contain
                  class="right"
                  width="225"
                  :src="require('@/assets/images/500/safety_eq.jpg')"
                ></v-img>
                <p>Safety is an important issue. We cover great distances on the ice during a day. The whole time we keep track of the quality of the ice and avoid all weak areas. If someone should break through the ice the safety equipment we have helps us to pick the person up in a minute. And soon all wet clothes are changed to dry and warm clothes. The skating trip can continue.</p>
                <p>PS: The only time we had a person falling into the water, they did not follow the given instructions.</p>
                <p>Safety equipment we carry: backpack, safety line, ice nails and poles</p>
              </v-card-text>

              <v-flex class="grey lighten-3">
              <v-card-title class="title pb-0">Included in the price</v-card-title>
              <v-card-text>
                Day I
                <br />Transfer, dinner*, guide, rent of equipment, share in double room
                <br />Day I
                <br />Breakfast, lunch, dinner*, guide, rent of equipment, share in double room
                <br />Day III
                <br />Breakfast, lunch, dinner*, guide, rent of equipment, share in double room
                <br />Day IV
                <br />Breakfast, lunch, guide, rent of equipment, transfer
                <p>*Dinner is not included in alternative B1 and C1.</p>
                <p>
                  <b>Not included:</b> alcoholic drinks.
                </p>
              </v-card-text>
              </v-flex>

              <v-card-title class="title pb-0">Extra days</v-card-title>
              <v-card-text>It is possible to extend the tour with one or several days. Price for each extra day:</v-card-text>
              <v-card-text class="py-0" v-for="item in extra" :key="item.level">
                {{item.level}} &nbsp; &nbsp;
                {{item.price}}
              </v-card-text>

              <v-card-title class="title pb-0">Program for the four days</v-card-title>
                  <v-timeline dense>
                    <v-timeline-item v-for="(day, i) in days" color="primary" :key="i" small right>
                      <span
                        slot="opposite"
                        :class="`headline font-weight-bold primary--text`"
                        v-text="day.day"
                      ></span>
                      <div class="py-0">
                        <h2 :class="`headline font-weight-light mb-2 primary--text`">{{day.day}}</h2>
                        <span v-html="day.text"></span>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                  
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
        { type: "Days:", content: "4 days/3 nights" },
        { type: "Price:", content: "from 613 EUR" },
        { type: "Meeting point:", content: "Arlanda airport or place after agreement" },
        { type: "Lodging:", content: "Hotel or Hostel" }
      ],
      accom: [
        { level: "Basic 1",
          price: "from 650 EUR",
          type: "single room 73 EUR extra" },
        { level: "Basic 2",
          price: "from 705 EUR",
          type: "single room 73 EUR extra" },
        { level: "Basic 3",
          price: "from 895 EUR",
          type: "single room 73 EUR extra" },
        { level: "Comfort 1",
          price: "from 815 EUR",
          type: "single room 183 EUR extra" },
        { level: "Comfort 2",
          price: "from 1015 EUR",
          type: "single room 183 EUR extra" }
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