<template>
<v-app>
    <v-content>
        <h1>Cargar materia</h1>
        <v-spacer></v-spacer>
            <v-container>
        <v-form>
    <v-text-field
      :counter="10"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      label="E-mail"
      required
    ></v-text-field>

    <!-- <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Alumno es requerido']"
      label="Alumno"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

    

    <v-btn>
      Validate
    </v-btn>

  </v-form>
            </v-container>
    </v-content>
</v-app>
    
</template>

<script>
  export default {
    data: () => ({
      select: null,
      items: [],
      checkbox: false,
      
    }),

    methods: {
        getAlumnos(){
       
        axios.get('http://localhost:3000/alumno')
        .then((response) => {
          this.items = response.data.r.
          console.log(response.data.r)
        }).then(error => console.log(error));
      },
     },
  }
</script>

<style>
body{
background: #74ebd5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #ACB6E5, #74ebd5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>