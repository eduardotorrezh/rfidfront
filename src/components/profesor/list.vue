<template>
  
  <v-data-table
    :headers="headers"
    :items="profesores"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td >{{ props.item.nombre }}</td>
      <td >{{ props.item.a_paterno }}</td>
      <td >{{ props.item.a_materno }}</td>
      <td >{{ props.item.materias }}</td>
      <td >{{ props.item.iron }}</td>

    </template>
  </v-data-table>
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
                a_paterno: 'Torres',
                a_materno: 'Hurtado',
                materias: 'Matematicas'
            }, 
            {
                id: 2,
                nombre: 'Jaime',
                a_paterno: 'Torrez',
                a_materno: 'urtado',
                materias: 'Español'
            },
            {
                id: 3,
                nombre: 'Fredo',
                a_paterno: 'Saliz',
                a_materno: 'Chañiga',
                materias: 'Gmail'
            },
            {
                id: 4,
                nombre: 'Danny',
                a_paterno: 'Guerra',
                a_materno: 'Narv',
                materias: 'Mates ing'
            },
            
        ]
      }
    }
  }
</script>

<style>

</style>
