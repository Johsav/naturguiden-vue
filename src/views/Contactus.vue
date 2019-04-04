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
                      <h3 class="headline">Contact information</h3>
                  </v-card-title>
                  <v-card-text>
                    <h3>Naturguiden Svenska Äventyr</h3>
                 
                    <p>Naturguiden</P>
                    <p>Munkhagsgatan 120B</P>
                    <p>587 25 LINKÖPING</P>
                    <p>SWEDEN</P>
                    <p></p>
                    <p>+46 70 53 53 630</P>
                    <p>info@naturguiden.se</P>
                    
                    <p></p>
                    <p>www.naturguiden.com</P>
                    <p>www.naturguiden.se</P>

                    <h3>Facebook</h3>
                    <p>https://www.facebook.com/Naturguiden/</p>
      
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