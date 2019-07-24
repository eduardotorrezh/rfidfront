<template>
    <v-app>
    <v-content>
        <h1>Listado de materias</h1>
            <v-spacer></v-spacer>
            <v-btn style="margin-left: 80%;" class="ma-2" color="green" :to="{ name: 'matnew' }" dark>Crear Materia
        <v-icon dark>backup</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
            <v-container>
            <v-data-table
          :headers="headers"
          :items="profesores"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.nombre }}</td>
            <td >{{ props.item.id_profesor }}</td>
            <td > <v-btn class="ma-2" color="primary" dark>Editar
        <v-icon dark right>check_circle</v-icon>
      </v-btn><v-btn class="ma-2" color="red" dark>Eliminar <v-icon dark right>block</v-icon> </v-btn></td> 
          </template>
        </v-data-table>
    </v-container>
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
          { text: 'id_profesor', value: 'paterno' },
        //   { text: 'Apellido Materno', value: 'materno' },
        //   { text: 'Matricula', value: 'matricula' },
          { text: 'Acciones', value: 'actions' },


        ],
        profesores: []
      }
    }, methods:{
      getProfesores(){
       
        axios.get('http://localhost:3000/materia')
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
