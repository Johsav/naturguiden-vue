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
                <div>Visit the Swedish mountains during the best time of the year, the fifth season: still winter, but with long lasting sunshine days. Sun factor 20 is needed. We cross the snowy mountains under a blue sky, take our breaks in dug couches of snow.</div>
                <div>Take several days on back country skies between different mountain lodges. Or stay in our mountain lodge doing day trips on skies with option for a lot of other winter activities. Winter fishing, snow shoe walking, alpine skiing or just run down the slope on a sledge.</div>
                <div>We living with Helags just around the corner. Number three among the World's best summit hikes according to National Geographic. On our cross country tours we will for sure visit Helags mountain lodge. With the possibility to reach the summit for those that have the energy to do that.</div>
                <div>We are in the home of the native Sami people. In April they moving the reindeers from the winter pasture in the forest up to the mountains It might be possible that we see those reindeers on their way to the mountains. We might even see the rare native arctic fox.</div>
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
                <div>1. Spend days in our mountain lodge. Use the day doing different winter activities such as cross country skiing, winter fishing, alpine skiing or snow shoe walking. By yourself or together with a guide. You have all information below on this page.</div>
                <div>
                  2. A open guided tour on back country skies between the mountain lodges up among the mountains. Feel free to join.
                  <router-link
                    to="/adventures/skiing/weekend"
                  >Read more about our open ski tour here.</router-link>
                </div>
                <div>
                  3. If you are a family or a couple of friends, a private ski tour might be perfect for you. You can chose any date, and tail the tour after your preferences.
                  <router-link
                    to="/adventures/skiing/private"
                  >Read more about your own ski tour here.</router-link>
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
                <h1>Winter holyday with a variety of activities</h1>
              </v-card-title>
              <v-card-text>
                <p>Days with all kind of winter outdoor activities. Welcome to our cabin located almost up on the mountain, close to the small village Ljungdalen in the county Härjedalen. With 250 meter to the road you have to ski or walk the last part. But when you are there, the winter adventures begins just outside the front door. Put on your skies and head of in any direction. Or go down the slope just outside on a sledge.</p>
                <p>It's you vacation and it's your choice. Stay close to the cabin, dig a nice couch in the snow. Enjoy the sun and all the activities you can do here such as snow shoe walk or just sitting in the sun. Making a great slope for the children or yourself with tunnels and jumps and go for it on a sledge.</p>
                <p>Or take a daytrip on cross country skies out onto the mountain. Maybe to some of the lake for winter fishing. Or to reach the summit on some of the mountains to get the view.</p>
                <p>With cross country skiing you can go everywhere, as it is to much snow for walking, you use the skies to get where you are going. There are also prepared ski tracks, if you don't want to do your own tracks. Apart from cross country skiing, there are several opportunities for alpine skiing, the closest only two km away.</p>
                <p>It's very popular among the local families to meet somewhere out in the nature. Spend time together while fishing, make the lunch over open fire, digging snow caves with the children or gliding down a slope on anything that's glide. You can choose a place all by yourself, or some place where you see other groups in distance.</p>
                <p></p>
                <p>
                  If you want more adventures we can help you with sleeping in a snow cave, climbing some of the peaks and ski down and maybe ice climbing.
                  <b>How does your adventure looks like?</b>
                </p>
              </v-card-text>
              <v-card-text class="grey lighten-3 pb-1">
                <p>You will for sure see Helags, the highest far highest peak in this part of Sweden, only 15 km away. It's number three among the World's best summit hikes according to National Geographic.</p>

                <!--
                    <router-link to="/article/nationalgeographic">National Geographic </router-link> 
                    
                    <router-link :to="require('html-loader!@/assets/article/NG.html')"> XXXX
                    </router-link>
                -->

                <p>
                  <i>"Sweden's highest peak south of the Arctic Circle, Helagsfjället, also simply called Helags, stands out above the surrounding peaks of the Scandinavian Mountains right on the Norway border."</i>
                </p>
                <P>It's possible to ski to Helags mountain lodge for a nice lunch and the go back in a long day. Or you can do this as a two day trip with the possibility to do the summit as well.</P>
                <p>Another highlight is the arctic fox in the area. They are very rare, but with hard work from some enthusiasts that have brought out food to them for many years, they are now slowly coming back. Read more about the arctic fox project in the region</p>
              </v-card-text>
              <v-card-text>
                <p>
                  Below you have all information you need, but if you still have some more questions, don't hesitate to contact us on
                  <a
                    href="mailto:info@naturguiden.se"
                  >info@naturguiden.se</a> or on +46 70 53 53 630.
                </p>
              </v-card-text>
              <v-flex class="grey lighten-3 pb-1">
                <v-card-title class="title pb-0">Winter adventures days</v-card-title>
                <v-card-text>
                  <b>Price: from 295 EUR (4 days/3 nights)</b>
                </v-card-text>
                <v-card-text class="pt-0">
                  Accommodation in double room. Breakfast, lunch or lunch package and dinner.
                  <br />We have skies for rent. And snow shoes, sledges etc. for you to borrow.
                </v-card-text>
                <v-card-title class="title pb-0">More or less days</v-card-title>
                <v-card-text>If you like to stay longer or shorter, or if you are a family with children, contact us for prices and more information.</v-card-text>
              </v-flex>
              <v-card-title class="title pb-0">A normal day</v-card-title>
              <v-card-text class="pb-1">
                <p>
                  You get breakfast in the morning, and if you stay away the whole day, you can do your own lunch packages as well. At lunchtime maybe lunch in the kitchen, just outside in the sun, or somewhere on the mountain.
                  <br />Different outdoor activities during the day. Either yourself or with a guide. There are always someone that can help you with practical things such as provide you with snow shoes. Show the way to the lake, arrange with payment for fishing, bring out equipment for barbeque up in the mountain and similar.
                </p>
                <p>In the evening dinner and time to relax in front of the fire place, or maybe a nice sauna. A visit to Ljungdalen is also nice, a real village with real people, not only tourist. It's small, but have everything you need. A supermarket, some restaurants, a shop with local handcraft and also a small indoor swimming pool close to the school.</p>
              </v-card-text>

              <v-card-title class="title pb-0">Meeting point</v-card-title>
              <v-card-text>We meet you in Ljungdalen. A small village up in the mountains. South of Åre and close to the Norwegian border. Then we drive about 5 km to the cabin.</v-card-text>

              <v-card-title class="title pb-0">Get here</v-card-title>
              <v-card-text>
                You can get here in several different ways. We will help you with more details when we know from where you will travel. More information here.
                <router-link to="/get-here">How to get here</router-link>
              </v-card-text>

              <v-card-title class="title pb-0">Time</v-card-title>
              <v-card-text>We meet you when you arrive to Ljungdalen</v-card-text>

              <v-card-title class="title pb-0">Personal equipment</v-card-title>
              <v-card-text class="pb-1">
                <p>Cloth for outdoor winter activities. Several layers are always good, then you can adapt. A warm jacket for the breaks, warm cloves (two pairs if one pair get wet) and a cap covering your ears. Maybe also a ski mask if you have.</p>
                <p>If you want to stay in tent or snow cave also bring a warm sleeping bag and a camping mattress.</p>
                <p>
                  <b>Absolutely necessary:</b>Sun glasses and sun protection. A good backpack for all your cloth and equipment. You also need to carry your share of the food.
                </p>
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
                <div class="title">Winter outdoor activities</div>
                <div class="subheading">Private tour</div>
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
          <!--    <v-flex xl12 lg12 md12 sm6 xs12>
            <v-card>
              <v-card-title class="d-block grey lighten-1">Important Information</v-card-title>
              <v-card-text>It's very important ....</v-card-text>
            </v-card>
          </v-flex>
          -->
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
        { type: "Price:", content: "295 EUR (4 days/3 nights)" },
        { type: "Meeting point:", content: "Ljungdalen" },
        { type: "Lodging:", content: "Mountain Lodge" }
      ],

      packageDates: [{ date: "2 - 9 August: Hiking week", level: "" }],

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
          text:
            "Breakfast in the morning and then we head off. First through the    village and then up into the forest. We follow the old pilgrim path toward Trondheim in Norway. After 4 km we get up above the tree level, here you get the first sight of Helags.<br />           A little further and then it's time for our first lunch break. With a great view over the lake below and the sound from the creek we start cooking.<br /> Later in the afternoon we have passed our first mountains and now we have Helags in front of us. We find a nice spot close to some water where we put up our tents. Time for cooking the dinner and plans for tomorrow."
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
