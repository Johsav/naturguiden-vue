<template>
  <div>
    <v-container fluid grid-list-md style="background-color: #00ff00" class="no-padding-bottom">
      <v-tabs fixed-tabs grow>
        <v-tab>Ice-skating</v-tab>
        <v-tab>Kayak</v-tab>
        <v-tab>Hiking</v-tab>
      </v-tabs>
    </v-container>

    <LeftSideColumn>
      <v-container fluid grid-list-md>
            <v-layout column>
              <v-flex>
                <v-card color="indigo" dark>
                  <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex>
                <v-card color="red lighten-2" dark>
                  <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
    </LeftSideColumn>
  </div>
</template>

<script>

  import LeftSideColumn from '../components/LeftSideColumn'

export default {
      components: {
      LeftSideColumn
    },
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
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


