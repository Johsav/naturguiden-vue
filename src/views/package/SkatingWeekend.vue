<template>
  <AdventureMenu>
    <v-layout row wrap grid-list-md class="pt-2">
      <v-flex xs12 sm12 md8 lg9 xl9>
        <v-layout row wrap grid-list-md class="pt-2">
          <v-flex xs12 sm12 md8 lg8 xl8>
            <!-- First Card - general info  -->
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
          <!-- Second Card - Private or Open tour  -->
          <v-flex xs12 sm12 md4 lg4 xl4>
            <v-card class="grey lighten-3">
              <v-card-title class="pt-1 pb-0">
                <h1>Private or Open tour</h1>
              </v-card-title>

              <v-card-text class="text-xs-left pt-1 subheading">
                <div>On our tours we are maximum eight skaters. Our open tours are open for anyone and you are very welcome to follow. But if you are a family or a couple of friends, maybe you rather want a private tour. You can then chose any date, and also the standard of accommodation.</div>

                <div>
                  <router-link
                    to="/adventures/skating/private"
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
                <h1>Nordic Skating - the weekend tour for you</h1>
              </v-card-title>

              <v-card-text class="subheading pb-0">
                <v-img
                  contain
                  class="right"
                  width="350"
                  :src="require('@/assets/images/500/skating003.jpg')"
                ></v-img>
                Nordic skating in Sweden, an all inclusive guided tour with a lot of good skating. We travel by minibus in small groups of maximum eight persons and one guide. Your guide picks you up at the airport/train station and if possible we go directly for skating on a good lake nearby. All needed equipment for skating is provided. We sleep in hostels and are making the dinner together in the evenings. At breakfast we also prepare our lunch that we bring in our backpacks.</p>
              </v-card-text>
              <v-card-text>
                <p>Where we skate depends on the ice and weather situation, we always choose the area that provides the best skating conditions. The accommodations are located in the area but could change from day to
                day depending on where we choose to go skating.</p>
                <p><i>If you come together with your friends or family and you are 4-6 persons or more consider the options for your own private tour.
                <router-link to="/adventures/skating/private">Read more here..</router-link></i></p>
                <p>As the speed and the distance we like to skate differs depending on our guests' previous skating experience and fitness level we offer some weekends for those with more experience and other weekends for those with less. You don't need to be a champion to join the tour for more experienced skaters but you should be able to skate on ice skates or rollerblades without difficulties and be reasonable fit.
                Below you have all information you need, but if you still have some more questions, don't hesitate to contact us on info@naturguiden.se or on +46 70 53 53 630.</p>
              </v-card-text>
              <v-flex class="grey lighten-3">
              <v-card-title class="title pb-0">Join us on any of our weekend trips 2020</v-card-title>
              <v-card-text>
                <b>Price: 695 EUR ( 37 EUR early season discount before 3 February)</b>
              </v-card-text>
              <v-card-text class="pt-0">
                Everything included, accommodation in hostels, shared double room.
                <br />
                Single room +75 EUR, sheets and towel +25 EUR (blanket and pillow is provided).
                <v-list class="pt-3 grey lighten-3">
                  <v-list-tile class="list-height" v-for="item in packageDates">
                    <v-list-tile-action>
                      <v-img contain height="16px" :src="require('@/assets/postbullets.png')"></v-img>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.date }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ item.level }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                If there is an interest for other weekends do not hesitate to contact us. We do have groups coming every weekend from early January to mid March, it might be possible to join a group with less than eight participants.
              </v-card-text>
              </v-flex>
              <v-card-title class="title pb-0">A normal day on the ice</v-card-title>
              <v-card-text>We start with breakfast where we also prepare our lunch packages. As soon as everyone is ready we head off for skating. If we are lucky we can walk from our accommodation directly out on the ice. Otherwise we take the minibus to the lake. The guide is always first, checking the ice and looking out for weak spots. The speed and distance is adjusted to the group and the ice condition. Now and then we take short stops to admire the beautiful landscape, chat for a while or just rest. During the day we go ashore from time to time, for the first or second lunch break or for walking to another lake nearby. At the end of the day we return to the minibus and head back to the hotel/hostel. A nice sauna before the dinner is a pleasant experience. If the conditions are right we might go for another skating trip in moonlight late in the evening.</v-card-text>
              
              <v-card-title class="title pb-0">Pick up</v-card-title>
              <v-card-text>
                At Stockholm/Arlanda airport. Other locations possible after agreement i.e. Stockholm South/Skavsta (RyanAir) or at your hotel. Read more here <router-link to="/get-here">How to get here</router-link>
                </v-card-text>

                <v-card-title class="title pb-0">Time for arrival and departure:</v-card-title>
                <v-card-text>
                <v-card-title class="subtitle-1 font-weight-black pb-0 pt-0">Arlanda:</v-card-title>
                Choose your time, if possible before 17:00 (confirm with us before booking the ticket). Our normal pick-up times are 11:00 and 17:00, but we are flexible and can arrange another pick-up time. If you arrive mid day we find a place close to the airport to go for skating. If other guests arrive later we then go back to the airport and pick them up. Late afternoon we head off for the the place to stay the first night.<br />
                Departure not before 18:00. We drop you off at the airport 16:30 or later depending on departure time.
                <v-card-title class="subtitle-1 font-weight-black pb-0">Skavsta:</v-card-title>
                Pick up around 09:00.<br />
                Drop off around 18:30.
                </v-card-text>

                <v-card-title class="title pb-0">Accommodation: Youth Hostel, Self Catering</v-card-title>
                <v-card-text>
                Youth hostels with two or four bed dormitory room with shared shower and toilet (normally two persons in each room). You need to bring sheets or duvet covers and towels. (Or you can have it included for 25 EUR extra) We prepare the meals together. All food is provided and included in the price.
                </v-card-text>

                <v-card-title class="title pb-0">Personal equipment</v-card-title>
                <v-card-text>
                Clothing suitable for skating, a complete set of clothes to bring in provided backpack.<br />
                Good to have but not necessary: Sun glasses, dry bag for your mobile/camera, indoor shoes
                </v-card-text>

                <v-card-title class="title pb-0">Equipment included</v-card-title>
                <v-card-text>
                Skates, boots, backpack and required safety equipment, thermos, lunch box and sit pad
                </v-card-text>

                <v-card-title class="title pb-0">Extra equipment that we can provide</v-card-title>
                <v-card-text>
                <p>
                  We can provide you with the following but you need to make a reservation for it when you place your order:</p>
                <p>
                  Extra safety equipment: Helmet, knee pad, wrist and arm bow protectors -free of charge.</p>
                <p>
                  Sheets and towel: +25 EUR extra.</p>
                </v-card-text>

                <v-card-title class="title pb-0">About the skates</v-card-title>
                <v-card-text>
                  <v-img
                  contain
                  class="right"
                  width="150"
                  :src="require('@/assets/images/200/schoen and skate.jpg')"
                ></v-img>
                We use special skates well adopted for Nordic skating. They are longer than hockey or figure skates. The front has a long curve compared to speed skates with sharp front, which is necessary if the ice in not completely smooth. And most important, the skate and the boot are separate so you can take off the skate when walking to and from the ice. If you have suitable skates, for example the Salomon skates, you may use them if you like.
                </v-card-text>

                <v-card-title class="title pb-0">About safety</v-card-title>
                <v-card-text>
                  <v-img
                  contain
                  class="right"
                  width="225"
                  :src="require('@/assets/images/500/safety_eq.jpg')"
                ></v-img>
                <p>
                  Safety is an important issue. We cover great distances on the ice during a day. The whole time we keep track of the quality of the ice and avoid all weak areas. If someone should break through the ice the safety equipment we have helps us to pick the person up in a minute. And soon all wet clothes are changed to dry and warm clothes. The skating trip can continue.</p>
                <p>
                  PS: The only time we had a person falling into the water, they did not follow the given instructions.</p>
                <p>
                  Safety equipment we carry: backpack, safety line, ice nails and poles</p>
                </v-card-text>

                <v-flex class="grey lighten-3">
                <v-card-title class="title pb-0">Included in the price</v-card-title>
                <v-card-text>
                  Day I<br />
                  Transfer, dinner, guide, rent of equipment, share in double room<br />
                  Day I<br />
                  Breakfast, lunch, dinner, guide, rent of equipment, share in double room<br />
                  Day III<br />
                  Breakfast, lunch, dinner, guide, rent of equipment, share in double room<br />
                  Day IV<br />
                  Breakfast, lunch, guide, rent of equipment, transfer
                  <p><b>Not included:</b> alcoholic drinks.</p>
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
import { nbind } from "q";

