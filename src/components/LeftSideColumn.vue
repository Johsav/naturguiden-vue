<template>
  <v-container class="pa-3">
    <v-layout column>
      
      <v-flex>
        <v-card router-link to="/adventures/kayak/weekend" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/kayak003.jpg')"
          ></v-img>
          <v-card-text class="pb-0"><p>2020-04-15</p>
            <p>We are all influenced by Covid-19. Have canceled our open tours this summer. But you can still book a private tour. Kayaking in the archipelago or hiking in the mountains.</p>
            <p>Hope, of course, that the situation changes soon so that we can offer open tours again.</p>
          </v-card-text>
          <!--
          <v-card-actions>
            <v-btn flat color="orange">Join our kayak tours!</v-btn>
          </v-card-actions>
          -->
        </v-card>
      </v-flex>

      <v-flex>
        <v-card router-link to="/adventures/skating/weekend" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/skating005.jpg')"
          ></v-img>
          <v-card-text class="pb-0"><p>2020-05-01</p>
            <p>We hope for a normal winter with fantastic ice skating. Have already received the first bookings.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">Join our skating tours!</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/skating008.jpg')"
          ><div class="subheading"></div></v-img>
          <v-card-text class="pb-0"><p>2020-03-20</p>
          <p>We want to say thank's' to all our great guests that have been skating with us this winter. It have been a pleasure for us to meet you all.</p>
          <p>Please visit the facebook group <a href="https://www.facebook.com/groups/2869668636431922/">"Naturguiden NordicSkating 2020"</a>
          with great pictures from this winter.</p>
          </v-card-text>
          <!--
          <v-card-actions>
            <v-btn flat color="orange">Still possible to Join our skating tours!</v-btn>
          </v-card-actions>
          -->
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
