<template>
    
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="lastname"
      :rules="nameRules"
      label="Apellido paterno"
      required
    ></v-text-field>

    <v-text-field
      v-model="mlastname"
      :rules="nameRules"
      label="Apellido materno"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Selecciona materia"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Estás seguro que deseas crear?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="green"
      @click="validate"
    >
      Validate
    </v-btn>

  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Materia 1',
        'Materia 2',
        'Materia 3',
        'Materia 4'
      ],
      checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      }
    }
  }
</script>

<style>


</style>
