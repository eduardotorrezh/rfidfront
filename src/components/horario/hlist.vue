<template>
    <v-app>

    <v-content>
        <v-toolbar color="#FFFF00">
            <v-toolbar-title>Horarios del alumno</v-toolbar-title>
        </v-toolbar>
        
            <v-spacer></v-spacer>
            <v-container>
            <v-data-table
          :headers="headers"
          :items="horarios"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{ props.item.nombre }}</td>
            <td>{{ props.item.clase }}</td>
            <td >{{ props.item.hora_inicio }}</td>
            <td >{{ props.item.hora_fin }}</td>
            <td >{{ props.item.id_dia }}</td>
          </template>
        </v-data-table>
        <v-btn color="red" :to="{ name: 'hList' }">
            Regresar
        </v-btn>
    </v-container>
   
    </v-content>
    
    
</v-app>  
</template>

<script>
import Axios from 'axios';
// import swal from 'sweetalert'
export default {
    data () {
      return {
        headers: [
          {
            text: 'Nombre'
          },
          { text: 'Clase', value: 'clase' },
          { text: 'Hora de entrada', value: 'inicio' },
          { text: 'Hora de salida', value: 'salida' },
          { text: 'Día', value: 'dia' },
        //   { text: 'Acciones', value: 'actions' },


        ],
        horarios: [],
        alumnoid: this.$route.params.alumnoid

      }
    }, methods:{
        getHorario(){
            const idroute = this.$route.params.alumnoid
            console.log("Esta cosa es lo que tiene el rout.params "+idroute)
            const dataq = { id: idroute}
            const path = 'http://localhost:3000/horarioById'
            Axios.post(path,dataq
            ).then((response) => {
                console.log(response)
                this.horarios = response.data.r
                })
            }
    },
    created(){
      this.getHorario()
    }
  }
</script>


<style>

</style>
