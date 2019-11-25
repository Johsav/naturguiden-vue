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
                <div>1. Spend days in our mountain lodge. Use the day doing different winter activities such as cross country skiing, winter fishing, alpine skiing or snow shoe walking. Go yourself or together with a guide. You have all information below on this page.</div>
                <div>2. A open guided tour on back country skies between the mountain lodges up among the mountains. Feel free to join. <router-link to="/adventures/skiing/weekend"> Read more about our open ski tour here.</router-link></div>
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
                <h1>Winter holyday with a variety of activities</h1>
              </v-card-title>
              <v-card-text>
                <p>Days with winter outdoor activities. Welcome to our cabin located almost up on the mountain, close to the small village Ljungdalen in the county Härjedalen. Hiking the Swedish mountains your own way. Sleep in tents or in the mountain lodges. Walk on the path or find your own way between the mountains. Decide your exact route before or take one day at a time, decide where to go when you walk. The choices are yours, we help you make it happen. Taking care of all preparations and with our good knowledge of the region help you find the best options. Totally free to experience the wild in your way.</p>
              </v-card-text>
                <v-card-text class="grey lighten-3 pb-1">
                  <p>We will probably do a summit hike to Helags. Number three among the World's best summit hikes according to National Geographic,


<!--
                    <router-link to="/article/nationalgeographic">National Geographic </router-link> 
                    
                    <router-link :to="require('html-loader!@/assets/article/NG.html')"> XXXX
                    </router-link>
