<template>
    <v-app>

        <v-content>
            <v-toolbar color="#FFFF00">
                <v-toolbar-title>Asistencia por alumno</v-toolbar-title>
            </v-toolbar>

            <v-spacer></v-spacer>
            <v-container>
                <v-data-table :headers="headers" :items="asistencia" class="elevation-1">
                    <template v-slot:items="props">
                        <td>{{ props.item.nombre }}</td>
                        <td>{{ props.item.clase }}</td>
                        <td>{{ props.item.hora_inicio }}</td>
                        <td>{{ props.item.hora_fin }}</td>
                        <td>{{ dias[props.item.id_dia] }}</td>
                    </template>
                </v-data-table>
                <v-btn color="red" :to="{ name: 'asist' }">
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
        data() {
            return {
                headers: [
                    {
                        text: 'Nombre', value: 'nombre'
                    },
                    { text: 'Clase', value: 'clase' },
                    { text: 'Hora de entrada', value: 'inicio' },
                    { text: 'Hora de salida', value: 'salida' },
                    { text: 'Día', value: 'dia' },
                    //   { text: 'Acciones', value: 'actions' },


                ],
                dias: [
                    'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'
                ],
                asistencia: [],
                alumnoid: this.$route.params.alumnoid,
                nombreAlumno: this.$route.params.alumnoN

            }
        }, methods: {
            getAsistencia() {

                console.log("Esta cosa es lo que tiene el rout.params " + this.alumnoid)
                const dataq = { id_alumno: this.alumnoid }
                const path = 'http://localhost:3000/asistenciaById'
                Axios.post(path, dataq
                ).then((response) => {
                    console.log(response)
                    this.asistencia = response.data.r
                })
            }
        },
        created() {
            this.getAsistencia()
        }
    }
</script>


<style>
</style>