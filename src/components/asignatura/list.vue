<template>
    <v-app>
    <v-content>
        <v-toolbar color="#FFFF00">
            <v-toolbar-title>Listado de materias</v-toolbar-title>
        </v-toolbar>
            <v-spacer></v-spacer>
            <v-btn fab dark style="margin-left: 80%;" class="ma-2" color="green" :to="{ name: 'matnew' }" ><v-icon>add</v-icon>
        
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
            <td > <v-btn fab small dark class="ma-2" color="blue"   :to="{ name:'maedit', params: {materiaid: props.item.id} }"><v-icon>edit</v-icon>
        
      </v-btn><v-btn fab small dark class="ma-2" color="red"  :to="{ name:'madel', params: {materiaid: props.item.id} }"><v-icon>delete</v-icon></v-btn></td> 
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
