<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-tile v-for="item in drawerLinks" :key="item.title" :to="{path: item.link}">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark app color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="margin-right:30px">
        <span>Naturguiden</span>
      </v-toolbar-title>
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
          <v-icon>apps</v-icon>
        </v-btn>
      </router-link>
      <v-btn icon>
        <v-icon>chat</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content app class="bg-red">
      
        <router-view></router-view>
    
    </v-content>

    <v-footer dark app absolute height="auto" color="secondary">
      <v-container fluid>
        <v-layout align-center justify-start row fill-height wrap>
          <v-flex xs12 sm4>Naturguiden1</v-flex>
          <v-flex xs12 sm4>Naturguiden2</v-flex>
          <v-flex xs12 sm4>Naturguiden3</v-flex>
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
        { title: "Home", icon: "dashboard", link: "/" },
        { title: "About", icon: "question_answer", link: "/about" },
        { icon: "date_range", title: "Event Calendar", link: "calendar" }
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
  background-color: red;
}
</style>