<template style="display:none">
  <v-app>

    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list class="pt-0" classdense>
        <v-list-tile v-for="item in drawerLinks" :key="item.title" :to="{path: item.link }">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="subtitle-1">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark app color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/">
        <v-img :src="require('./assets/name.png')" height="48" width="156" contain></v-img>
      </router-link>

      <!-- NY LÖSNING UTAN SUBMENU  ---->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Our Adventures</span>
          </v-btn>
        </template>

        <v-list v-for="item in items_2" :key="item.title" class="text-xs-left py-0">
          <v-menu offset-x right>
            <template v-slot:activator="{ on }">
              <v-list-tile v-on="on" :on_click="close_m()" router :to="item.link">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-menu>
        </v-list>
      </v-menu>

      <v-toolbar-items v-for="item in toolbarLinks" :key="item.title" class="hidden-sm-and-down">
        <v-btn flat :to="{path: item.link}">{{ item.title }}</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <router-link to="/contact">
        <v-btn icon>
          <v-icon>contact_phone</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>

    <v-content app>
      <!-- Innanför v-content ligger koden för de olika sidorna -->
      <router-view></router-view>
    </v-content>
    <div>
      <!-- Needed to avoid footer overwrite lower part of page -->
      <v-footer dark app absolute :height="footerHeight" color="secondary">
        <v-container fluid>
          <v-layout align-center justify-start row fill-height wrap>
            <v-flex xs6 sm4 md4 lg2 xl2>
              <v-img class="ma-auto" width="100" :src="require('@/assets/images/Logo_RGB.png')"></v-img>
            </v-flex>
            <v-flex xs6 sm4 md4 lg2 xl2>
              Naturguiden
              <br />Munkhagsgatan 120B
              <br />587 25 LINKÖPING
              <br />SWEDEN
            </v-flex>
            <v-flex xs6 sm4 md4 lg2 xl2>
              +46 70 53 53 630
              <br />info@naturguiden.com
              <br />www.naturguiden.com
            </v-flex>
            <v-flex xs6 sm4 md4 lg2 xl2>
              <router-link to="/about" class="white--text">About us</router-link>
              <br />
              <router-link to="/contact" class="white--text">Send an inquiry</router-link>
            </v-flex>
            <v-flex xs6 sm4 md4 lg2 xl2>
              <v-img
                class="ma-auto"
                width="100"
                :src="require('@/assets/images/naturturismforetagen-logo.svg')"
              ></v-img>
            </v-flex>
            <v-flex xs6 sm4 md4 lg2 xl2>
              <v-img
                class="ma-auto"
                width="100"
                :src="require('@/assets/images/logga_upplevelser.svg')"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: null,
      drawerLinks: [
        { title: "Home", icon: "home", link: "/" },
        { title: "Our Adventures", icon: "terrain", link: "/adventures" },
        { title: "Information", icon: "info", link: "/info" },
        { title: "About us", icon: "pets", link: "/about" },
        { title: "Contact us", icon: "phone", link: "/contact" }
      ],
      toolbarLinks: [
        { title: "Information", link: "/info" },
        { title: "About us", link: "/about" },
        { title: "Contact us", link: "/contact" }
      ],

      items_2: [
        { title: "All our our adventures tour", link: "/adventures" },

        {
          title: "Nordic skating - Open tour",
          link: "/adventures/skating/weekend"
        },
        {
          title: "Nordic skating - Private tour",
          link: "/adventures/skating/private"
        },

        { title: "Kayak - Open tour", link: "/adventures/kayak/weekend" },
        { title: "Kayak - Private tour", link: "/adventures/kayak/private" },

        { title: "Hiking - Open tour", link: "/adventures/hiking/eightdays" },
        { title: "Hiking - Private tour", link: "/adventures/hiking/private" },

        {
          title: "Cross country skiing - Open tour",
          link: "/adventures/skiing/weekend"
        },
        {
          title: "Cross country skiing - Private tour",
          link: "/adventures/skiing/private"
        },
        {
          title: "Cross country skiing - Winter adventures",
          link: "/adventures/skiing/adventures"
        }
      ],
      mini: false,
      right: null
    };
  },

  computed: {
    footerHeight() {
      switch (this.$vuetify.breakpoint.name) {
        default:
        case "xs":
          return "330";
        case "sm":
          return "300";
        case "md":
          return "300";
        case "lg":
          return "200";
        case "xl":
          return "200";
      }
    }
  },

  methods: {
    close_m(parentMenuIndex) {
      if (arguments.length) {
        const parentMenu = this.$refs.menuRef[parentMenuIndex];
        parentMenu.isActive = false;
      }
    }
  }
};
</script>

<style scoped>
.bg-red {
  /*background-color: red;*/
}
.plain-text {
  text-decoration: none;
}
</style>

<style lang="scss" src="./globals.scss">
</style>
