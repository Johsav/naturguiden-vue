<template>
  <AdventureMenu>
    <v-layout row wrap grid-list-md class="pt-2">
      <v-flex xs12 sm12 md8 lg9 xl9>
        <v-layout row wrap grid-list-md class="pt-2">
          <v-flex xs12 sm12 md8 lg8 xl8>
            <!-- First Card - general info  -->
            <v-card class="grey lighten-3">
              <v-card-title class="pt-1 pb-0">
                <h1>Hiking in the  Swedish mountains</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <v-img
                  contain
                  class="right"
                  width="100"
                  :src="require('@/assets/images/Logo_RGB.png')"
                ></v-img>
                <div>
                  Leave the civilisation for a couple of days. Join our hiking tours in the beautiful mountains of Sweden. Time for recovery and recreation, the most beautiful trails, what to eat and where to sleep - everything is arranged for you. Leave the planning to us and just enjoy.
                </div>
                <div>On our hike we will most likely visit Helags. Number three among the World's best summit hikes according to National Geographic. Visit the glacier and reach the summit with a stunning view in all directions</div>
                <div>We are in the home of the native Sami people. Walking their trails, passing their summer homes up in the mountains. And for sure we will meet their reindeers. We might even see the occasional native arctic fox.
                </div>
                <div>
                  The freedom and space in the remote mountains are good for our body and soul.
                  <b>Join us on our long tour or book your own private tour</b>
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
                <div>On our tours we are maximum ten guests. Our open tours are open for anyone and you are very welcome to follow. But if you are a family or a couple of friends, maybe you rather want a private tour. You can chose any date, and we are absolute free to adopt the tour after your preferences. We also have a 
                <router-link to="adventure/lodge"> mountain lodge </router-link> on the mountain where you can stay. Use the day hiking, fishing, bird watching or what you prefer, with or without guide. </div>

                <div>
                  <router-link
                    to="/adventures/hiking/private"
                  >Read more about our private hiking tour here.</router-link>
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
                <h1>Eight days in the wild</h1>
              </v-card-title>
              <v-card-text>
                <p>Eight adventurous days filled with mountain peak tours, glacier hiking and magnificent nature! The details are not set, we decide from day to day how the trip will develop. We bring our own tents (which will be provided) and all the food we need. We are totally free to experience the wild, outside all regular tracks and mountain lodges.</p>

                <p>But for sure we will do a summit hike to Helags. Number three among the World's best summit hikes according to National Geographic "Sweden's highest peak south of the Arctic Circle, Helagsfjället, also simply called Helags, stands out above the surrounding peaks of the Scandinavian Mountains right on the Norway border."

                On Helags there is also a glacier that we will visit and maybe we will visit the mountain Sylarna as well

                Another highlight is the arctic fox in the area. They are very rare, but with hard work from some enthusiasts that have brought out food to them for many years, they are now starting to come back to the area. Read more about the arctic fox project in the region </p>
                <p>
                  While hiking in the Swedish mountains we stay above tree level, the area where no trees can grow. It is still green with grass and flowers. We are exposed to the force of nature with only tents for shelter during the nights that never get dark. We wash ourselves outdoors in the cold and crystal clear water of the rivers. We prepare lunch close to a small river. Probably not meeting any other people, only the reindeer and lemmings.
                </p>
                <p>
                 The tour starts in Ljungdalen, the south port to the Jämtland mountains.</p> 
                <p>
                  If you come together with your friends or family and you are 4-6 persons or more consider the options for your own private tour.
                  <router-link to="/adventures/hiking/private">Read more here..</router-link>
                </p>
                <p>
                  Below you have all information you need, but if you still have some more questions, don't hesitate to contact us on
                  <a
                    href="mailto:info@naturguiden.se"
                  >info@naturguiden.se</a> or on +46 70 53 53 630.
                </p>
              </v-card-text>
              <v-card-title class="title pb-0">Join us on our eight days trip 2020</v-card-title>
              <v-card-text>
                <b>Price: 695 EUR</b>
              </v-card-text>
              <v-card-text class="pt-0">
                Everything included, accommodation in tent, normally two persons / tent.
                <br />You need to bring a sleeping bag and camping mattress, or rent them for 30 EUR.
                <v-list class="pt-1">
                  <v-list-tile class="list-height" v-for="item in packageDates">
                    <v-list-tile-action>
                      <v-img contain height="16px" :src="require('@/assets/postbullets.png')"></v-img>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.date }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ item.level }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>If you interest to come some other week do not hesitate to contact us. We will do our best to help you.
              </v-card-text>
              <v-card-title class="title pb-0">A normal day in the mountains</v-card-title>
              <v-card-text>
                <p>We start with preparing breakfast on the camping stove. Water we get from the crystal clear creek nearby. Then we put down our tents and start our journey. When we walk over a creek we take a short stop to drink. Now and then we take a short break. Around lunch time we take a longer break close to a river or creek, preparing lunch on our camping stove.</p>
                <p>In the evening we find a nice place for our tents. Making diner over open fire or on the camping stove and wash ourself in the river or in a lake (yes, it is probably very cold). We will probably meet reindeer and lemmings, a lot of different birds, and we will try to g spot the arctic fox in the area.</p>
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

              <v-card-title class="title pb-0">Accommodation: Tents</v-card-title>
              <v-card-text>
                <p>You will sleep in a tent close to the creek or the lake. Normally two persons in each tent.<br />
                You need to bring a sleeping bag and camping mattress. Or rent them for 30 EUR.<br />
                We prepare the meals together over open fire or on a camping stove. All food is provided and included in the price. </p>
              </v-card-text>

              <v-card-title class="title pb-0">Personal equipment</v-card-title>
              <v-card-text>
                <p>Hiking boots, water resistant and suitable clothes, backpack for hiking, sleeping bag, sleeping pad, cap and gloves, sandals to wear when crossing rivers.</p>
                <p>Good to have but not necessary: Hat for the sun, rain or mosquitos, swimwear, dry bag for your mobile/camera, sun glasses.</p>
              </v-card-text>

              <v-card-title class="title pb-0">Equipment included</v-card-title>
              <v-card-text>
                Tents, camping stove, maps.
                <br />Aside from your own equipment, you also need to carry your share of food and tent or camping stove.
              </v-card-text>

              <v-card-title class="title pb-0">Included in the price</v-card-title>
              <v-card-text>
                Day I
                <br />Dinner, accommodation in Ljungdalen
                <br />Day II-VII
                <br />Breakfast, lunch, dinner, guide, rent of equipment
                <br />Day IV
                <br />Breakfast, lunch, guide,rent of equipment, accommodation in Ljungdalen
                <br />Day IX
                <br />Breakfast
                <p>
                  <br />
                  <b>Not included:</b> alcoholic drinks.
                </p>
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
                <div class="title">Hiking</div>
                <div class="subheading">Week tour</div>
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
        { type: "Season:", content: "June - September" },
        { type: "Days:", content: "8 days/8 nights" },
        { type: "Price:", content: "695 EUR"},
        { type: "Meeting point:", content: "Ljungdalen" },
        { type: "Lodging:", content: "Tent" }
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
          day: "Day III - VII",
          title: "",
          text: `The high peaks of Sylarna and Helags are in front of us but how should we climb them? What is the weather forecast? How far should we walk today? Is there any reindeer down in the valley to see? We continue taking one day at a time, stop and drink the crystal clear water from a stream, stretch out in the sun during lunch and take a bath in cold water in the river in the evening. Maybe we decide to walk the whole night, in July it never gets dark.
          <br />
          These are magnificent but hard days. High mountains to climb, fantastic views to enjoy and natural peacefulness without any other people.`
        },
        {
          day: "Day VIII",
          title: "",
          text: `The last stage is walking down towards Ljungdalen– an easy path where long parts are downhill. The hiking starts right after breakfast and after lunchtime we reach Ljungdalen. Now it is time to get a real shower at the hostel, or maybe a sauna. In the evening we get dinner at the local restaurant. `
        },
        {
          day: "Day IX",
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
