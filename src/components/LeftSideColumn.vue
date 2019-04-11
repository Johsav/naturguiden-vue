<template>
  <v-container fluid class="no-padding">
    <v-layout row>
      <v-flex xl3 lg3 md4 class="hidden-sm-and-down">
        <v-container fluid grid-list-md class="no-padding-right">
          <v-layout column>
            <v-flex>
              <v-card>
                <v-img
                  class="white--text"
                  height="300px"
                  :src="require('@/assets/images/500/kayak002.jpg')"
                >
                </v-img>
                <v-card-text>
                  Enjoy a guided kayak tour in the archipelago. Camping on the islands, cocking over open fire.
                </v-card-text>
                <v-card-actions>
                  <v-btn flat color="orange" router-link to="/kayak">Join our kayak tours!</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card>
                <iframe
                  src="https://www.youtube.com/embed/b5CztALMDsU" 
                  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                <v-card-actions>
                  <v-btn flat color="orange" router-link to="/video">>> more videos</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>


            <v-flex>
              <v-card>
                <v-card-title primary class="title">They write about our tours ..</v-card-title>
                <v-flex>
                  <v-layout row class="ma-0 pa-0">
                    <a href="https://www.independent.co.uk/travel/europe/sweden-go-with-the-floe-this-winter-8959544.html">
                      <v-flex>
                        <v-img
                          class="round-img"
                          contain
                          width="100px"
                          :src="require('@/assets/images/100/independent001.jpg')" >
                        </v-img>
                      </v-flex>
                    </a>  
                    <v-flex>
                      <v-card-title class="ma-0 pa-0 font-weight-bold text--center">The Independent</v-card-title>
                      <v-card-text to="/about" class="ma-0 pa-0 font-italic">It was the question on all of our minds, but I asked it: "How do you know when the ice isn't safe to skate on?</v-card-text>                    
                    </v-flex>
                  </v-layout>
                </v-flex>   
                <v-flex >                
                  <v-layout row class="ma-0 pa-0" >
                    <a href="https://www.theguardian.com/travel/2012/nov/09/european-winter-breaks-with-twist">
                      <v-flex>
                        <v-img
                          class="round-img"
                          contain
                          width="100px"
                          :src="require('@/assets/images/100/guardian001.jpg')" >
                        </v-img>
                      </v-flex>
                    </a>
                    <v-flex >
                      <v-card-title class="ma-0 pa-0 font-weight-bold text--center">The Guardian</v-card-title>
                      <v-card-text class="ma-0 pa-0 font-italic">Escape the circle-skating crowds at Somerset House and ice-skate with a sense of purpose on a four-day trek</v-card-text>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-card-actions>
                  <v-btn flat color="orange" router-link to="/articles">more articles >>>></v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 sm12 md8 lg7 xl8>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
.no-padding-right{
  padding-right: 0;
}
.no-padding{
  padding: 0;
}
.no-padding-bottom{
  padding-bottom: 0;
}
.round-img{
    border-radius:50px;
}
</style>
