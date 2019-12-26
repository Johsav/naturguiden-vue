<template>
  <v-container fluid grid-list-md class="pa-3">
    <v-layout row wrap fill-height>
      <v-flex md4 lg3 xl3 class="hidden-sm-and-down">
        <LeftSideColumn></LeftSideColumn>
      </v-flex>

      <v-flex xs12 sm12 md8 lg9 xl9 class="py-3">
        <v-flex>
          <v-card class="text-xs-left">
            <v-card-title primary-title>
              <h3 class="headline">Contact information</h3>
            </v-card-title>
            <v-card-text class="display-1">Naturguiden Svenska Äventyr</v-card-text>
            <v-card-text>
              <p>
                Munkhagsgatan 120B
                <br />587 25 LINKÖPING
                <br />SWEDEN
              </p>
              <p></p>
              <p>
                +46 70 53 53 630
                <br />
                <a href="mailto:info@naturguiden.se">info@naturguiden.se</a>
              </p>

              <p></p>
              <p>
                <a href="https://www.naturguiden.com/">www.naturguiden.com</a>
                <br />
                <a href="https://www.naturguiden.se/">www.naturguiden.se</a>
              </p>

              <h3>Facebook</h3>
              <p>
                <a href="https://www.facebook.com/Naturguiden/">www.facebook.com/Naturguiden</a>
              </p>
            </v-card-text>
          </v-card>

          <v-card class="mt-3">
            <v-card-title primary-title>
              <h3 class="headline">Contact form</h3>
            </v-card-title>

            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              method="post"
              action="post.php"
              form
              @submit.prevent
            >
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-textarea
                v-model="message"
                :counter="500"
                :rules="messageRules"
                label="Message / Request"
                required
              ></v-textarea>

              <v-checkbox
                v-model="gdpr"
                label="I agree to that my contact information is stored. I will only be used by Naturguiden to respond to your inquiry."
              ></v-checkbox>

              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must check this box to continue']"
                label="I'm not a Robot!"
                required
              ></v-checkbox>

              <v-btn text small color=" blue-grey lighten-1" class="white--text" @click="reset">Reset Form</v-btn>

              <v-btn
                text
                small
                color="blue-grey darken-2"
                class="white--text"
                @click="submit"
              >Submit</v-btn>
            </v-form>

          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LeftSideColumn from "@/components/LeftSideColumn.vue";
import axios from "axios";

export default {
  components: {
    LeftSideColumn
  },

  data: () => ({
    valid: true,
    submitted: false,

    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 40) || "Name must be less than 40 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [
      v => !!v || "A message is required",
      v =>
        (v && v.length <= 500) || "The message must be less than 500 characters"
    ],
    gdpr: false,
    checkbox: false
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      if (this.$refs.form.validate()) {
        axios .post("/post.php", {
          name_: this.name,
          email_: this.email,
          message_: this.message,
          gdpr_: this.gdpr
        })
        .then(function(response) {
          console.log(response);
          alert('Thank you for getting in touch! \r\nWe appreciate you contacting us. We will get back in touch with you soon!');
          this.$refs.form.reset();
        })
        .catch(function(error) {
          console.log(error);
          if (error.response)  {
            alert( 'oops .. something went wrong.\r\nTry again or send us a e-mail instead');
          }  
        });
        this.$refs.form.reset();
      } else {
        alert("Sorry, but some information is missing.");
      }

    },

    getImgUrl(img) {
      return require("@/assets/images/" + img);
    }
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