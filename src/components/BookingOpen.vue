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
      method="post"
      action="post.php"
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

      <div class="text-xs-left pt-3">I want to book the Open tour ..</div>

      <v-radio-group v-model="group">
        <v-radio v-for="item in items" :key="item.item" :label="item.item" :value="item.item"></v-radio>
      </v-radio-group>

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

  data: () => ({
    valid: true,
    submitted: false,

    items: [
      { item: "23 - 26 January: Skating Weekend, normal group" },
      { item: "30 Jan - 2 Febr: Skating Weekend, good group" },
      { item: "6 - 9 February: Skating Weekend, normal group" },
      { item: "13 - 16 February: Skating Weekend, good group" },
      { item: "20 - 23 February: Skating Weekend, normal group"},
      { item: "20 - 23 February: Skating Weekend, good group"},
      { item: "27 Febr - 1 March: Skating Weekend, normal group" },
      { item: "6 - 11 April:  Winter adventure week" },
      { item: "25 - 28 June: Kayak weekend" },
      { item: "2 - 9 August:  Hiking 8 days" },
      { item: "20 - 23 August:  Kayak weekend" }
    ],

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
    group: false
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
            group_: this.group,
            gdpr_: this.gdpr
          })
          .then(function(response) {
            console.log(response);
            alert(
              "Thank you for getting in touch! \r\nWe appreciate you contacting us. We will get back in touch with you soon!"
            );
            this.$refs.form.reset();
          })
          .catch(function(error) {
            console.log(error);
            if (error.response) {
              alert(
                "oops .. something went wrong.\r\nTry again or send us a e-mail instead"
              );
            }
          });
        this.$refs.form.reset();
      } else {
        alert("Sorry, but some information is missing.");
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
