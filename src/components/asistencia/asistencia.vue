<template>
    <v-app>

        <v-content>
            <v-toolbar color="#FFFF00">
                    <v-btn class="ma-2" text icon color="white" :to="{ name:'start' }">
                            <v-icon>home</v-icon>
                    </v-btn>
                <v-toolbar-title>Asistencias</v-toolbar-title>
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
            <v-container>
                <v-data-table :headers="headers" :items="asistencia" class="elevation-1">
                    <template v-slot:items="props">
                        <td>{{ props.item.id }}</td>
                        <td>{{ props.item.id_alumno }}</td>
                        <td>{{ props.item.id.relacion }}</td>
                        <td>{{ props.item.fecha }}</td>
                        <td>{{ props.item.asis }}</td>
                    </template>
                </v-data-table>
                
            </v-container>

        </v-content>


    </v-app>
</template>

<script>
    import Axios from 'axios';
    // import swal from 'sweetalert'
    export default {
        data() {
            return {
                headers: [
                    {
                        text: 'id'
                    },
                    { text: 'id_alumno', value: 'id_alumno' },
                    { text: 'id_relacion', value: 'id_relacion' },
                    { text: 'fecha', value: 'fecha' },
                    { text: 'asistencia', value: 'asis' },
                    //   { text: 'Acciones', value: 'actions' },


                ],
                asistencia: [],
                

            }
        }, methods: {
            getAsist() {
                Axios.post('http://localhost:3000/asistencia')
                    .then((response) => {
                        this.asistencia = response.data.r
                        console.log(response.data.r)
                    }).then(error => console.log(error));
            }
        },
        created() {
            this.getAsist()
        }
    }
</script>


<style>
</style>