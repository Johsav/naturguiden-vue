<template>
  <v-container class="pa-3">
    <v-layout column>
      
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
