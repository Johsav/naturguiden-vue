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

        <v-list-tile v-for="item in drawerLinks" :key="item.title" :to="{path: item.link}">
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

    <v-content app class="bg-red">  <!-- Innanför v-content ligger koden för de olika sidorna -->
      <router-view></router-view>
    </v-content>

    <v-footer dark app absolute height="auto" color="secondary">
      <v-container fluid>
        <v-layout align-center justify-start row fill-height wrap>
          <v-flex xs6 sm4 md3 lg2 xl2>
            <v-img
                    width="100"
                    class="text-xs-center"
                    :src="require('@/assets/images/Logo_RGB.png')"
                  >
                  </v-img>
          </v-flex>        
          <v-flex xs6 sm4 md4 lg2 xl2>Naturguiden<br />Munkhagsgatan 120B<br />587 25 LINKÖPING<br />SWEDEN</v-flex>
          <v-flex xs6 sm4 md4 lg2 xl2>+46 70 53 53 630<br />info@naturguiden.com<br />www.naturguiden.com</v-flex>
          <v-flex xs6 sm4 md4 lg2 xl2>About Naturguiden<br />Send an inquiry</v-flex>
          <v-flex xs6 sm4 md4 lg2 xl2> 
            <v-img
                    width="100" 
                    justify-center
                    align-center             
                    :src="require('@/assets/images/naturturismforetagen-logo.svg')">
                    </v-img>
          </v-flex>
          <v-flex xs6 sm4 md3 lg2 xl2> 
            <v-img
                    width="100"   
                    justify-center
                    align-center              
                    :src="require('@/assets/images/logga_upplevelser.svg')">
                    </v-img>
          </v-flex>                
        </v-layout>
      </v-container>
    </v-footer>
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
        { title: "About us", icon: "pets", link: "/about" },
        { title: "Information", icon: "info", link: "/info" },
        { title: "Our Adventures", icon: "terrain", link: "/adventures" }
      ],
      toolbarLinks: [
        { title: "Our adventures", link: "/adventures" },
        { title: "Information", link: "/info" },
        { title: "About us", link: "/about" }
      ],
      mini: false,
      right: null
    };
  }
};
</script>

<style scoped>
.bg-red {
  /*background-color: red;*/
}
</style>

<style lang="scss" src="./globals.scss">
</style>