export default {
  components: {
    AdventureMenu
  },

  data() {
    return {

      days: [
        {
          day: "Day I",
          title: "",
          text: `Arrival at the airport. The guide will meet you and if possible we start skating already in the afternoon. We start with a safety and security briefing and then hand out all equipment. Time to change to proper clothes if you have not yet done that. Late afternoon we drive towards the chosen skating area. Arriving to the hostel/hotel you check in and then we have dinner at the hostel/hotel.`
        },
        {
          day: "Day II-III",
          title: "",
          text: `We have breakfast and also time to prepare the lunch packages. Depending on distance we walk or take the minibus towards the ice. At the lake we start by examining the ice before we put on the skates and step out on the ice. We skate in a row, the guide always first, checking the ice and looking out for weak spots. The speed and distance is adjusted to the group and the ice condition. Now and then we take short stops to admire the beauty, chat for a while or just rest. During the day we go ashore from time to time to take something to eat or walk to another lake nearby. At the end of the day we return to the minibus and head back to the hotel/hostel. A nice sauna before the dinner is a pleasant experience. If the conditions are right we might go for another skating trip in moonlight late in the evening.`
        },
        {
          day: "Day IV",
          title: "",
          text: `After breakfast we head off to another day on ice, skating as long as possible depending on the scheduled departure times. On our way back to the airport we stop for a shower and to change clothes and maybe for something to eat. The guide then drives you back to the airport.`
        }
      ],

      packageItems: [
        { type: "Season:", content: "January - mid March" },
        { type: "Days:", content: "4 days/3 nights" },
        {
          type: "Price:",
          content:
            "695 EUR early season discount 37 EUR \r\nsingle room +75 EUR \nsheets \nand towel +25 EUR"
        },
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
        { date: "20 - 23 February:", 
          level: "Weekend for good and normal skaters - two groups" },
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
