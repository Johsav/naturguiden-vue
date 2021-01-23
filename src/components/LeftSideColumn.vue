<template>
  <v-container class="pa-3">
    <v-layout column>




      <v-flex>
        <v-card v-for="item in cardContent" :key="item.nr1" router-link :to = "item.route" height="100%">
          <v-img
            class="white--text"
            height="300px"
            :src="require('@/assets/images/500/' + item.img1)"
          ></v-img>
          <!-- https://stackoverflow.com/questions/56806020/vue-cannot-find-the-dynamic-source-of-the-vuetify-v-img-element  -->
          <v-card-text class="pb-0">
            <p>{{item.date}}</p>
            <p>{{item.text1}}</p>
            <p>{{item.text2}}</p>
            <p>{{item.text3}}</p>
          </v-card-text>
          <!--<v-card-text v-text = "item.text">  
          </v-card-text>  -->
          <v-card-actions>
            <v-btn flat color="orange">{{item.action}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>






    </v-layout>
  </v-container>
</template>

<script>
import json from '/data.json';
//import axios from "axios";

export default {
  data() {
    return json
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
.round-img {
  border-radius: 50px;
}
</style>
