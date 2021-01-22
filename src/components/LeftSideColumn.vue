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
          <v-card-text class="pb-0"><p>{{item.date}}</p>
            {{item.text}}
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
//import json from '@/assets/json/data.json';

export default {
  data()  {
    return  {
      cardContent:  [
        {
        nr1: "1",
        route: "/adventures/kayak/weekend",
        img1: "kayak003.jpg",
        date: "2020-04-15",
        text: `<p>We are all influenced by Covid-19. Have canceled our open tours this summer. But you can still book a private tour. Kayaking in the archipelago or hiking in the mountains.</p>
            <p>Hope, of course, that the situation changes soon so that we can offer open tours again.</p>`,
        action: "More information"
        },
        {
        nr1: "2",
        route: "/adventures/skating/weekend",
        img1: "skating005.jpg",
        date: "2020-05-01",
        text: `<p>We hope for a normal winter with fantastic ice skating. Have already received the first bookings.</p>`,
        action: "Join our skating tours"
        },
        {
        nr1: "3",
        route: "  ",
        img1: "skating008.jpg",
        date: "2020-03-20",
        text: `<p>We want to say thank's' to all our great guests that have been skating with us this winter. It have been a pleasure for us to meet you all.</p>
          <p>Please visit the facebook group <a href="https://www.facebook.com/groups/2869668636431922/">"Naturguiden NordicSkating 2020"</a> with great pictures from this winter.</p>`,
        action: ""
        },
      ]
    }
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
