<template>
  <AdventureMenu>
    <v-layout row wrap grid-list-md class="pt-2">
      <v-flex xs12 sm12 md8 lg9 xl9>
        <v-layout row wrap grid-list-md class="pt-2">
          <v-flex xs12 sm12 md8 lg8 xl8>
            <!-- First Card - general info  -->
            <v-card class="grey lighten-3">
              <v-card-title class="pt-1 pb-0">
                <h1>Kayak in the  Swedish archipelago</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <v-img
                  contain
                  class="right"
                  width="100"
                  :src="require('@/assets/images/Logo_RGB.png')"
                ></v-img>
                <div>
                  Join us on our Kayak tours in the beautiful archipelago of the Baltic sea. Between islands and skerries, out in the open sea and in seduced caves. There are thousands of islands, most of them unsettled. The Swedish "allemansrätt" gives us the right to camp on any one of them. At lunchtime we make a break on some island, cook a meal, maybe take a swim. In the evenings we camp on another island, make dinner over open fire and sleep in tents.
                </div>

                <div>
                  We really love to spend time in the archipelago.
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
                <div>
                  If you are a family or a couple of friends, a private tour might be perfect for you. You can chose any date, and also change were we go if you have other preferences. If you travel as single or as a small group our open tours are open for anyone and you are very welcome to follow. On those tours we are not more than eight guests.
                </div>

                <div>
                  <router-link
                    to="/adventures/kayak/weekend"
                  >Read more about our open weekend kayak tours here.</router-link>
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
                <h1>Your own kayak adventure</h1>
              </v-card-title>
              <v-card-text class="pt-1 subheading">
                <v-img
                  contain
                  class="right"
                  width="350"
                  :src="require('@/assets/images/500/kayak001.jpg')"
                ></v-img>
                Enjoy the beautiful archipelago of Sweden. Between islands and skerries, out in the open sea and in secluded caves. We sleep in tents on the islands along the way, prepare the food over open fire and wash ourselves in rock pools of the Baltic Sea.
              </v-card-text>
              <v-card-text>
                <p>With kayak out on the Baltic sea. Out among thousands of islands, most of them unsettled. The Swedish “allemansrätt” gives us the opportunity to stay on any one of them. There is no fixed tour, the wind and waves affect our plans and you never know where to spend the night. During the day we take several stops, for a meal or just to stretch our legs. In the evening, after a swim we make a fire and start making dinner. Maybe we manage to catch some fish that we can fry in the pan.</p>
                <p>You decide how you like to spend the days. How fast and long we go with the kayak. How much time you like to spend on the islands, swimming or just relaxing. </p>
                <p> Below you have all information you need, but if you still have some more questions, don't hesitate to contact us on
                  <a href="mailto:info@naturguiden.se"
                  >info@naturguiden.se</a> or on +46 70 53 53 630. </p>
              </v-card-text>

              <v-flex class="grey lighten-3">
              <v-card-title class="title pb-0">Book your own skating tour</v-card-title>
              <v-card-text>
                <b>Price: from 490 EUR (4 day/ 3 nights)</b>
              </v-card-text>
              <v-card-text class="pt-0">
                Everything included, accommodation in tent, normally two persons / tent.
                <br />You need to bring a sleeping bag and camping mattress, or rent them for 30 EUR.
              </v-card-text>
              <v-card-text class="pt-0">
                <b>More days</b>
              </v-card-text>
              <v-card-text class="pt-0">
                If you like to stay longer than 4 days
                <br />You pay from: 75 EUR/day (depending on number of participants) 
              </v-card-text>
              </v-flex>

              <v-card-title class="title pb-0">A normal day in the archipelago</v-card-title>
              <v-card-text>
                <p>We start with breakfast prepared at the shoreline on the camping stove, maybe porridge, bread and tea/coffee. Then we put down our tents and stove everything in our kayaks. We head off out between the islands. The weather and wind decide were we go, out on the open or close to the islands.</p>
                <p>At lunch time we find a nice spot where we can prepare our lunch, take a swim or just stroll along the shore line</p>
                <p>In the evening we take a swim, spend time around the fire, and make dinner over open fire. Maybe someone tries to catch a fish that we can eat as well. Just enjoy</p>
              </v-card-text>

              <v-card-title class="title pb-0">Meeting point</v-card-title>
              <v-card-text>
                Normally we start our tours in Trosa, south of Stockholm. You get here rather easy with local train and bus. Read more here.
                <router-link to="/get-here">How to get here</router-link>
                <br />But we are open for other options if that suits you better.
              </v-card-text>

              <v-card-title class="title pb-0">Time</v-card-title>
              <v-card-text>
                Any time you like, you decide when we we will meet and how long we will stay.
              </v-card-text>

              <v-card-title class="title pb-0">Accommodation: Tents or hostel if you prefer that</v-card-title>
              <v-card-text>
                <p>We will sleep in a tent on an island in the archipelago. Normally two persons in each tent.</p>
                <p>You need to bring a sleeping bag and camping mattress. Or rent them for 30 EUR.</p>
                <p>We prepare the meals together over open fire or on a camping stove. All food is provided and included in the price.</p>
                <p>If you rather stay in hostel or hostel. We will plan the tour in such way that makes it possible.
                </p>
              </v-card-text>

              <v-card-title class="title pb-0">Personal equipment</v-card-title>
              <v-card-text>
                <p>Clothing suitable for kayaking, rain clothes and swimwear, sleeping bag and camping mattress, sun glasses</p>
                <p>Good to have but not necessary: Hat for the sun, or rain. Dry bag for your mobile/camera.</p>
              </v-card-text>

              <v-card-title class="title pb-0">Equipment included</v-card-title>
              <v-card-text>
                Kayak, life jacket, tent, maps.
                <br />Normally we provide single kayaks K1, but if you prefer a two seat kayak K2 we provide that for you
              </v-card-text>

              <v-flex class="grey lighten-3">  
              <v-card-title class="title pb-0">Included in the price</v-card-title>
              <v-card-text>
                Day I:
                <br />Lunch, dinner, guide, rent of equipment
                <br />Day II-III:
                <br />Breakfast, lunch, dinner, guide, rent of equipment
                <br />Day IV:
                <br />Breakfast, lunch, guide,rent of equipment
                <p> <br /> <b>Not included:</b> alcoholic drinks. </p>
              </v-card-text>
              </v-flex>

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
                <div class="title">Kayak</div>
                <div class="subheading">private tour</div>
              </v-card-title>

              <v-container fluid grid-list-sm>
                <v-layout column>
                  <v-flex v-for="item in packageItems" :key="item.type">
                    <v-layout row>
                      <v-card-text class="text-xs-right py-1 px-2">{{item.type}}</v-card-text>
                      <v-card-text class="text-xs-left py-1 px-2">
                        <v-html>{{item.content}}</v-html>
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

      activity: "kayak",

      days: [
        {
          day: "Day I",
          title: "",
          text: `We meet you at our starting point. After some introduction we start with packing the belongings into dry bags and then into the kayak. Belongings not needed during the trip can be left behind. After a short introduction we head off out onto the water. We start slow to get comfortable with the kayak. Later on we reach a nice island where we go ashore, put up our tents and start making dinner over the open fire. Hopefully, the water is warm to swim.The night we spend in our tents, two persons each.`
        },
        {
          day: "Day II-III",
          title: "",
          text: `In the morning when the sun makes it warm we sit on the rocks with feet in the water eating our breakfast. When everything is back in the kayak we head out towards the open sea, leaving no trace that shows where we have spent the night.<br />
          The wind, weather and the fitness of the group decides how we plan our trip. We paddle between islets and skerrys, out into open sea and calm secluded bays. You learn about paddling technique and safety, reading coastal maps and about birds and animals of the archipelago. We stop at and visit historical and cultural places too. During the day, we will have several breaks to eat and to relax. In the evening we make our camp on another island.`
        },
        {
          day: "Day IV",
          title: "",
          text: `After breakfast we head back towards the starting point. We adjust our time schedule according to the departure. Back ashore we take something to eat and prepare ourselves for the trip home again.`
        }
      ],

      packageItems: [
        { type: "Season:", content: "May - October" },
        { type: "Days:", content: "4 days/3 nights" },
        { type: "Price:", content: "From 490 EUR"},
        { type: "Meeting point:", content: "Trosa harbour south of Stockholm or other place after agreement" },
        { type: "Lodging:", content: "Tent in the archipelago" }
      ],

      packageDates: [
        { date: "25 - 28 June:", level: "" },
        { date: "20 - 23 August:", level: "" }
      ]

    };
  }
};
</script>
