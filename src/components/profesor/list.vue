<template>
    <v-app>

    <v-content>
        <h1>Listado de profesores</h1>
            <v-spacer></v-spacer>
            <v-container>
            <v-data-table
          :headers="headers"
          :items="profesores"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.nombre }}</td>
            <td >{{ props.item.apellido_paterno }}</td>
            <td >{{ props.item.apellido_materno }}</td>
            <td >{{ props.item.matricula }}</td>
            <td > <v-btn  color="green">Edit </v-btn> <v-btn  color="red">Delete </v-btn></td> 
          </template>
        </v-data-table>
    </v-container>
    <v-btn  color="green">
            Validate
        </v-btn>
    </v-content>
    
    
</v-app>  
</template>

<script>
import axios from 'axios';
export default {
    data () {
      return {
        headers: [
          {
            text: 'Nombre'
          },
          { text: 'Apellido Paterno', value: 'paterno' },
          { text: 'Apellido Materno', value: 'materno' },
          { text: 'Matricula', value: 'matricula' },
          { text: 'Acciones', value: 'actions' },


        ],
        profesores: []
      }
    }, methods:{
      getProfesores(){
       
        axios.get('http://localhost:3000/profesor')
        .then((response) => {
          this.profesores = response.data.r
          console.log(response.data.r)
        }).then(error => console.log(error));
      }
    },
    created(){
      this.getProfesores()
    }
  }
</script>


<style>

</style>
