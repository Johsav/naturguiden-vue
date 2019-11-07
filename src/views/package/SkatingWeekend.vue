<template>
  <AdventureMenu>
    <v-layout row wrap grid-list-md class="pt-2">
      <v-flex xs12 sm12 md9 lg9 xl9>
        <v-card>
          <v-tabs fixed-tabs grow slider-color="primary" color="grey lighten-1">
            <v-tab
              class="white--text"
              v-for="item in type"
              :key="item.link"
              :to="item.link"
              replace
            >{{item.title}}</v-tab>
          </v-tabs>
        </v-card>
        <v-flex>
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
        <v-flex>
          <v-card>
            <v-card-title>
              <h1>Nordic Skating - the weekend tour for you</h1>
            </v-card-title>

            <v-card-text class="text-xs-left">
              <p>Nordic skating in Sweden, an all inclusive guided tour with a lot of good skating. We travel by minibus in small groups of maximum eight persons and one guide. Your guide picks you up at the airport/train station and if possible we go directly for skating on a good lake nearby. All needed equipment for skating is provided. We sleep in hostels and are making the dinner together in the evenings. At breakfast we also prepare our lunch that we bring in our backpacks.</p>
              <p>
                Where we skate depends on the ice and weather situation, we always choose the area that provides the
                best skating conditions. The accommodations are located in the area but could change from day to
                day depending on where we choose to go skating.
              </p>
              <p>
                <i>
                  If you come together with your friends or family and you are 4-6 persons or more consider the options
                  for your own private tour.
                  <a
                    href="/adventures/skating-yourown"
                  >Read more here..</a>
                </i>
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-flex>

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
                      <v-card-text class="text-xs-left py-1 px-2">
                        {{item.level}}
                      </v-card-text>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex xl12 lg12 md12 sm6 xs12>
            <v-card>
              <v-card-title class="d-block grey lighten-1">BOOKNING</v-card-title>
              <v-card-text>
                <div id="bokun-w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad">Loading...</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xl12 lg12 md12 sm6 xs12>
            <v-card>
              <v-card-title class="d-block grey lighten-1">Important Information</v-card-title>
              <v-card-text>It's very important ....</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </AdventureMenu>
</template>

<script>
import AdventureMenu from "@/components/AdventureMenu.vue";
import { nbind } from 'q';


export default {
  components: {
    AdventureMenu
  },
  data() {
    return {
      type: [
        {
          title: "Skating weekend",
          link: "/adventures/skating/weekend"
        },
        {
          title: "Skating private tour",
          link: "/adventures/skating/private"
        }
      ],
      carouselItems: [
        {
          src: require("@/assets/images/1400/Skating_1413_2.jpg"),
          title: "Ice-skating",
          subtitle: "Ice-skating is fun"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "Hiking",
          subtitle: "walk walk"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Kayak",
          subtitle: "paddle paddle"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "Ice-skating",
          subtitle: "Ice-skating is fun"
        }
      ],
      packageItems: [
        { type: "Season:", content: "January - mid March" },
        { type: "Days:", content: "4 days/3 nights" },
        { type: "Price:", content: "695 EUR \early season discount 37 EUR \r\nsingle room +75 EUR \nsheets \nand towel +25 EUR"},
        { type: "Meeting point:", content: "Arlanda airport" },
        {
          type: "Lodging:",
          content: "Hostel in double room, shared toilet and shower"
        }
      ],
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
