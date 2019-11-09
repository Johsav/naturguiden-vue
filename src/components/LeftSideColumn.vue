<template>
  <v-container class="pa-3">
    <v-layout column>
      
      <v-flex>
        <v-card router-link to="/adventures/kayak/weekend" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/kayak002.jpg')"
          ></v-img>
          <v-card-text class="pb-0">Enjoy a guided kayak tour in the archipelago. Camping on the islands, cocking over open fire.</v-card-text>
          <v-card-actions>
            <v-btn flat color="orange" router-link to="/adventures/kayak/weekend">Join our kayak tours!</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card router-link to="/adventures/kayak/weekend" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/kayak002.jpg')"
          ></v-img>
          <v-card-text class="pb-0">Enjoy a guided kayak tour in the archipelago. Camping on the islands, cocking over open fire.</v-card-text>
          <v-card-actions>
            <v-btn flat color="orange" router-link to="/adventures/kayak/weekend">Join our kayak tours!</v-btn>
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
