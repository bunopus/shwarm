<template>
  <v-dialog v-model="showed" :width="600" :scrollable="true" :lazy="true">
    <v-card>
      <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="Название"
        v-model="title"
        :rules="titleRules"
        required
      />
        <file-input
          accept="image/*"
          v-model="image"
          select-label="Выберите картинку"
          remove-label="Другая"
        />
        <v-text-field
          label="Оценка"
          v-model="score"
          type="number"
          :rules="scoreRules"
          required
        />
        <v-text-field
          label="Описание"
          v-model="description"
          :rules="descRules"
          multi-line
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
          // TODO looks wierd
          if (!newValue) {
            this.$emit('closed')
          }
        }}
    },
    data: () => ({
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'Название обязательно',
        v => v.length >= 5 || 'Название должно быть не меньше 5 символов'
      ],
      image: '',
      score: '',
      scoreRules: [
        v => !!v || 'Оценка обязательна',
        v => v <= 5 || 'Слишком хорошо, чтобы быть правдой'
      ],
      description: '',
      descRules: [
        v => !!v || 'Описание обязательно',
        v => v.length >= 10 || 'Описание должно быть не меньше 5 символов'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          let review = {
            'title': this.title,
            'score': this.score,
            'image': this.image,
            'text': this.description
          }
          this.$store.dispatch('addReview', review).then(() => {
            this.clear()
            this.showed = false
          })
        }
      },
      clear () {
        this.$refs.form.reset()
        // TODO почему-то reset не убирает image
        this.image = ''
      }
    }
  }
</script>


<style scoped>

</style>
