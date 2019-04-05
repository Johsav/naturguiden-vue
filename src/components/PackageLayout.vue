<template>
  <v-container fluid class="no-padding">
    <v-layout row>
      <v-flex lg10>
        <configured-carousel :carouselItems="carouselItems"></configured-carousel>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm12 md8 lg7 xl8>
        <slot></slot>
      </v-flex>
    
      <v-flex xl3 lg3 md4 class="hide-sm-and-down">
        <v-container fluid grid-list-md class="no-padding-sides">
          <v-layout column>
            <v-flex>
              <v-card>
                <v-card-title class="d-block">
                  <h2 class="title">Nordic skating</h2>
                  <h3 class="subheading">weekend tour</h3>
                </v-card-title>
                <v-card-text class="text-xs-left">
                  <v-list-tile v-for="item in packageItems" :key="item.type">
                    <v-list-tile-content>{{item.type}}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{item.content}}</v-list-tile-content>
                  </v-list-tile> 
                </v-card-text>
              </v-card>
            </v-flex>
            <h4 class="grey--text text-xs-left pl-3">Other simular packages</h4>
            <v-flex v-for="item in carouselItems" :key="item.src">
              <v-card color="indigo" dark height="200">
                <v-card-title primary class="title">{{item.src}}</v-card-title>
                <v-card-text>andra card uppifrån till vänster</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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
  props: {
    carouselItems: Array
  },
 

   data() {
    return {
      packageItems:  [
        {type: "Season:", content: "January - mid March"},
        {type: "Days:", content: "4 days/3 nights"},
        {type: "Price:", content: "from 655 EUR"},
        
       
      ]
    }
   }    
};
</script>

<style scoped>
.no-padding-sides {
  padding-left: 0;
  padding-right: 0;
}
.no-padding {
  padding: 0;
}
.no-padding-bottom {
  padding-bottom: 0;
}
</style>
