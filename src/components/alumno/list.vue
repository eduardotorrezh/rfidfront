<template>
    <v-app>

    <v-content>
        <v-toolbar  color="#FFFF00">
            <v-toolbar-title color="">Listado de alumnos</v-toolbar-title>
        </v-toolbar>
            <v-spacer></v-spacer>
            <v-container>
            <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.nombre }}</td>
            <td class="text-xs-right">{{ props.item.apellido_paterno }}</td>
            <td class="text-xs-right">{{ props.item.apellido_materno }}</td>
            <td class="text-xs-right">{{ props.item.matricula }}</td>
            <td class="text-xs-right">{{ props.item.rfid }}</td>
            
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
                  text: 'Nombre (s)',
                  // align: 'left',
                  // sortable: false,
                  value: 'name'
                },
                { text: 'Apelido Paterno', value: 'apellido_paterno' },
                { text: 'Apellido Materno', value: 'apellido_materno' },
                { text: 'Matrícula', value: 'matrícula' },
                { text: 'RFID', value: 'rfid' },
                { text: 'Acciones', value: 'name' }
              ],
              desserts: [],
              alumno: 
              {
                nomre: '',
                apellido_paterno: '',
                apellido_materno: '',
                matricula: '',
                rfid: ''
              }
            }
          }, methods:{
      getAlumno() {

              axios.get('http://localhost:3000/alumno')
                .then((response) => {
                  this.desserts = response.data.r
                  console.log(response.data)
                }).then(error => console.log(error));
            }
          },
    created(){
      this.getAlumno()
    }
        }
</script>

<style>

</style>
