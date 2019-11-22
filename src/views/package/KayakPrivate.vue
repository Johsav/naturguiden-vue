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
                  Explore the Swedish archipelago in a kayak for a couple of days. Enjoy all the islands and sherries. We stay away from civilisation, bring all food and water we need. Find our way among the islands and stop for lunch when we feel for it. In the evening we find a good place for wild camping, cooking dinner over open fire
                </div>

                <div>
                  We realy love the time on the Baltic.
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
                <div>On our tours we are maximum eight guests. Our open tours are open for anyone and you are very welcome to follow. But if you are a family or a couple of friends, maybe you rather want a private tour. You can then chose any date, and we are absolute free to adopt the tour after your preferences.</div>

                <div>
                  <router-link
                    to="/adventures/kayak/private"
                  >Read more about our private skating tours here.</router-link>
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
                <h1>Kayak - the weekend adventure</h1>
              </v-card-title>
              <v-card-text>
                <p>During three days we kayak in the beautiful archipelago south of Stockholm. Between islands and skerries, out in the open sea and in secluded caves. We sleep in tents on the islands along the way, prepare the food over open fire and wash ourselves in rock pools of the Baltic Sea.</p>

                <p>With kayak out on the Baltic sea. Out among thousands of islands, most of them unsettled. The Swedish “allemansrätt” gives us the opportunity to stay on any one of them. There is no fixed tour, the wind and waves affect our plans and you never know where to spend the night. During the day we take several stops, for a meal or just to stretch our legs. In the evening, after a swim we make a fire and start making dinner. Maybe we manage to catch some fish that we can fry in the pan.</p>
                <p>
                  If you come together with your friends or family and you are 4-6 persons or more consider the options for your own private tour.
                  <router-link to="/adventures/kayak/private">Read more here..</router-link>
                </p>
                <p>
                  Below you have all information you need, but if you still have some more questions, don't hesitate to contact us on
                  <a
                    href="mailto:info@naturguiden.se"
                  >info@naturguiden.se</a> or on +46 70 53 53 630.
                </p>
              </v-card-text>
              <v-card-title class="title pb-0">Join us on any of our weekend trips 2020</v-card-title>
              <v-card-text>
                <b>Price: 490 EUR</b>
              </v-card-text>
              <v-card-text class="pt-0">
                Everything included, accommodation in tent, normally two persons / tent.
                <br />You need to bring a sleeping bag and camping mattress, or rent them for 30 EUR.
                <v-list class="pt-3">
                  <v-list-tile class="list-height" v-for="item in packageDates">
                    <v-list-tile-action>
                      <v-img contain height="16px" :src="require('@/assets/postbullets.png')"></v-img>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.date }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ item.level }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>If there is an interest for other weekends do not hesitate to contact us. We will do our best to help you.
              </v-card-text>
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
              </v-card-text>

              <v-card-title class="title pb-0">Time</v-card-title>
              <v-card-text>
                We meet at 11:00 in Trosa harbour
                <br />And return to Trosa last day around 16:00
              </v-card-text>

              <v-card-title class="title pb-0">Accommodation: Tents</v-card-title>
              <v-card-text>
                <p>We will sleep in a tent on an island in the archipelago. Normally two persons in each tent.</p>
                <p>You need to bring a sleeping bag and camping mattress. Or rent them for 30 EUR.</p>
                <p>We prepare the meals together over open fire or on a camping stove. All food is provided and included in the price.</p>
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

              <v-card-title class="title pb-0">Included in the price</v-card-title>
              <v-card-text>
                Day I
                <br />Lunch, dinner, guide, rent of equipment
                <br />Day II-III
                <br />Breakfast, lunch, dinner, guide, rent of equipment
                <br />Day IV
                <br />Breakfast, lunch, guide,rent of equipment
                <p>
                  <br />
                  <b>Not included:</b> alcoholic drinks.
                </p>
              </v-card-text>
<!--
              <v-card-title class="title pb-0">Program for the four days</v-card-title>
              <v-timeline dense>
                <v-timeline-item v-for="(day, i) in days" color="primary" :key="i" small right>
                  <span
                    slot="opposite"
                    :class="`headline font-weight-bold primary--text`"
                    v-text="day.day"
                  ></span>
                  <div class="py-3">
                    <h2 :class="`headline font-weight-light mb-3 primary--text`">{{day.title}}</h2>
                    <div>{{day.text}}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
-->

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
                <div class="subheading">weekend tour</div>
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
          <!-- Right side column - scheduled dates  -->
          <v-flex xl12 lg12 md12 sm6 xs12>
            <v-card>
              <v-card-title class="d-block grey lighten-1">
                <div class="title">Scheduled dates</div>
                <div class="subheading">open groups 2020</div>
              </v-card-title>

              <v-container fluid grid-list-sm>
                <v-layout column>
                  <v-flex v-for="item in packageDates" :key="item.date">
                    <v-layout row>
                      <v-card-text class="text-xs-right py-1 px-2">{{item.date}}</v-card-text>
                      <v-card-text class="text-xs-left py-1 px-2">{{item.level}}</v-card-text>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <!-- Right side column - Booking  -->
          <v-flex xl12 lg12 md12 sm6 xs12>
            <v-card>
              <v-card-title class="d-block grey lighten-1">BOOKNING</v-card-title>
              <v-card-text>
                <div id="bokun-w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad">Loading...</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xl12 lg12 md12 sm6 xs12>
            <!--            <v-card>
              <v-card-title class="d-block grey lighten-1">Important Information</v-card-title>
              <v-card-text>It's very important ....</v-card-text>
            </v-card>
            -->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </AdventureMenu>
</template>


<script>
import AdventureMenu from "@/components/AdventureMenu.vue";

export default {
  components: {
    AdventureMenu
  },
  data() {
    return {
      packageItems: [
        { type: "Season:", content: "May - October" },
        { type: "Days:", content: "4 days/3 nights" },
        { type: "Price:", content: "490 EUR"},
        { type: "Meeting point:", content: "Trosa harbour south of Stockholm" },
        { type: "Lodging:", content: "Tent in the archipelago" }
      ],

      packageDates: [
        { date: "25 - 28 June:", level: "" },
        { date: "20 - 23 August:", level: "" }
      ],

      days: [
        {
          day: "Day 1",
          title: "Arive and skate",
          text: `Arrival at the airport. The guide will meet you and if possible we start skating already in the afternoon.
                We start with a safety and security briefing and then hand out all equipment. Time to change to proper
                clothes if you have not yet done that. Late afternoon we drive towards the chosen skating area. Arriving
                to the hostel/hotel you check in and then we have dinner at the hostel/hotel.`
        },
        {
          day: "Day 2 & 3",
          title: "Skate some more",
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
          day: "Day 4",
          title: "Skate and leave",
          text: `After breakfast we head off to another day on ice, skating as long as possible depending on the scheduled departure times.
                On our way back to the airport we stop for a shower and to change clothes and maybe for something
                to eat. The guide then drives you back to the airport.`
        }
      ]
    };
  }
};
</script>
