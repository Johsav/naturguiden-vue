<template>
 <v-container fluid grid-list-md>
    <v-layout row>
      <v-flex lg10>
        hello hello
        <configured-carousel :carouselItems="carouselItems"></configured-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap grid-list-md>
      <v-flex xs12 sm12 md8 lg7 xl7>
        <v-card>
          <v-card-title>
            <h1>Nordic Skating - the weekend tour for you</h1>
            </v-card-title>
                
                <v-card-text class="text-xs-left">
                  <p>
                  Nordic skating in Sweden, an all inclusive guided tour with a lot of good skating. We travel by minibus
                  in small groups of maximum eight persons and one guide. Your guide picks you up at the airport/train
                  station and if possible we go directly for skating on a good lake nearby. All needed equipment for
                  skating is provided. We sleep in hostels and are making the dinner together in the evenings. At breakfast
                  we also prepare our lunch that we bring in our backpacks.
                  </p>

                  <v-img
                    class="right"
                    width="100"                
                    :src="require('@/assets/images/Logo_RGB.jpg')"
                  >
                  </v-img>
                  <p>
                  Where we skate depends on the ice and weather situation, we always choose the area that provides the
                  best skating conditions. The accommodations are located in the area but could change from day to
                  day depending on where we choose to go skating.
                  </p>
                  <p><i>
                  If you come together with your friends or family and you are 4-6 persons or more consider the options
                  for your own private tour.
                  <a href="/adventures/skating-yourown">Read more here..</a>
                  </i></p>
              
                </v-card-text>
              </v-card>
      </v-flex>
        
      <v-flex xl3 lg3 md4 sm12 xs12>
        <v-layout row wrap>
          <v-flex xl12 lg12 md12 sm6 xs12>
            <v-card>
              <v-card-title class="d-block">
                <h2 class="title">Nordic skating</h2>
                <h3 class="subheading">weekend tour</h3>
              </v-card-title>

              <v-card-text class="text-xs-left">
                <v-list-tile v-for="item in packageItems" :key="item.type">
                  <v-list-tile-content>{{item.type}}</v-list-tile-content>
                  <v-list-tile-content>{{item.content}}</v-list-tile-content>
                </v-list-tile> 
              </v-card-text>
            </v-card>

          </v-flex>
            
            <v-flex xl12 lg12 md12 sm6 xs12>
               <v-card >
                <v-card-title primary class="title">What to bring</v-card-title>
                <v-card-text>It's very important ....</v-card-text>
              </v-card>
              <v-card color="indigo" dark >  
                <v-card-title primary class="title center">BOOKNING</v-card-title>
                <v-card-text><div id="bokun-w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad">Loading...</div></v-card-text>
              </v-card>
               <v-card >
                <v-card-title primary class="title">Tidningsklipp</v-card-title>
                <v-card-text>artikel</v-card-text>
              </v-card>
          </v-flex>  
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
    

</template>

<script>
import ConfiguredCarousel from "@/components/ConfiguredCarousel.vue";

export default {
  components: {
    ConfiguredCarousel
  },
  data() {
    return {
      carouselItems: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
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
       packageItems:  [
        {type: "Season:", content: "January - mid March"},
        {type: "Days:", content: "4 days/3 nights"},
        {type: "Price:", content: "from 655 EUR"},
        {type: "Meeting point:", content: "Arlanda airport"},
        {type: "Lodging:", content: "Hostel in double room, shared toilet and shower"},

             
      ]
      
    };
  }
};

//Bokun script
var w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad;
(function(d, t) {
  var host = 'widgets.bokun.io';
  var frameUrl = 'https://' + host + '/widgets/32023?bookingChannelUUID=3ccd59a6-631f-4273-a87f-8899f0037f8f&amp;activityId=86253&amp;lang=en&amp;ccy=SEK&amp;hash=w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad';
  var s = d.createElement(t), options = {'host': host, 'frameUrl': frameUrl, 'widgetHash':'w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad', 'autoResize':true,'height':'','width':'100%', 'minHeight': 0,'async':true, 'ssl':true, 'affiliateTrackingCode': '', 'transientSession': true, 'cookieLifetime': 43200 };
  s.src = 'https://' + host + '/assets/javascripts/widgets/embedder.js';
  s.onload = s.onreadystatechange = function() {
    var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
    try {
      w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad = new BokunWidgetEmbedder(); w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad.initialize(options); w32023_a8213c1f_c7be_40bd_bf12_3597943dbaad.display();
    } catch (e) {}
  };
  var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');
</script>
