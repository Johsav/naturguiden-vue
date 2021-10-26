<template>
  <div>
    <!--  <v-container fluid grid-list-md style="background-color: #00ff00" class="no-padding-bottom">
      <v-card>
        <v-tabs fixed-tabs grow>
          <v-tab v-for="item in packages" :key="item.link" :to="item.link" replace>{{item.title}}</v-tab>
        </v-tabs>
      </v-card>
    </v-container>-->

    <v-container fluid grid-list-md>
      <v-layout row wrap grid-list-md class="pt-2">
        <v-flex xs12 sm12 md8 lg8 xl8>
          <v-card class="text-xs-left">
            <v-card-title class="pt-1 pb-0">
                <h1>All Our Adventure tours</h1>
              </v-card-title>
              
            <v-card-text class="mb-3 subheading">
              Join us on one of our tours. Or do as family Meyer that booked their own long weekend with back country skiing and lunch made outdoor in the mountain over open fire. One day with downhill skiing, one night in snow bivac and a lot of other activities, in the snow.
              <br />The most fun was probably building the slope for the sleigh with a tunnel in the snow.
            </v-card-text>
          </v-card>
          <v-flex v-for="item in packages" :key="item.link">
            <v-card :to="item.link">
              <v-img class="white--text display-1" height="300px" :src="getImgUrl(item.imageSrc)">
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>
              <v-card-text class="subheading">{{item.text}}</v-card-text>
            </v-card>
          </v-flex>
        </v-flex>

        <v-flex md4 lg4 xl4>
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

           <!-- Right side column - Booking  -->
          <v-flex xl12 lg12 md12 sm6 xs12>
            <booking-open :items="packageDates"></booking-open>

          </v-flex>


        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BookingOpen from "@/components/BookingOpen.vue";

export default {
  components: {
    BookingOpen  
  },
  
  methods: {
    getImgUrl(img) {
      return require("@/assets/images/" + img);
    }
  },
  data() {
    return {
      drawer: null,
      packageDates: [
        { date: "27 - 30 January:", level: "Skating Weekend, good group" },
        { date: "3 - 6 February:", level: "Skating Weekend, normal group" },
        { date: "10 - 13 February:", level: "Skating Weekend, good group" },
        { date: "17 - 20 February:", level: "Skating Weekend, normal group" },
        { date: "25 - 28 February:", level: "Skating Weekend, good and normal skaters - two groups" },
        { date: "29 March - 3 April:", level: "Cross Country skiing" },
        { date: "23 - 26 June:", level: "Kayak weekend" },
        { date: "1 - 8 August:", level: "Hiking week" },
        { date: "25 - 28 August:", level: "Kayak weekend" }
      ],
      packages: [
        {
          title: "Ice-skating - weekend tour",
          link: "/adventures/skating/weekend",
          imageSrc: "1400/Skating_1413_3.jpg",
          text: `It's great adventure, it's fun, it's skating on natural ice. Experience some amazing skating adventures in Sweden. The unspoiled countryside and the huge expanse of glossy ice – everything is here waiting for you. Sweden is one of the best countries for Nordic skating. The variety of lakes and the Baltic sea gives us a lot of possibilities for ice-skating. Join our all inclusive guided skating tour. It's open for anyone and you are very welcome to follow.`
        },
        {
          title: "Ice-skating - private tour",
          link: "/adventures/skating/private",
          imageSrc: "1400/Skating_1413_2.jpg",
          text: `Enjoy ice skating on natural ice together with your friends or family. Skating on the lakes, the canals or maybe even on the Baltic sea. Fast and long or nice and slow, it's all your choice. \nAlways with a nice lunch break on some island and maybe a barbeque over open fire in the afternoon. We adapt the tour after your preferences. When booking your own private tour you can come any date and stay as long as you like.`
        },
        {
          title: "Kayak - weekend tours",
          link: "/adventures/kayak/weekend",
          imageSrc: "1400/kayak_1413_1.jpg",
          text: `Join us on our Kayak tours in the beautiful archipelago of the Baltic sea. Between islands and skerries, out in the open sea and in seduced caves. There are thousands of islands, most of them unsettled. At lunchtime we make a break on some island, cook a meal, maybe take a swim. In the evenings we camp on another island, making dinner over open fire. You are welcome to join our all inclusive guided kayak tours.`
        },
        {
          title: "Kayak - private tour",
          link: "/adventures/kayak/private",
          imageSrc: "1400/kayak_1413_3.jpg",
          text: `Explore the Swedish archipelago in a kayak together with friends or family. Enjoy all the islands and sherries. We stay away from civilisation, bring all food and water we need. Find our way among the islands and stop for lunch when we feel for it. In the evening we find a good place for wild camping, cooking dinner over open fire. When booking your own private tour you can come any date and stay as long as you like.`
        },
        {
          title: "Hiking - 8 days in the wild",
          link: "/adventures/hiking/eightdays",
          imageSrc: "1400/hiking_1413_5.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges. Join us, exploring the mountains on our own.`
        },
        {
          title: "Hiking - private tour",
          link: "/adventures/hiking/private",
          imageSrc: "1400/hiking_1413_3.jpg",
          text: `Leave the civilisation for a couple of days. A hiking tours in the beautiful mountains of Sweden together with friends or family. Time for recovery and recreation, the most beautiful trails, what to eat and where to sleep - everything is arranged for you. Leave the planning to us and just enjoy.`
        },
        {
          title: "Cross country skiing - open tour",
          link: "/adventures/skiing/weekend",
          imageSrc: "1400/skiing_1413_1.jpg",
          text: `Cross country skiing in the Swedish mountains.  Experience the space and the meditative in crossing the mountains on skies. Enjoy the breaks with beautiful views sitting in our dug couches eating our lunch. Best season is March and April, best place to be this time of the year with long lasting days and a lot of snow. Join our open four days tour when we ski between mountain lodges in Jämtland`
        },
        {
          title: "Cross country skiing - private tour",
          link: "/adventures/skiing/private",
          imageSrc: "1400/skiing_1413_3.jpg",
          text: `Your own tour with friends or family with cross country skiing over the mountains. As much adventures as you like, we tailor the tour after your preferences. Stay all nights in the mountain stations were we have electricity and warm showers. Or spend the nights in snow cave or tent. Maybe we take a detour to try to see the rare artic fox. Or if you travel last part of April we might meet the Sami people moving their Reindeers up to their summer pasture`
        },
        {
          title: "Cross country skiing - with winter adventures",
          link: "/adventures/skiing/adventures",
          imageSrc: "1400/skiing_1413_4.jpg",
          text: `Enjoy the Swedish mountains in winter. Days with a lot of great outdoor winter activities. Different activities each day or several days on cross country skiing between mountain cabins, the choice are yours. Our base camp is a mountain lodge located on the mountain, some hundred meters from closest road. Explore by your self or join an arranged tour.`
        }
      ]
    };
  }
};

</script>

<style scoped>
.no-padding-right {
  padding-right: 0;
}
.no-padding {
  padding: 0;
}
.no-padding-bottom {
  padding-bottom: 0;
}
</style>


