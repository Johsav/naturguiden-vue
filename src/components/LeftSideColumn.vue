<template>
  <v-container class="pa-3">
    <v-layout column>
      

      <v-flex>
        <v-card router-link to="/adventures/skating/weekend" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/skating007.jpg')"
          ><div class="subheading"></div></v-img>
          <v-card-text class="pb-0"><p>2020-02-19</p>
          <p>The strange winter in Sweden continues. Some days with temperatures below minus 7 and two days later plus 7 degrees. Still very good conditions for skating. A lot of good ice and no snow, but you have to travel about two hours north of Stockholm. Last weekend our guide Michel managed to find fantastic ice on Lake Nordellen near Hudiksvall.</p>

          <p>We look forward to another three skating weekends, and it is still possible to join. Next week will be colder with temperatures below zero.</p>

          <p>Later in March we move north for skiing. Here we have more snow than normal and we will probably have very good conditions for skiing in April.</p></v-card-text>
          <v-card-actions>
            <v-btn flat color="orange">Still possible to Join our skating tours!</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

<!--
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
-->
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
