<template>
    <v-app>
    <v-content>
        <v-toolbar color="#FFFF00">
            <v-btn class="ma-2" text icon color="white" :to="{ name:'start' }">
                <v-icon>home</v-icon>
            </v-btn>
            <v-toolbar-title>Listado de materias</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn color="#FFFF00" text :to="{ name:'pList' }" >Profesores</v-btn>
                <v-btn color="#FFFF00" text :to="{ name:'aList' }">Alumnos</v-btn>
                <v-btn color="#FFFF00" text :to="{ name:'asList' }">Materias</v-btn>
                <v-btn color="#FFFF00" text :to="{ name:'hList' }">Horarios</v-btn>
                <v-btn color="#FFFF00" text :to="{ name:'asis' }">Asistencia</v-btn>
            </v-toolbar-items>
        </v-toolbar>
            <v-spacer></v-spacer>
      <v-spacer></v-spacer>
            <v-container>
            <v-data-table
          :headers="headers"
          :items="Materia"
          class="elevation-1"
        >
          <template v-slot:items="props" >
            <td>{{ props.item.asignatura }}</td>
            <td>{{ props.item.nombre + " " +props.item.apellido_paterno + " " +props.item.apellido_materno }}</td>      
            <td > <v-btn fab small dark class="ma-2" color="blue"   :to="{ name:'maedit', params: {materiaid: props.item.id} }">
              <v-icon>edit</v-icon>   
            </v-btn>
            <v-btn fab small dark class="ma-2" color="red"  :to="{ name:'madel', params: {materiaid: props.item.id} }">
              <v-icon>delete</v-icon>
              </v-btn></td> 
          </template>
        </v-data-table>
        <v-btn fab dark style="margin-left: 80%;" class="ma-2" color="green" :to="{ name: 'matnew' }" ><v-icon>add</v-icon>
        
        </v-btn>
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
          { text: 'Profesor', value: 'paterno' },
          { text: 'Acciones', value: 'actions' },


        ],
        Materia: [],
        Profesores:[]
      }
    }, methods:{
      getMateria(){
       
        axios.get('http://localhost:3000/materiaProfesor')
        .then((response) => {
          this.Materia = response.data.r
          console.log(response.data.r)
        }).then(error => console.log(error));
      },
    },
    created(){
      this.getMateria()
      
    }
  }
</script>


<style>

</style>
