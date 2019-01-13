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
        <v-container fluid grid-list-md class="no-padding-sides">
          <v-layout column>
            <h4 class="grey--text text-xs-left pl-3">Highlights</h4>
            <v-flex>
              <v-card>
                <v-card-title class="d-block">
                  <h2 class="title">Nordic Skating</h2>
                  <h3 class="subheading">weekend tour</h3>
                </v-card-title>
                <v-card-text class="text-xs-left">
                  <dl class="dl-horizontal">
                    <dt>Season:</dt>
                    <dd>January - mid March</dd>
                  </dl>
                  <dl>
                    <dt>Days:</dt>
                    <dd>4 days/ 3 nights&gt;</dd>
                  </dl>
                  <dl>
                    <dt>Price:</dt>
                    <dd>From €655</dd>
                  </dl>
                  <dl>
                    <dt>Lodging:</dt>
                    <dd>Hostel, double room with shared toilet and shower</dd>
                  </dl>
                </v-card-text>
                <v-card-actions>
                  <v-btn flat color="orange">Nordic Skating</v-btn>
                </v-card-actions>
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
  data: () => ({})
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
