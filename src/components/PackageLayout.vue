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
      <v-flex xl3 lg3 md4 class="hidden-sm-and-down">
        <v-container fluid grid-list-md class="no-padding-right">
          <v-layout column>
            <v-flex>
              <v-card>
                <v-img
                  class="white--text"
                  height="300px"
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Great</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span>Most weekends are almost fully booked already, but we do have some vacancies. And we can also offer skating tours during the first half of the week - Monday until Wednesday.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="orange">Nordic Skating</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
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
  data: () => ({})
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
