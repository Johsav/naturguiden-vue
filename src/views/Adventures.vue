<template>
  <v-container fluid grid-list-md style="background-color: #00ff00">
    <v-tabs fixed-tabs grow>
      <v-tab>Ice-skating</v-tab>
      <v-tab>Kayak</v-tab>
      <v-tab>Hiking</v-tab>
    </v-tabs>
  <v-layout justify-start row fill-height>

    <v-layout d-flex sm3 md4 lg4 justify-start column fill-height>
      
      <v-flex >
        <v-card>
          <v-img
            class="white--text"
            height="300px"
            src="../images/500/skating_2018_003.jpg"
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
              <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>

        </v-card>

        <v-card color="indigo" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>andra card uppifrån till vänster</v-card-text>
        </v-card>
      </v-flex>


    </v-layout>
    <v-layout d-flex xs12 sm9 md8 lg8 justify-start column fill-height>

      <v-flex >

        <v-card color="purple" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>längst upp till höger</v-card-text>
        </v-card>
        <v-card color="indigo" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>andra card uppifrån till höger</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-layout>
  </v-container>
</template>
