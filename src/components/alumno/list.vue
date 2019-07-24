<template>
    <v-app>

    <v-content>
        <h1>Listado de alumnos</h1>
        
            <v-spacer></v-spacer>
            <v-btn style="margin-left: 80%;" class="ma-2" color="green" :to="{ name: 'nalumno' }" dark>Crear Alumno
        <v-icon dark>backup</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
            <v-container>
            <v-data-table
          :headers="headers"
          :items="alumnos"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.nombre }}</td>
            <td >{{ props.item.apellido_paterno }}</td>
            <td >{{ props.item.apellido_materno }}</td>
            <td >{{ props.item.matricula }}</td>
            <td >{{ props.item.rfid }}</td>

            <td > <v-btn class="ma-2" color="primary" :to="{ name:'aedit', params: {alumnoid: props.item.rfid} }" dark>Editar
        <v-icon dark right>check_circle</v-icon>
      </v-btn><v-btn class="ma-2"  color="red" :to="{ name:'aldelete', params: {alumnoid: props.item.rfid} }" dark >Eliminar <v-icon dark right>block</v-icon> </v-btn></td> 
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
          { text: 'RFID', value: 'rfid' },
          { text: 'Acciones', value: 'actions' },


        ],
        alumnos: [],

      }
    }, methods:{
      getAlumnos(){
       
        axios.get('http://localhost:3000/alumno')
        .then((response) => {
          this.alumnos = response.data.r
          console.log(response.data.r)
        }).then(error => console.log(error));
      }
    },
    created(){
      this.getAlumnos()
    }
  }
</script>


<style>

</style>