-->                    
                    
                    "Sweden's highest peak south of the Arctic Circle, Helagsfjället, also simply called Helags, stands out above the surrounding peaks of the Scandinavian Mountains right on the Norway border."</p>
                  <p>On Helags there is also a glacier that we will visit and maybe we will visit the mountain Sylarna as well.</p>
                  <p>Another highlight is the arctic fox in the area. They are very rare, but with hard work from some enthusiasts that have brought out food to them for many years, they are now slowly coming back. Read more about the arctic fox project in the region </p>
                </v-card-text>
                <v-card-text>
                  While hiking in the Swedish mountains we stay above tree level, the area where no trees can grow. It is still green with grass and flowers. We are exposed to the force of nature with only tents for shelter during the nights that never get dark. Or we can chose to stay some nights in the mountain lodges. We wash ourselves outdoors in the cold and crystal clear water of the rivers or we take a nice shower in the lodge. We prepare lunch close to a small river or eat in the mountain lodge. A tour just by yourself, or a tour meeting other hikers now and then.
                </p>
                <p>
                 The tour starts in Ljungdalen, the south port to the Jämtland mountains.</p> 
                <p>
                  Below you have all information you need, but if you still have some more questions, don't hesitate to contact us on
                  <a
                    href="mailto:info@naturguiden.se"
                  >info@naturguiden.se</a> or on +46 70 53 53 630.
                </p>
              </v-card-text>
              <v-flex class="grey lighten-3 pb-1">
              <v-card-title class="title pb-0">Book your own hiking tour</v-card-title>
              <v-card-text>
                <b>Price: from 425 EUR (4 days/3 nights)</b>
              </v-card-text>
              <v-card-text class="pt-0">
                Everything included, accommodation in tent, normally two persons / tent.
                <br />You need to bring a sleeping bag and camping mattress, or rent them for 30 EUR.
              </v-card-text>
                <v-card-title class="title pb-0">More days or other accommodation</v-card-title>
              <v-card-text>
                If you like to stay longer than 4 days or sleep one or more nights in a mountain lodge contact us for price details and more information.
              </v-card-text>
              </v-flex>
              <v-card-title class="title pb-0">A normal day in the mountains</v-card-title>
              <v-card-text class="pb-1">
                <p>We start with preparing breakfast on the camping stove. Water we get from the crystal clear creek nearby. Then we put down our tents and start our journey. When we walk over a creek we take a short stop to drink. Now and then we take a short break. Around lunch time we take a longer break close to a river or creek, preparing lunch on our camping stove.</p>
                <p>In the evening we find a nice place for our tents. Making diner over open fire or on the camping stove and wash ourself in the river or in a lake (yes, it is probably very cold). We will probably meet reindeer and lemmings, a lot of different birds, and we will try to spot the arctic fox in the area.</p>
                <p>Some of the days we stay two nights at the same place and from there start a summit hike to some of the peaks, e.g. Helags. We will also try to catch fish in the small lakes and fry them over open fire.</p>
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

              <v-card-title class="title pb-0">Accommodation: Tents or in a mountain Lodge</v-card-title>
              <v-card-text class="pb-1">
                <p>You will sleep in tent close to the creek or the lake. Normally two persons in each tent.
                You need to bring a sleeping bag and camping mattress, or rent them for 30 EUR.
                Or you can choose to stay one or more nights in a mountain lodge, normally in shared rooms with others. You then pay for that night yourself.</p>
              </v-card-text>

              <v-card-title class="title pb-0">Personal equipment</v-card-title>
              <v-card-text class="pb-1">
                <p>Hiking boots, water resistant and suitable clothes, backpack for hiking, sleeping bag, sleeping pad, cap and gloves, sandals to wear when crossing rivers.</p>
                <p>Good to have but not necessary: Hat for the sun, rain or mosquitos, swimwear, dry bag for your mobile/camera, sun glasses.</p>
              </v-card-text>

              <v-card-title class="title pb-0">Equipment included</v-card-title>
              <v-card-text>
                Tents, camping stove, maps.
                <br />Aside from your own equipment, you also need to carry your share of food and tent or camping stove.
              </v-card-text>

              <v-flex class="grey lighten-3">
              <v-card-title class="title pb-0">Included in the price</v-card-title>
              <v-card-text class="pb-1">
                Day I
                <br />Dinner, accommodation in Ljungdalen
                <br />Full days
                <br />Breakfast, lunch, dinner, guide, rent of equipment
                <br />Last night
                <br />Accommodation and breakfast in Ljungdalen
                <p>
                  <br />
                  <b>Not included:</b> alcoholic drinks.
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
                <div class="title">Winter Holiday</div>
                <div class="subheading"></div>
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
        { type: "Season:", content: "March - April" },
        { type: "Days:", content: "Chose any" },
        { type: "Price:", content: "80 EUR/day"},
        { type: "Meeting point:", content: "Ljungdalen" },
        { type: "Lodging:", content: "Mountain Lodge" }
      ],

      packageDates: [
        { date: "2 - 9 August: Hiking week", level: "" }
      ],

      days: [
        {
          day: "Day I",
          title: "",
          text: `Travel to Ljungdalen.<br />
          Accommodation in Ljungdalen. Dinner and briefing about the tour. Then time for all preparation and sharing food and other equipment among us.<br />
          Clothes and other belongings not needed on the hike can be left here until you get back.`
        },
        {
          day: "Day II",
          title: "",
          text: "Breakfast in the morning and then we head off. First through the    village and then up into the forest. We follow the old pilgrim path toward Trondheim in Norway. After 4 km we get up above the tree level, here you get the first sight of Helags.<br />           A little further and then it's time for our first lunch break. With a great view over the lake below and the sound from the creek we start cooking.<br /> Later in the afternoon we have passed our first mountains and now we have Helags in front of us. We find a nice spot close to some water where we put up our tents. Time for cooking the dinner and plans for tomorrow."
        },
        {
          day: "Days on the mountains",
          title: "",
          text: `The high peaks of Sylarna and Helags are in front of us but how should we climb them? What is the weather forecast? How far should we walk today? Is there any reindeer down in the valley to see? We continue taking one day at a time, stop and drink the crystal clear water from a stream, stretch out in the sun during lunch and take a bath in cold water in the river in the evening. Maybe we decide to walk the whole night, in July it never gets dark.
          <br />
          These are magnificent but hard days. High mountains to climb, fantastic views to enjoy and natural peacefulness without any other people.`
        },
        {
          day: "Last hiking day",
          title: "",
          text: `The last stage is walking down towards Ljungdalen– an easy path where long parts are downhill. The hiking starts right after breakfast and after lunchtime we reach Ljungdalen. Now it is time to get a real shower at the hostel, or maybe a sauna. In the evening we get dinner at the local restaurant. `
        },
        {
          day: "Last day",
          title: "",
          text: `Last day, time to relax and to see more of Ljungdalen. Visit the old "Gammelgården" were you can get waffle with cloudberry jam. Or "Hemslöjden" where you can see or buy handicraft made by people in the village.
          <br />
          The bus will bring you back towards Östersund/Stockholm around 15:00`
        }
      ]
    };
  }
};
</script>
