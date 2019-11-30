<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-toolbar flat color="primary" dark>
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="text-xs-center">MENU</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon @click.stop="drawer = false">close</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" classdense>
        <v-divider></v-divider>

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

      <!-- Old menu without submenu      <v-menu offset-y>
        <v-btn flat slot="activator">
          <v-icon left>expand_more</v-icon>
          <span>Our Adventures</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in dropdownLinks" :key="item.title" router :to="item.link">
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      -->

      <!-- EGEN TEST ------------------------>
      <v-menu offset-y :close-on-select="true">
        <v-btn flat slot="activator">
          <v-icon left>expand_more</v-icon>
          <span>Our Adventures</span>
        </v-btn>
        <v-list class="py-0">
          <v-list-tile>
            <router-link to="/adventures">
              <v-list-tile-title class="black--text plain-text">All our adventures</v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
        <v-list v-for="item in items" :key="item.title" class="text-xs-left py-0">
          <v-menu offset-x right open-on-hover>
            <v-list-tile slot="activator">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
            <v-list dense>
              <v-list-tile
                v-for="subItem in item.items"
                :key="subItem.title"
                @click="close"
                router
                :to="subItem.link"
              >
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-list>
      </v-menu>

      <v-toolbar-items v-for="item in toolbarLinks" :key="item.title" class="hidden-sm-and-down">
        <v-btn flat :to="{path: item.link}">{{ item.title }}</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <router-link to="/about">
        <v-btn icon>
          <v-icon>credit_card</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn icon>
          <v-icon>chat</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>

    <v-content app class="bg-red">
      <!-- Innanför v-content ligger koden för de olika sidorna -->
      <router-view></router-view>
    </v-content>
    <div>
      <!-- Needed to avoid footer overwrite lower part of page -->
      <v-footer dark app absolute height="auto" color="secondary">
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
      dropdownLinks: [
        { title: "All our adventures", link: "/adventures/" },
        {
          title: "Nordic skating",
          sublinks: [
            { sub: "Open tour", link: "/adventures/skating/weekend" },
            { sub: "Private tour", link: "/adventures/skating/private" }
          ]
        },
        { title: "Nordic skating", link: "/adventures/skating/weekend" },
        { title: "Kayak", link: "/adventures/kayak/weekend" },
        { title: "Hiking", link: "/adventures/hiking/weekend" },
        { title: "Back country skiing", link: "/adventures/skiing/adventures" }
      ],

      items: [
        {
          title: "Nordic skating",
          items: [
            { title: "Open tour", link: "/adventures/skating/weekend" },
            { title: "Private tour", link: "/adventures/skating/private" }
          ]
        },
        {
          title: "Kayak",
          items: [
            { title: "Open tour", link: "/adventures/kayak/weekend" },
            { title: "Private tour", link: "/adventures/kayak/private" }
          ]
        },
        {
          title: "Hiking",
          items: [
            { title: "Open tour", link: "/adventures/hiking/eightdays" },
            { title: "Private tour", link: "/adventures/hiking/private" }
          ]
        },
        {
          title: "Cross country skiing",
          items: [
            { title: "Open tour", link: "/adventures/skiing/weekend" },
            { title: "Private tour", link: "/adventures/skiing/private" },
            {
              title: "Winter adventures",
              link: "/adventures/skiing/adventures"
            }
          ]
        }
      ],
      mini: false,
      right: null
    };
  },

  methods: {
    route(parentMenuIndex) {
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
