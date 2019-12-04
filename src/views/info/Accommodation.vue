<template>
  <v-container fluid grid-list-md class="pa-3">
    <v-card>
      <v-tabs fixed-tabs grow slider-color="primary">
        <v-tab v-for="item in m_element" :key="item.link" :to="item.link" replace>{{item.title}}</v-tab>
      </v-tabs>
    </v-card>

    <v-layout row fill height>
      <v-flex xl3 lg3 md4 class="hidden-sm-and-down">
        <LeftSideColumn></LeftSideColumn>
      </v-flex>

      <v-flex xs12 sm12 md8 lg9 xl9 class="py-3">
        <v-card class="text-xs-left">

          <v-img
            :height='imageHeight'
            :width='imagewidth'
            class="my-img"
            :src="require('@/assets/images/500/tent002.jpg')">
          </v-img>
                 
          <v-card-title primary-title class="display-1 pb-0">Accommodation</v-card-title>
          <v-card-text
            class="subheading"
          >We offer several different levels of accommodations, not all are available on all tours. On some tours you can choose between different levels, on others you can not. Here you will get an idea about what the different levels stand for.</v-card-text>
     
          <v-card-title class="title pb-0">Tent: Small tents, normally for two persons</v-card-title>
          <v-card-text>High quality expedition tents from Hilleberg. Normally we use three person tents for two persons. But it is also possible to get a single person tent. Sleeping mattress and sleeping bag are not included but you can rent them if you book in advance.</v-card-text>

          <v-card-title class="title pb-0">Youth Hostel:</v-card-title>
          <v-card-text>
            Living at youth hostels in two or four bed dormitory room with shared shower and toilet (normally two persons in each room)
            <br />
            Sheets and towels are not included but pillow and blanket are provided.
            <br />
            Breakfast (included), prepared together with the guide in the morning.
          </v-card-text>

          <v-card-title class="title pb-0">Mountains Lodges</v-card-title>
          <v-card-text>
           On our mountain tours we stay in mountain lodges. Normally in four bed dormitory room. Toilet in separate building. Showers at some, but not at all locations. Sheets and towels NOT included. Bring sleeping bag (important in winter) or sheets. Pillow and blanket are provided.
          </v-card-text>

          <v-card-title class="display-1 pb-0 primary--text">Ice Skating</v-card-title>
          <v-card-text class="subheading">
            For our ice skating weekends we have five different price levels depending on accommodation.
          </v-card-text>

           <v-card-title class="title pb-0">Basic I: (B1) Youth Hostel, Self Catering - Half board</v-card-title>
          <v-card-text>
            Living at youth hostels in two or four bed dormitory room with shared shower and toilet (normally two persons in each room)
            <br />
            Breakfast and lunch included, prepared together with the guide in the morning.
            <br />
            Dinner NOT included, the group decides where to eat, wether to prepare dinner themselves at the youth hostel or eat at a restaurant.
          </v-card-text>

           <v-card-title class="title pb-0">Basic II: (B2) Youth Hostel, Self Catering</v-card-title>
          <v-card-text>
            Living at youth hostels in two or four bed dormitory room with shared shower and toilet (normally two persons in each room)
            <br />
            The guests prepare their own meal together with the guide. All food is provided and included in the price.
          </v-card-text>

           <v-card-title class="title pb-0">Basic III: (B3) Youth Hostel, Full Board </v-card-title>
          <v-card-text>
            Living at youth hostels in two or four bed dormitory rooms with shared shower and toilet (normally two persons in each room)
            <br />
            A second guide takes care of all cooking, can assist as a extra Skating guide if the group likes to divide in one faster and one slower group.
            <br />
            Breakfast and dinner will be served at the accommodation.
            <br />
            The guests prepare their own lunch box at breakfast.
          </v-card-text>

           <v-card-title class="title pb-0">Comfort I: (C1) Hotel standard. Twin or double rooms, Half board</v-card-title>
          <v-card-text>
            Accommodation in twin or double rooms, with shower and toilet in each room.
            <br />
            Breakfast and lunch box prepared at breakfast are included.
            <br />
            Dinner is not included, we choose every evening where to eat, you pay yourself.
          </v-card-text>

          <v-card-title class="title pb-0">Comfort II: (C2) Hotel standard. Twin or double rooms, Full board </v-card-title>
          <v-card-text>
            Accommodation in twin or double rooms, with shower and toilet in each room.
            <br />
            Breakfast and dinner is included.
            <br />
            The guests makes their own lunch box at breakfast.
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LeftSideColumn from "@/components/LeftSideColumn.vue";

export default {
  components: {
    LeftSideColumn
  },

  methods: {
    getImgUrl(img) {
      return require("@/assets/images/" + img);
    }
  },
    
  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '200px'
        case 'sm': return '200px'
        case 'md': return '300px'
        case 'lg': return '300px'
        case 'xl': return '300px'
      }
    },
    imagewidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '100%'
        case 'sm': return '30%'
        case 'md': return '30%'
        case 'lg': return '30%'
        case 'xl': return '30%'
      }
    }
  },
  

  data() {
    return {
      drawer: null,
      m_element: [
        {
          title: "About our tours",
          img: require("@/assets/postbullets.png"),
          link: "/info"
        },
        {
          title: "How to get here",
          img: require("@/assets/postbullets.png"),
          link: "/get-here"
        },
        {
          title: "Accommodation",
          img: require("@/assets/postbullets.png"),
          link: "/accommodation"
        },
        {
          title: "About Sweden",
          img: require("@/assets/postbullets.png"),
          link: "/sweden"
        }
      ],

      n_element: [
        {
          title:
            "Fly to Östersund: From here you take the bus to Åsarna, change bus and continue to Ljungdalen. Traveltime about 3,5 hours. Or you can get a transfer direct from the airport to Ljungdalen (just above 2 hours drive)."
        },
        {
          title:
            "Fly to Röros (in Norway): Less than two hours drive, by rented car or a pre-arranged transfer."
        },
        {
          title:
            "Train from Stockholm: You need to change train in Sundsvall and continue to Brunflo. From Brunflo take a bus to Åsarna where you change to the bus to Ljungdalen. Travel time around 9 hours."
        },
        {
          title:
            "Bus from Stockholm: Direct bus (harjedalingen.se) from Stockholm to Funäsdalen where we arrange with a pick up. Total travel time 8-9 hours."
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.no-padding-right {
  padding-right: 0;
}
.no-padding {
  padding: 0;
}
.no-padding-bottom {
  padding-bottom: 0;
}

.list-height {
  height: 25px;
}
.my-img {
  float: left;
  margin: 10px;
  
 // max-width: 100%
}
</style>