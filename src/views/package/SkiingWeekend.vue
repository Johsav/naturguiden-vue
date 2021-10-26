<template>
  <AdventureMenu>
    <v-layout row wrap grid-list-md class="pt-2">
      <v-flex xs12 sm12 md8 lg9 xl9>
        <v-layout row wrap grid-list-md class="pt-2">
          <v-flex xs12 sm12 md8 lg8 xl8>
            <!-- First Card - general info  -->
            <v-card class="grey lighten-3">
              <v-card-title class="pt-1 pb-0">
                <h1>Winter holyday with cross country skiing</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <v-img
                  contain
                  class="right"
                  width="100"
                  :src="require('@/assets/images/Logo_RGB.png')"
                ></v-img>
                <div>
                  Visit the Swedish mountains during the best time of the year, the fifth season: still winter, but with long lasting sunshine days. Sun factor 20 is needed. We cross the snowy mountains under a blue sky, take our breaks in dug couches of snow.
                </div>
                <div>
                  Take several days on back country skies between different mountain lodges. Or stay in our mountain lodge doing day trips on skies with option for a lot of other winter activities. Winter fishing, snow shoe walking, alpine skiing or just run down the slope on a sledge. 
                </div>
                <div>
                  We living with Helags just around the corner. Number three among the World's best summit hikes according to National Geographic. On our cross country tours we will for sure visit Helags mountain lodge. With the possibility to reach the summit for those that have the energy to do that.
                </div>  
                <div>We are in the home of the native Sami people. In April they moving the reindeers from the winter pasture in the forest up to the mountains It might be possible that we see those reindeers on their way to the mountains. We might even see the rare native arctic fox.
                </div>
                <div>
                  Spring in the mountains are the best period of the year.
                  <b>Join us on a tour or just stay in our lodge enjoy different winter activities.</b>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <!-- Second Card - Private or Open tour  -->
          <v-flex xs12 sm12 md4 lg4 xl4>
            <v-card class="grey lighten-3">
              <v-card-title class="pt-1 pb-0">
                <h1>Our different winter package</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <div>We offer three different winter packages.</div>
                <div>1. A open guided tour on back country skies between the mountain lodges up among the mountains. Feel free to join. You have all information below on this page.</div>
                <div>2. Spend days in our mountain lodge. Use the day doing different winter activities such as cross country skiing, winter fishing, alpine skiing or snow shoe walking. Go yourself or together with a guide. <router-link to="/adventures/skiing/adventures"> Read more about winter adventure days here.</router-link></div>
                
                <div>3. If you are a family or a couple of friends, a private ski tour might be perfect for you. You can chose any date, and tail the tour after your preferences. <router-link to="/adventures/skiing/private"> Read more about your own ski tour here.</router-link></div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- Main Card - detailed information  -->
        <v-layout class="pt-2">
          <v-flex>
            <v-card class="text-xs-left">
              <v-card-title class="pt-1 pb-0">
                <h1>Cross-country skiing in the Swedish mountains</h1>
              </v-card-title>
               <v-card-text class="pt-1 subheading">
                <v-img
                  contain
                  class="right"
                  width="300"
                  :src="require('@/assets/images/500/skiing005.jpg')"
                ></v-img>
                Cross country skiing over the mountains. Experience the space and the meditative in crossing the mountains on skies. Enjoy the breaks with beautiful views sitting in our dug couches eating our lunch.<br />
                We spend the nights in mountains lodges enjoy the time together during the evening.
                First day we start training downhill skiing with cross country skies. Good to have knowledge when we get up on the mountains. You carry your own backpack with personal equipment during the tour. </v-card-text>
                <v-card-text>
                <p>We crossing a almost white landscape, not that steep as in the Alps and no trees  as you can see on the picture.  We use skies for cross country skiing, skies with steel edge and back country bindings. Depending on what you prefer we went over the tops, up and then downhill, maybe with nice telemark turns, or we went around the tops, not that much up and down.</p>
              </v-card-text>
                <v-card-text class="grey lighten-3 pb-1">
                  <p>We will stay one night at the mountain lodge at Helags mountain. Number three among the World's best summit hikes according to <a href="https://www.nationalgeographic.com/adventure/lists/hiking-backpacking/worlds-best-summit-hikes/#/helagsfjallet-mountain-sweden_91186_600x450.jpg">National Geographic.</a></p><p><i> "Sweden's highest peak south of the Arctic Circle, Helagsfjället, also simply called Helags, stands out above the surrounding peaks of the Scandinavian Mountains right on the Norway border."</i></p>

                  <p>Another highlight is the arctic fox in the area. They are very rare, but with hard work from some enthusiasts that have brought out food to them for many years, they are now slowly coming back. <a href="https://rewildingeurope.com/news/arctic-fox-safaris-in-sweden-helps-the-arctic-fox-while-making-business-sense/">Read more about the arctic fox project in the region</a></p>
                </v-card-text>
                <v-card-text>
                 The tour starts in Ljungdalen, the south port to the Jämtland mountains.
                <p>
                  Below you have all information you need, but if you still have some more questions, don't hesitate to contact us on
                  <a
                    href="mailto:info@naturguiden.se"
                  >info@naturguiden.se</a> or on +46 70 53 53 630.
                </p>
              </v-card-text>
              <v-flex class="grey lighten-3 pb-1">
              <v-card-title class="title pb-0">Join us on our four days trip 2022</v-card-title>
              <v-card-text>
                <b>Price: from 730 EUR (4 days/5 nights)</b>
              </v-card-text>
              <v-card-text class="pt-0">
                Everything included, accommodation in hostel and mountain lodge, normally two persons / room. But on some mountain lodges we might need to stay more people in each room. Sheets and towels are provided.
              </v-card-text>
              <v-list class="pt-1 grey lighten-3">
                  <v-list-tile class="list-height" v-for="item in packageDates" :key="item.date">
                    <v-list-tile-action>
                      <v-img contain height="16px" :src="require('@/assets/postbullets.png')"></v-img>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.date }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ item.level }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <v-card-title class="title pb-0">More days or other accommodation</v-card-title>
              <v-card-text>
                If you like to stay longer or arrive before, contact us we can help you arrange that.
              </v-card-text>
              </v-flex>
              <v-card-title class="title pb-0">A normal day on tour</v-card-title>
              <v-card-text class="pb-1">
                <p>We start with preparing breakfast together in the Mountain station kitchen. We also prepare something for lunch. Then we are ready for another day on skies. There are about 20 km between the stations/cabins. A perfect distance for most of us. Now and then we take a short break. Around lunch time we make a dug couch where we eat our lunch. If the weather is good,we take a longer break, enjoy the sun and the view. It will not get dark before eight, we have all day.</p>
                <p>In the evening we reach our next Mountain cabin. Time to get familiar and feel at home and then time for dinner. One night we stay at a Mountain station, here we will get dinner served. Other nights we stay in Mountain cabins, less fancy but maybe more genuine. Here we prepare all food together.</p>
              </v-card-text>

              <v-card-title class="title pb-0">Meeting point</v-card-title>
              <v-card-text>
                Normally we start our tours in Ljungdalen. A small village up in the mountains. South of Åre and close to the Norwegian border.
              </v-card-text>

              <v-card-title class="title pb-0">Get here</v-card-title>
              <v-card-text>
                You can get here in several different ways. We will help you with more details when we know from where you will travel. More information here. 
                <router-link to="/get-here">How to get here</router-link>
              </v-card-text>

              <v-card-title class="title pb-0">Time</v-card-title>
              <v-card-text>
                We meet you when you arrive to Ljungdalen
                <br />Last day: We find the most convenient way for you to go back.
              </v-card-text>

              <v-card-title class="title pb-0">Accommodation: Mountain stations and cabins</v-card-title>
              <v-card-text class="pb-1">
                <p>In the area there are a network with Mountain stations and Mountain cabins, about 20 km in-between. We will stay both on Mountain stations and Mountain cabins.The Mountain station are more like a good hostel, and they have electricity. You can get dinner served and you have a small shop.<br />
                The Mountain cabins are nice but simple accommodation. No electricity, you have to bring in (and also out) all water. Toilets in a separate building. But a pretty good kitchen, wood to heat the house and a lot of charm. Normally 4 person in each room, bunk beds. 
                
                We provide sheets and towels. But if you like, bring your sleeping bag</p>
              </v-card-text>

              <v-card-title class="title pb-0">Personal equipment</v-card-title>
              <v-card-text class="pb-1">
                <p>Clothing suitable for being active during wintertime. Maybe not same cloth as for alpine skies, might be to warm. Several layers are always good, then you can adapt. A warm jacket for the breaks, warm cloves and a cap covering your ears. Maybe also a ski mask if you have. And indoor shoes are very nice.</p>
                <p><b>Absolutely necessary:</b>Sun glasses and sun protection. A good backpack for all your cloth and equipment. You also need to carry your share of the food.
                </p>
              </v-card-text>

              <v-card-title class="title pb-0">Equipment included</v-card-title>
              <v-card-text>
                Skies and ski boots, Sheets and towels.
              </v-card-text>

              <v-flex class="grey lighten-3">
              <v-card-title class="title pb-0">Included in the price</v-card-title>
              <v-card-text class="pb-1">
                First day
                <br />Dinner, accommodation in Ljungdalen
                <br />Full days
                <br />Accommodation in Mountain station/cabin, Breakfast, lunch, dinner, guide, rent of equipment.
                <br />Last night
                <br />Accommodation and breakfast in Ljungdalen
                <p>
                  <br />
                  <b>Not included:</b> alcoholic drinks (and no place to buy either, except for 3,5% beer)
                </p>
              </v-card-text>
              </v-flex>
              <v-card-title class="title pb-0">Program: How a trip can look like</v-card-title>
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
                <div class="title">Cross Country Skiing</div>
                <div class="subheading">Open tour</div>
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

          <!-- Right side column - scheduled dates  -->
          <v-flex xl12 lg12 md12 sm6 xs12>
            <v-card>
              <v-card-title class="d-block grey lighten-1">
                <div class="title">Scheduled dates</div>
                <div class="subheading">open groups 2022</div>
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
            <booking-open :items="packageDates"></booking-open>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </AdventureMenu>
