<template>
  <v-dialog v-model="showed" :width="600" :scrollable="true" :lazy="true">
    <v-card>
      <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="10"
        required
      />

      <v-btn
        @click="submit"
        :disabled="!valid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
      </v-card-text>    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'new-card',
    props: ['show'],
    computed: {
      showed: { get: function () {
        return this.show
      },
        // setter
        set: function (newValue) {
          if (!newValue) {
            this.$emit('closed')
          }
        }}
    },
    data: () => ({
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      name: ''
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          // axios.post('/api/submit', {
          //   name: this.name,
          //   email: this.email,
          //   select: this.select,
          //   checkbox: this.checkbox
          // })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>


<style scoped>

</style>
