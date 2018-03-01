<template>
  <v-dialog v-model="showed" :width="600" :scrollable="true" :lazy="true">
    <v-card>
      <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="Name"
        v-model="name"
        required
      />
        <file-input
          accept="image/*"
          ref="fileInput"
          @input="getUploadedFile"
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
  import FileInput from './FileInput'

  export default {
    name: 'new-card',
    props: ['show'],
    components: {FileInput},
    computed: {
      showed: {
        get: function () {
          return this.show
        },
        set: function (newValue) {
          if (!newValue) {
            this.$emit('closed')
          }
        }}
    },
    data: () => ({
      valid: true,
      name: ''
    }),
    methods: {
      getUploadedFile (e) {
        this.image = e
        console.log(e)
      },
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
