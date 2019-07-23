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
            <td >{{ props.item.apellido_pat }}</td>
            <td >{{ props.item.apellido_mat }}</td>
            <td >{{ props.item.materias }}</td>
            <!-- <td >{{ props.item.protein }}</td>
            <td >{{ props.item.iron }}</td> -->
          </template>
        </v-data-table>
    </v-container>
    </v-content>
    
    
</v-app>  
</template>

<script>
export default {
    data () {
      return {
        headers: [
          {
            text: 'Nombre',
            // align: 'left',
            // sortable: false,
            // value: 'Nombre'
          },
          { text: 'Apellido Paterno', value: 'paterno' },
          { text: 'Apellido Materno', value: 'materno' },
          { text: 'Materias', value: 'materias' },
          { text: 'Información', value: 'info' },
        ],
        profesores: [
            {
                id: 1,
                nombre: 'Eduardo',
                apellido_pat: 'Torres',
                apellido_mat: 'Hurtado',
                materias: 'Matematicas'
            }, 
            {
                id: 2,
                nombre: 'Jaime',
                apellido_pat: 'Torrez',
                apellido_mat: 'urtado',
                materias: 'Español'
            },
            {
                id: 3,
                nombre: 'Fredo',
                apellido_pat: 'Saliz',
                apellido_mat: 'Chañiga',
                materias: 'Gmail'
            },
            {
                id: 4,
                nombre: 'Danny',
                apellido_pat: 'Guerra',
                apellido_mat: 'Narv',
                materias: 'Mates ing'
            },
            {
                      id: 6,
                      nombre: 'Daniel',
                      apellido_pat: 'Guerra',
                      apellido_mat: 'Narvaez',
                      materias: 'POO'
                  },
          {
                      id: 7,
                      nombre: 'Williams',
                      apellido_pat: 'Garcia',
                      apellido_mat: 'Jimenez',
                      materias: 'FCyE'
                  },
            
        ]
      }
    }
  }
</script>




<style>
body{
  
}
</style>
