<template>
  <v-container fluid grid-list-md style="background-color: #00ff00" class="no-padding-bottom">
      <v-card>
        <v-tabs fixed-tabs grow>
          <v-tab v-for="item in m_element" :key="item.link" :to="item.link" replace>{{item.title}}</v-tab>
        </v-tabs>
      </v-card>
   
        
            <v-layout row fill-height>
              <v-flex md3 lg2  xl2 d-flex  class="hidden-p-xs-only">
                <v-card>
                  <v-img
                    class="white--text"
                    contain
                    
                    :src="getImgUrl('Logo_RGB.jpg')"
                  ></v-img>
                </v-card>
              </v-flex>
              <v-flex xs12 md9 lg10 sm12 xl10 d-flex>
                <v-card  class="text-xs-left">
                  <v-card-title primary-title>
                      <h2 class="headline">Naturguiden your guide to great adventures</h2>
                  </v-card-title>
                  <v-card-text class="text-md-left">
                    <p>Adventures, outdoor in the nature, is our passion. All inclusive adventure-packages with an experienced guide, all equipment, food and accommodation (everything that you need) are what we offer.</p>
                 
                    <P>Our most common adventures are</P>
                    <v-list>
                      <v-list-tile v-for="item in l_element" :key="item.link" router :to="item.link">
                        <v-list-tile-action>
                          <v-icon color="red">brightness_7</v-icon>
                        </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      <v-list-tile-sub-title> {{ item.text }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                      </v-list-tile>
                    </v-list>  

                    <h3>Private or a scheduled tour</h3>
                    <p>You can book one of our scheduled tours.<br />Or you can plan your own private tour together with friends or family.</p>
                    <div class="not">Did you know that our speciality is to create custom tours. What are you dreaming of? Try us!</div>
                    <p>Naturguiden was founded in 1996 and since then has given thousands of people a great time in the Swedish
                    nature.<br /></p>

                    <h3>Ecoturism</h3>
                    <p>Ecotourism or a nature friendly approach is important for us. We are member of the Swedish ecotourist organisation and try to minimize our impact on the environment.</p>    
                    <p>We are located in Linköping, 200 km south of Stockholm, in the county of Östergötland but our activities
                    take place all over Sweden. We always try to find the best possible places for our different outdoor
                    activities.
                    </p>
                    <p>Our kayak tours are normally in the archipelago south of Stockholm.  On the skating tours we meet you at Stockholm airport / Arlanda.</p>
                    <p>The Hiking and Skiing tours are in a remote part of Sweden. We start the tours in Ljungdalen and here we have the mountain almost by ourselves.</p>
                    <p><i>But of course different locations are possible.</i></p>
                    <br />
                    <p>We have found the most beautiful places for you, we have all equipment you need. We have done all preparation, you just have to show up and enjoy.</p>
                    <br />
                    <p>Welcome to join us on our tours</p>
                    <br />
                    <p>/John Savelid<br />
                    Naturguiden<br />
                    +46 70 53 53 630<br />
                    <a href="mailto:john@naturguiden.se">john@naturguiden.se</a></p>

                    <p>LÄGG TILL LOGGA FÖR NATURENS BÄSTA OCH EKOTURISMFÖRENINGEN HÄR ^^^^^^^^^^</p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
      </v-container>

</template>

<script>

export default {
  
  methods: {
    getImgUrl(img) {
      return require("@/assets/images/" + img);
    }
  },

  data() {
    return {
      drawer: null,
      m_element: [
        {
          title: "About us",
          link: "/about"
        },
        { title: "Contact us",
          link: "/contact"
        },
        { title: "Send an inquiry",
          link: "/inquiry"
        }
      ],
      l_element: [
        {
          title: "Nordic Skating",
          text: "It's fantastic and sometimes little scary.",
          link: "/skating"
        },
        { title: "Kayak",
         text: "All those islands in the archipelago, amazing.",
          link: "/kayak"
        },
        { title: "Hiking",
         text: "Find the way and yourself up in the mountain.",
          link: "/hiking"
        },
        { title: "Back Country skiing",
         text: "Spring in the mountain, they call it the fifth season. Still winter but with long lasting days.",
          link: "/skiing"
        }
      ]
    }
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