<template>
  <v-card>
    <v-card-title class="d-block grey lighten-1">BOOKNING / CONTACT</v-card-title>
    <v-card-text class="subheading">
      Make a Booking or send a Request.
      <br />Looking forward to hear from you!
    </v-card-text>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      form
      class="pl-3"
      @submit.prevent
    >
      <v-text-field
        class="compact-form"
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        class="compact-form"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field class="compact-form" v-model="phone" :rules="phoneRules" label="Phone"></v-text-field>

      <div class="text-xs-left pt-3">I want to book a private {{activity}} tour ..</div>

      <!-- START DATE ---------------------------->
      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        :return-value.sync="date1"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            class="compact-form"
            v-model="date1"
            label="Start date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date1" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
        </v-date-picker>
      </v-menu>

      <!-- END DATE  ------------------------------->
      <v-menu
        ref="menu2"
        v-model="menu2"
        :close-on-content-click="false"
        :return-value.sync="date2"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            class="compact-form"
            v-model="date2"
            label="End date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date2" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
        </v-date-picker>
      </v-menu>

      <div class="text-xs-left pt-3">Send a Message or Request</div>

      <v-textarea
        class="compact-form"
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

      <v-btn text small color="blue-grey darken-2" class="white--text" @click="submit">Submit</v-btn>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  name: "booking-private",
  props: {
    activity: String
  },  
  
  data: () => ({
    valid: true,

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
    phone: "",
    phoneRules: [v => /\d{7,}$/.test(v) || "Phone must only contain digits, and at least seven digits"],

    message: "",
    messageRules: [
      v => !!v || "A message is required",
      v =>
        (v && v.length <= 500) || "The message must be less than 500 characters"
    ],
    gdpr: false,
    checkbox: false,
    group: false,

    date1: new Date().toISOString().substr(0, 10),
    menu1: false,
    date2: new Date().toISOString().substr(0, 10),
    menu2: false,

  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      if (this.$refs.form.validate()) {
        axios
          .post("/post.php", {
            name_: this.name,
            email_: this.email,
            phone_: this.phone,
            message_: this.message,
            date1_: this.date1,
            date2_: this.date2,
            group_: this.activity,
            gdpr_: this.gdpr

          })
          
          .then(function() {
            alert(
              'Thank you for getting in touch! \r\nWe appreciate you contacting us. We will get back in touch with you soon!'
            );
            this.$refs.form.reset();
          })
          .catch(function(error) {
            if (error.response) {
              alert(
                'oops .. something went wrong.\r\nTry again or send us a e-mail instead'
              );
            }
          });
        this.$refs.form.reset();
      } else {
        alert('Sorry, but some information is missing.');
      }
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
.round-img {
  border-radius: 50px;
}
.compact-form {
  transform: scale(0.8);
  transform-origin: left;
}
</style>

