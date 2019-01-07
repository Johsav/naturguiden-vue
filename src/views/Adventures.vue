<template>
  <div>
    <v-container fluid grid-list-md style="background-color: #00ff00" class="no-padding-bottom">
      <!-- <v-tabs fixed-tabs grow v-for="item in tabLinks" :key="item.title">
        <v-tab :to="item.link">{{ item.title }}</v-tab>
      </v-tabs>-->
      <v-card>
        <v-tabs fixed-tabs grow>
          <v-tab>Ice-skating</v-tab>
          <v-tab>Kayak</v-tab>
          <v-tab>Hiking</v-tab>
        </v-tabs>
      </v-card>
    </v-container>

    <LeftSideColumn>
      <v-container fluid grid-list-md>
        <v-layout column>
          <v-flex>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                :src="require('../assets/images/1400/Skating_1413_3.jpg')"
              ><v-card-title>Skating pack 1</v-card-title></v-img>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
                    <v-flex>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                :src="require('../assets/images/1400/hiking_1413_1.jpg')"
              ><v-card-title>Skating pack 1</v-card-title></v-img>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
                    <v-flex>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                :src="require('../assets/images/1400/kayak_1413_3.jpg')"
              ><v-card-title>Skating pack 1</v-card-title></v-img>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
                    <v-flex>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                :src="require('../assets/images/1400/Skating_1413_1.jpg')"
              ><v-card-title>Skating pack 1</v-card-title></v-img>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
                    <v-flex>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                :src="require('../assets/images/1400/Skating_1413_3.jpg')"
              ><v-card-title>Skating pack 1</v-card-title></v-img>
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </LeftSideColumn>
  </div>
</template>

<script>
import LeftSideColumn from "../components/LeftSideColumn";

export default {
  components: {
    LeftSideColumn
  },
  data() {
    return {
      drawer: null,
      tabLinks: [
        { title: "Ice-skating", link: "/" },
        { title: "Kayak", link: "/about" },
        { title: "Hiking", link: "/calendar" }
      ]
    };
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
</style>


