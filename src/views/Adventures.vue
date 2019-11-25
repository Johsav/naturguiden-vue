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
              <v-img class="white--text display-1" height="200px" :src="getImgUrl(item.imageSrc)">
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

          <v-card>
            <v-card-title class="d-block grey lighten-1">BOOKNING</v-card-title>
            <v-card-text>
              <div id="bokun-w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad">Loading...</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import LeftSideColumn from "../components/LeftSideColumn";
//import { nbind } from 'q';
//import Bokun from "../components/Bokun/";

export default {
  components: {
    LeftSideColumn
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
        { date: "23 - 26 January:", level: "Skating Weekend, normal group" },
        { date: "30 Jan - 2 Febr:", level: "Skating Weekend, good group" },
        { date: "6 - 9 February:", level: "Skating Weekend, normal group" },
        { date: "13 - 16 February:", level: "Skating Weekend, good group" },
        {
          date: "20 - 23 February:",
          level: "Skating Weekend, good and normal skaters - two groups"
        },
        { date: "27 Febr - 1 March:", level: "Skating Weekend, normal group" },

        { date: "6 - 11 April:", level: "Winter adventure week" },
        { date: "25 - 28 June:", level: "Kayak weekend" },
        { date: "2 - 9 August:", level: "Hiking 8 days" },
        { date: "20 - 23 August:", level: "Kayak weekend" }
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
          imageSrc: "1400/hiking_1413_4.jpg",
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
          title: "Back country skiing - with winter adventures",
          link: "/adventures/skiing/adventures",
          imageSrc: "1400/hiking_1413_4.jpg",
          text: `Enjoy the Swedish  mountains in winter. Days with a lot of great outdoor winter activities. Different activities each day or several days on cross country skiing between mountain cabins, the choice are yours. Our base camp is a mountain lodge located on the mountain, some hundred meters from closest road. Explore by your self or join an arranged tour.`
        }
      ]
    };
  }
};

//Bokun script
var w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad;
(function(d, t) {
  var host = "widgets.bokun.io";
  var frameUrl =
    "https://" +
    host +
    "/widgets/32023?bookingChannelUUID=3ccd59a6-631f-4273-a87f-8899f0037f8f&amp;activityId=86253&amp;lang=en&amp;ccy=SEK&amp;hash=w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad";
  var s = d.createElement(t),
    options = {
      host: host,
      frameUrl: frameUrl,
      widgetHash: "w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad",
      autoResize: true,
      height: "",
      width: "100%",
      minHeight: 0,
      async: true,
      ssl: true,
      affiliateTrackingCode: "",
      transientSession: true,
      cookieLifetime: 43200
    };
  s.src = "https://" + host + "/assets/javascripts/widgets/embedder.js";
  s.onload = s.onreadystatechange = function() {
    var rs = this.readyState;
    if (rs) if (rs != "complete") if (rs != "loaded") return;
    try {
      w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad = new BokunWidgetEmbedder();
      w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad.initialize(options);
      w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad.display();
    } catch (e) {}
  };
  var scr = d.getElementsByTagName(t)[0],
    par = scr.parentNode;
  par.insertBefore(s, scr);
})(document, "script");
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


