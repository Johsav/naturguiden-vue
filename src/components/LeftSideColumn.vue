<template>
  <v-container class="pa-3">
    <v-layout column>
      

      <v-flex>
        <v-card router-link to="/adventures/skating/weekend" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/skating_2020_001.jpg')"
          ><div class="subheading">ICE REPORT</div></v-img>
          <v-card-text class="pb-0"><p>The skating season is here, even though the weather is warmer than normal there is plenty of option for skating. You only need to travel a little more north than normal. Here is a ice report / forecast for the coming weekend.</p>

          <p>This weekend a lot of groups have been skating on a lot of lakes in a region from Baltic sea to the Norwegian border. Above Gävle, around Falun and futher west towards Vansbro. North of Sundsvall two persons have skated 110 km on the river Indalsälven, and also a bit on the Baltic sea.</p>

          <p>The weather forecast indicate that we will have temperatures above zero during the days and some degrees below zero during the night the next 10 days. And no forecast for snow or rain.  Will probably have same situation as today the coming weekend and beginning of next week. The ice that we have will remain, and we will probably not get any new ice.</p></v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">Join our skating tours!</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>


      <v-flex>
        <v-card router-link to="/adventures/skating/weekend" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/skating_2018_002.jpg')"
          ></v-img>
          <v-card-text class="pb-0">Amazing skating on natural ice. Still possible to book a weekend tour.</v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">Join our skating tours!</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card router-link to="/adventures/skiing/weekend" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/skiing004.jpg')"
          ></v-img>
          <v-card-text class="pb-0">Experience the fifth season. Cross country skiing in the Swedish mountains.</v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">Join our skiing tours!</v-btn>
          </v-card-actions>
        </v-card>
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
.no-padding-right {
  padding-right: 0;
}
.no-padding {
  padding: 0;
}
.no-padding-bottom {
  padding-bottom: 0;
}
.round-img {
  border-radius: 50px;
}
</style>