</template>


<script>
import AdventureMenu from "@/components/AdventureMenu.vue";
import BookingOpen from "@/components/BookingOpen.vue";

export default {
  components: {
    AdventureMenu,
    BookingOpen
  },
  data() {
    return {
      packageItems: [
        { type: "Season:", content: "March - April" },
        { type: "Days:", content: "4 days/5 nights" },
        { type: "Price:", content: "730 EUR"},
        { type: "Meeting point:", content: "Ljungdalen" },
        { type: "Lodging:", content: "Mountain Lodge" }
      ],

      packageDates: [
        { date: "29 March - 3 April:", level: "Cross country skiing" }
      ],

      days: [
        {
          day: "Day 0",
          title: "",
          text: `Travel to Ljungdalen.<br />
          Accommodation in Ljungdalen. Dinner and briefing about the tour. Then time for all preparation and sharing food and other equipment among us.<br />
          Clothes and other belongings not needed on the hike can be left here until you get back.`
        },
        {
          day: "Day I",
          title: "",
          text: "After breakfast buffet but before we head off for the mountains, we prepare ourselves big lunch packages. The first stage is up to the ski slope. Before we start we need some exercise in going downhill on cross country skies. It is a little tricky, but with the right technique it becomes much easier.<br /> After exercising we let the ski lift pull us up towards the summit once again. This time we should not go downhill again but continue towards the very top. When passing it you get marvellous views, mountains everywhere. We will see the dramatic mountain Helags, the target for tomorrow, in front of us. Instead we turn more south towards Mountain cabin Fältjägaren, 14 km to go. It starts with a small slope, your practise will come handy. We take some breaks along the way and reach Fältjägaren in the late afternoon. Fältjägaren is a small lodge with two big rooms. It has no washing facilities and the toilet is in a separate building. Together, we prepare dinner and eat to just relax afterwards. You will probably sleep well after this long day."
        },
        {
          day: "Day II",
          title: "",
          text: `Unlike yesterday when we ski far from the ordinary path, we have a marked path to follow today towards Helags Mountain station, 11 km away. If the weather is good and the force is with us we will climb the mountain. A good approach up the mountain is half way to the station. With or without skies depending on the situation.<br /> We take af course several breaks along the way and reach Helags in the afternoon. Before we leave to our lodge we will have time to relax. Tonight we will have the dinner served, but first some time in the warming and relaxing sauna.` 
        },
        {
          day: "Day III",
          title: "",
          text: `This day we heading towards Gåsen Mountain cabin, 18 km. Also today after a marked path. We are now more used to cross country skiing and the mountains. Everyone can take this day in their own pace, just follow the path will lead you to the cabin. If we are lucky we might see the native arctic fox. We passing not to far from where they been fed. <br /> This day ends with a long uphill path, a good recommendation is to take a break half way, even thou you are almost there.
          Gåsen is a much bigger than Fältjägaren with three separate houses. But the standard is about the same. Most likely we stay in four beds room. We make dinner together and decide later about the path for tomorrow.`
        },
        {
          day: "Day IV",
          title: "",
          text: `This day we get off the marked tracks again, 25 km, around the mountain Härjångsfjället and down into a valley. Slightly downhill most of the way. We enjoy the day and taking some nice breaks, no hurry, the sun is up to after eight o clock. In the evening we are back at the hostel. A welcome shower or maybe a visit to the small indoor swimming pool is waiting. A good dinner ends a fantastic tour.`
        },
        {
          day: "Last day",
          title: "",
          text: `Last day, time to relax and to see more of Ljungdalen. Visit "Hemslöjden" where you can see or buy handicraft made by people in the village.
          <br />
          The bus will bring you back towards Östersund/Stockholm around 15:00`
        }
      ]
    };
  }
};
</script>
