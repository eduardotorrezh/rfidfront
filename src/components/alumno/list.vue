<template>
  <v-app>

    <v-content>
      <v-toolbar color="#FFFF00">
        <v-btn class="ma-2" text icon color="white" :to="{ name:'start' }">
          <v-icon>home</v-icon>
        </v-btn>
        <v-toolbar-title>
          Listado alumnos</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn color="#FFFF00" text :to="{ name:'pList' }">Profesores</v-btn>
          <v-btn color="#FFFF00" text :to="{ name:'aList' }">Alumnos</v-btn>
          <v-btn color="#FFFF00" text :to="{ name:'asList' }">Materias</v-btn>
          <v-btn color="#FFFF00" text :to="{ name:'hList' }">Horarios</v-btn>
          <v-btn color="#FFFF00" text :to="{ name:'asist' }">Asistencia</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-container>
        <v-data-table :headers="headers" :items="alumnos" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.nombre }}</td>
            <td>{{ props.item.apellido_paterno }}</td>
            <td>{{ props.item.apellido_materno }}</td>
            <td>{{ props.item.matricula }}</td>
            <td>{{ props.item.rfid }}</td>

            <td>
              <v-btn fab small dark class="ma-2" color="primary" :to="{ name:'aedit', params: {alumnoid: props.item.rfid, ai:props.item.id} }">
                <v-icon>edit</v-icon>

              </v-btn>
              <v-btn fab small dark class="ma-2" color="red" v-on:click="deleteAlumno(props.item.rfid)">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
        <v-btn fab dark class="ma-2" color="green" :to="{ name: 'nalumno' }" right>
          <v-icon>add</v-icon>
        </v-btn>
      </v-container>

    </v-content>


  </v-app>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
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
    }, methods: {
      getAlumnos() {

        axios.get('http://localhost:3000/alumno')
          .then((response) => {
            this.alumnos = response.data.r
            console.log(response.data.r)
          }).then(error => console.log(error));
      },
      deleteAlumno(x){
        console.log(x)
        const dataq = { rfid: x}
        const path = 'http://localhost:3000/alumnoDelete'
        axios.post(path,dataq).then((response) => {
                console.log(response)
             swal("Alumno eliminado correctamente!","","success").then(()=>{
                    location.href = '/alist'
                })
                })
            }
    },
    created() {
      this.getAlumnos()
      // this.getProfesores
    }
  }
</script>


<style>
</style>