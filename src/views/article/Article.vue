<template>
  <v-container fluid grid-list-md class="pa-3">
    <v-layout row fill height>
      <v-flex xl3 lg3 md4 class="hidden-sm-and-down">
        <LeftSideColumn></LeftSideColumn>
      </v-flex>

      <v-flex xs12 sm12 md8 lg9 xl9 class="py-3">
        <v-card class="text-xs-left">
          <v-card-title primary-title class="display-1">They write about our tours ..</v-card-title>
          <v-card-text
            class="subheading mb-3"
          >Some articles in different papers that are about skating in Sweden</v-card-text>
          <v-flex>
            <v-layout row wrap>
              <!-- NR 1 -->
              <v-flex xs12 sm12 md12 lg6 xl6>
                <v-card class="d-flex flex-no-wrap fill-height elevation-5 mx-2">
                  <v-layout align-center>
                    <v-avatar size="100" class="mx-3">
                      <v-img :src="require('@/assets/images/100/guardian003.jpg')"></v-img>
                    </v-avatar>
                    <v-layout column>
                      <a
                        href="http://www.theguardian.com/travel/2013/oct/25/skating-on-sea-ice-in-sweden?INTCMP=SRCH"
                      >
                        <v-card-title class="font-weight-bold caption py-1">The guardian 25 Oct 2013</v-card-title>
                      </a>
                      <v-card-text align="left" class="pt-0 px-3">
                        <p>
                          John Savelid is waiting for me at Stockholm airport holding a strange bag that looks like a rucksack
                          with too many straps. "It's a day sack for skating," he tells me, "but also a life jacket in
                          case you go through."
                        </p>
                      </v-card-text>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>

              <!-- NR 2 -->
              <v-flex xs12 sm12 md12 lg6 xl6>
                <v-card class="d-flex flex-no-wrap fill-height elevation-5 mx-2">
                  <v-layout align-center>
                    <v-avatar size="100" class="mx-3">
                      <v-img :src="require('@/assets/images/100/independent001.jpg')"></v-img>
                    </v-avatar>
                    <v-layout column>
                      <a
                        href="https://www.independent.co.uk/travel/europe/sweden-go-with-the-floe-this-winter-8959544.html"
                      >
                        <v-card-title class="font-weight-bold caption py-1">The Independent 24 Nov 2013</v-card-title>
                      </a>
                      <v-card-text align="left" class="pt-0 px-3">
                        <p>
                          It was the question on all of our minds, but I asked it: "How do you know when the ice isn't safe to skate on?" Niklas, our imperturbable guide, rubbed his chin, looked thoughtful for a moment, then offered up the distilled wisdom of a lifetime spent playing around on frozen water. "When it breaks," he said with a broad smile.
                        </p>
                      </v-card-text>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>

              <!-- NR 3 -->
              <v-flex xs12 sm12 md12 lg6 xl6>
                <v-card class="d-flex flex-no-wrap fill-height elevation-5 mx-2">
                  <v-layout align-center>
                    <v-avatar size="100" class="mx-3">
                      <v-img :src="require('@/assets/images/100/sundaytimes001.jpg')"></v-img>
                    </v-avatar>
                    <v-layout column>
                      <a
                        href="https://www.thetimes.co.uk/article/sea-skating-in-sweden-ml7qvnrmdqm"
                      >
                        <v-card-title class="font-weight-bold caption py-1">Sunday Times 10 Nov 2013</v-card-title>
                      </a>
                      <v-card-text align="left" class="pt-0 px-3">
                        <p>
                          We had skated just over six miles when we reached the edge. The ice just stopped, and the liquid version of the Baltic Sea stretched out to the horizon. I hadn’t expected this sudden, ­unnerving divide. I hadn’t expected to be so far from land. And I hadn’t ­expected to be told that the solid surface I was standing on was only 3in thick.
                        </p>
                      </v-card-text>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>

              <!-- NR 4 -->
              <v-flex xs12 sm12 md12 lg6 xl6>
                <v-card class="d-flex flex-no-wrap fill-height elevation-5 mx-2">
                  <v-layout align-center>
                    <v-avatar size="100" class="mx-3">
                      <v-img :src="require('@/assets/images/100/4seasons001.jpg')"></v-img>
                    </v-avatar>
                    <v-layout column>
                      <a
                        href="http://www.theguardian.com/travel/2013/oct/25/skating-on-sea-ice-in-sweden?INTCMP=SRCH"
                      >
                        <v-card-title class="font-weight-bold caption py-1">4-seasons (German)</v-card-title>
                      </a>
                      <v-card-text align="left" class="pt-0 px-3">
                        <p>
                          Glückliches Schweden: Wenn Seen, Flüsse und Küsten gefrieren, entsteht das schönste Schlittschuh-Revier der Welt. Beim Tour-Skaten gleitet man mit Rucksack und Proviant durch die nordische Einsamkeit, 50 Kilometer täglich sind kein Problem.
                        </p>
                      </v-card-text>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>

              <!-- NR 5 -->
              <v-flex xs12 sm12 md12 lg6 xl6>
                <v-card class="d-flex flex-no-wrap fill-height elevation-5 mx-2">
                  <v-layout align-center>
                    <v-avatar size="100" class="mx-3">
                      <v-img :src="require('@/assets/images/100/skating001.jpg')"></v-img>
                    </v-avatar>
                    <v-layout column>
                      <a
                        href="https://www.irishtimes.com/life-and-style/travel/easy-glider-1.550393"
                      >
                        <v-card-title class="font-weight-bold caption py-1">Irish Times</v-card-title>
                      </a>
                      <v-card-text align="left" class="pt-0 px-3">
                        <p>
                          I take my first steps out on to the frozen waters of the Baltic and my legs lock with fear. All that practice on the Christmas rink feels like a futile flirtation as my Swedish guide gently urges me to put my trust in the long metal “tour skating” blades and slide.
                        </p>
                      </v-card-text>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>

              <!-- NR 6 -->
              <v-flex xs12 sm12 md12 lg6 xl6>
                <v-card class="d-flex flex-no-wrap fill-height elevation-5 mx-2">
                  <v-layout align-center>
                    <v-avatar size="100" class="mx-3">
                      <v-img :src="require('@/assets/images/100/guardian001.jpg')"></v-img>
                    </v-avatar>
                    <v-layout column>
                      <a
                        href="https://www.theguardian.com/travel/2012/nov/09/european-winter-breaks-with-twist"
                      >
                        <v-card-title class="font-weight-bold caption py-1">The Guardian Nov 2009</v-card-title>
                      </a>
                      <v-card-text align="left" class="pt-0 px-3">
                        <p>
                          Escape the circle-skating crowds at Somerset House and ice-skate with a sense of purpose on a four-day trek through south-eastern Sweden's vast network of frozen lakes, with Nature Travels. The trip involves ice-fishing and, if conditions allow, moon-skating.
                        </p>
                      </v-card-text>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>

              <!-- NR 7 -->
              <v-flex xs12 sm12 md12 lg6 xl6>
                <v-card class="d-flex flex-no-wrap fill-height elevation-5 mx-2">
                  <v-layout align-center>
                    <v-avatar size="100" class="mx-3">
                      <v-img :src="require('@/assets/images/100/guardian002.jpg')"></v-img>
                    </v-avatar>
                    <v-layout column>
                      <a
                        href="https://www.theguardian.com/travel/2012/oct/21/holiday-tips-skating-sweden-christmas-cottages-deals"
                      >
                        <v-card-title class="font-weight-bold caption py-1">The Guardian Oct 2012</v-card-title>
                      </a>
                      <v-card-text align="left" class="pt-0 px-3">
                        <p>
                          The skating season is almost upon us, but if the thought of jostling for elbow room with kamikaze teens and boozed-up office workers on a synthetic rink leaves you cold, check out the new wild-skating trip from Swedish tour operator Nature Travels.
                        </p>
                      </v-card-text>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>

              <!-- NR 8 -->
              <v-flex xs12 sm12 md12 lg6 xl6>
                <v-card class="d-flex flex-no-wrap fill-height elevation-5 mx-2">
                  <v-layout align-center>
                    <v-avatar size="100" class="mx-3">
                      <v-img :src="require('@/assets/images/100/southernstar001.jpg')"></v-img>
                    </v-avatar>
                    <v-layout column>
                      <a
                        href="http://www.theguardian.com/travel/2013/oct/25/skating-on-sea-ice-in-sweden?INTCMP=SRCH"
                      >
                        <v-card-title class="font-weight-bold caption py-1">The Southern Star</v-card-title>
                      </a>
                      <v-card-text align="left" class="pt-0 px-3">
                        <p>
                          I am in the middle of a Swedish lake watching winter melt away. The snow has gone and birch trees which cover surrounding islands are starting to bud. I should be worried, given that I am standing on ice, about three kilometres from land, and cracks are literally forming all around me, creating a thudding noise which reverberates across the bay, and through my body.
                        </p>
                      </v-card-text>
                    </v-layout>
                  </v-layout>
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

  data() {
    return {
      drawer: null
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
.one-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>