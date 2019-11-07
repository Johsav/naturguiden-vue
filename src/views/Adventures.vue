<template>
  <div>
  <!--  <v-container fluid grid-list-md style="background-color: #00ff00" class="no-padding-bottom">
      <v-card>
        <v-tabs fixed-tabs grow>
          <v-tab v-for="item in packages" :key="item.link" :to="item.link" replace>{{item.title}}</v-tab>
        </v-tabs>
      </v-card>
    </v-container>   -->

      <v-container fluid grid-list-md>
        <v-layout row wrap grid-list-md class="pt-2">
          <v-flex xs12 sm12 md9 lg9 xl9>
            <v-card class="text-xs-left">
                <v-layout row>
                  <v-card-title primary-title class="display-2">All Our Adventure  tours</v-card-title>
                </v-layout>
                <v-card-text
                  class="mb-5 subheading"
                >Join us on one of our tours. Or do as family Smith that booked their own long weekend with back country skiing and lunch made outdoor in the mountain over open fire. One day with downhill skiing, one night in  snow bivac and a lot of other activities in the snow.</v-card-text>
          </v-card>
          <v-flex v-for="item in packages" :key="item.link" >
            <v-card :to="item.link">
              <v-img
                class="white--text display-1"
                height="200px"
                :src="getImgUrl(item.imageSrc)"
              >
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>
              <v-card-text>{{item.text}}</v-card-text>
            </v-card>
          </v-flex>
          </v-flex>

          <v-flex md3 lg3 xl3>
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
                      <v-card-text class="text-xs-left py-1 px-2">
                        {{item.level}}
                      </v-card-text>
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
        { date: "23 - 26 January:", level: "Weekend for normal skaters" },
        { date: "30 Jan - 2 Febr:", level: "Weekend for good skaters" },
        { date: "6 - 9 February:", level: "Weekend for normal skaters" },
        { date: "13 - 16 February:", level: "Weekend for good skaters" },
        {
          date: "20 - 23 February:",
          level: "Weekend for good and normal skaters - two groups"
        },
        { date: "27 Febr - 1 March:", level: "Weekend for normal skaters" }
      ],
      packages: [
        {
          title: "Ice-skating - weekend tour",
          link: "/adventures/skating/weekend",
          imageSrc: "1400/Skating_1413_3.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents (which will be provided) and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges.`
        },
        {
          title: "Ice-skating - weekend tour",
          link: "/adventures/skating/weekend",
          imageSrc: "1400/Skating_1413_3.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents (which will be provided) and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges.`
        },
        {
          title: "Ice-skating - private tours",
          link: "/adventures/skating/private",
          imageSrc: "1400/Skating_1413_2.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents (which will be provided) and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges.`
        },
        {
          title: "Kayak",
          link: "/about",
          imageSrc: "1400/kayak_1413_4.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents (which will be provided) and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges.`
        },
        {
          title: "Hiking",
          link: "/calendar",
          imageSrc: "1400/hiking_1413_4.jpg",
          text: `Eight adventurous days filled with mountain peak tours,
          glacier hiking and magnificent nature! The details are not set,
          we decide from day to day how the trip will develop. We bring our
          own tents (which will be provided) and all the food we need. We are totally free
          to experience the wild, outside all regular tracks and mountain lodges.`
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


