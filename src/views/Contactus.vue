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
            <v-card-text class="display-1">
              Naturguiden Svenska Äventyr
            </v-card-text>
            <v-card-text>
              <p>Munkhagsgatan 120B<br />
              587 25 LINKÖPING<br />
              SWEDEN</p>
              <p></p>
              <p>+46 70 53 53 630<br />
              <a href="mailto:info@naturguiden.se">info@naturguiden.se</a></p>

              <p></p>
              <p><a href="https://www.naturguiden.com/">www.naturguiden.com</a><br />
              <a href="https://www.naturguiden.se/">www.naturguiden.se</a></p>

              <h3>Facebook</h3>
              <p><a href="https://www.facebook.com/Naturguiden/">www.facebook.com/Naturguiden</a></p>
            </v-card-text>
          </v-card>
        
          <v-card class="mt-3">
            <v-card-title primary-title>
              <h3 class="headline">Contact form</h3>
            </v-card-title>
            <form class="px-3">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="phone"
                :error-messages="phoneErrors"
                label="Phone"
                
                @change="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="message"
                :error-messages="messageErrors"
                label="Message"
                required
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"
              ></v-text-field>

              <v-btn @click="submit">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </form>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import LeftSideColumn from "@/components/LeftSideColumn.vue";

  export default {
    components: {
    LeftSideColumn
    },

    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },

   

    data: function()  {
      name: ''
      email: ''
      phone: ''
      message: ''
    
     return {
      drawer: null,
     }
    },
  

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
      getImgUrl(img) {
      return require("@/assets/images/" + img);
    }
    }
  }


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