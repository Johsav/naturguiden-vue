<template>
  <v-container fluid class="no-padding">
    <v-layout row>
      <v-flex xl3 lg4 md4 class="hidden-sm-and-down">
        <v-container fluid grid-list-md class="no-padding-right">
          <v-layout column>
            <v-flex>
              <v-card>
                <v-img
                  class="white--text"
                  height="300px"
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">Great</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span>Most weekends are almost fully booked already, but we do have some vacancies. And we can also offer skating tours during the first half of the week - Monday until Wednesday.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="orange">Nordic Skating</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card color="indigo" dark height="200">
                <v-card-title primary class="title">Lorem</v-card-title>
                <v-card-text>andra card uppifrån till vänster</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 sm12 md8 lg8 xl9>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
.no-padding-right{
  padding-right: 0;
}
.no-padding{
  padding: 0;
}
.no-padding-bottom{
  padding-bottom: 0;
}
</style>
