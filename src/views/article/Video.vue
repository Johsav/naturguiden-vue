<template>
  <v-container fluid grid-list-md class="pa-3">
    <v-layout row fill height>
      <v-flex xl3 lg3 md4 class="hidden-sm-and-down">
        <LeftSideColumn></LeftSideColumn>
      </v-flex>

      <v-flex xs12 sm12 md8 lg9 xl9 class="py-3">
        <v-card>
          <v-card-title
            primary-title
            class="display-1 justify-center"
          >Video - skating on natural ice</v-card-title>
          <v-card-text
            class="subheading mb-3"
          >Nice videos from our tours, and some more good skating videos</v-card-text>

          <v-flex>
            <v-layout column>
              <v-flex class="mx-auto">
                <v-card height="100%">
                  <iframe
                    :height="imageHeight"
                    :width="imagewidth"
                    src="https://www.youtube.com/embed/BhAMkDSoREs"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <v-card-text>A great skating tour, November 2018</v-card-text>
                </v-card>
              </v-flex>

              <v-flex class="mx-auto">
                <v-card height="100%">
                  <iframe
                    :height="imageHeight"
                    :width="imagewidth"
                    src="https://www.youtube.com/embed/b5CztALMDsU"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <v-card-text>Skating on Siljan, February 2015</v-card-text>
                </v-card>
              </v-flex>

              <v-flex class="mx-auto">
                <v-card height="100%">
                  <div
                    :class="{
                    'div1': $vuetify.breakpoint.xs,
                    'div2': $vuetify.breakpoint.sm,
                    'div3': $vuetify.breakpoint.mdAndUp}"
                  >
                    <template>
                      <v-playback :url="url"></v-playback>
                    </template>
                  </div>
                  <v-card-text>Skating in Sweden, February 2019</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
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
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "165px";
        case "sm":
          return "280px";
        case "md":
          return "315px";
        case "lg":
          return "315px";
        case "xl":
          return "315px";
      }
    },
    imagewidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "300px";
        case "sm":
          return "500px";
        case "md":
          return "560px";
        case "lg":
          return "560px";
        case "xl":
          return "560px";
      }
    }
  },

  data() {
    return {
      drawer: null,
      url: "http://test2.naturguiden.com/video/Skating_2019.mp4"
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
  //width: 5%;
}
.div1 {
  width: 300px;
  height: 165px;
}
.div2 {
  width: 500px;
  height: 280px;
}
.div3 {
  width: 560px;
  height: 315px;
}
.one-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>