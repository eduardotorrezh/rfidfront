<template>
    <v-app>

    <v-content>
        <h1>Listado de profesores</h1>
        
            <v-spacer></v-spacer>
            <v-btn style="margin-left: 80%;" class="ma-2" color="green" :to="{ name: 'nedit' }" dark>Crear Profesor
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
            <td >{{ props.item.apellido_paterno }}</td>
            <td >{{ props.item.apellido_materno }}</td>
            <td >{{ props.item.matricula }}</td>
            <td > <v-btn class="ma-2" color="primary" :to="{ name:'pedit', params: {profid: props.item.id} }" dark>Editar
        <v-icon dark right>check_circle</v-icon>
      </v-btn><v-btn class="ma-2"  color="red" :to="{ name:'dedit', params: {profid: props.item.id} }" dark >Eliminar <v-icon dark right>block</v-icon> </v-btn></td> 
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
          { text: 'Apellido Paterno', value: 'paterno' },
          { text: 'Apellido Materno', value: 'materno' },
          { text: 'Matricula', value: 'matricula' },
          { text: 'Acciones', value: 'actions' },


        ],
        profesores: [],

      }
    }, methods:{
      getProfesores(){
       
        axios.get('http://localhost:3000/profesor')
        .then((response) => {
          this.profesores = response.data.r
          console.log(response.data.r)
        }).then(error => console.log(error));
      },
      // deleteprofesor(){
      //   const idroute = props.item.id
      //   console.log("Esta cosa es lo que tiene el rout.params "+idroute)
      //   const dataq = { id: 9}
      //   const path = 'http://localhost:3000/profesorDelete'
      //   axios.post(path,dataq).then((response) => {
      //           console.log("Se eliminó esta wea")
      //           })
      //       }
    },
    created(){
      this.getProfesores()
    }
  }
</script>


<style>

</style>
