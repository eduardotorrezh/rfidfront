<template>
    <v-app>
        <v-content>
            <h1>Cargar materia</h1>
            <v-spacer></v-spacer>
                <v-container>
            <v-form  @submit="onSubmit">
            <v-text-field v-model.trim="form.id_alumno"  label="id_alumno" required></v-text-field>
    
            <v-text-field v-model.trim="form.id_materia"  label="id_materia" required></v-text-field>
    
            <!-- <v-text-field v-model.trim="form.apellido_materno"  label="Apellido materno" required></v-text-field>
    
            <v-text-field v-model.trim="form.matricula"  label="Matricula" required></v-text-field> -->
    
    
            <v-btn v-on:click="onSubmit">
                Crear
            </v-btn>
            <v-btn color="red" :to="{ name: 'hList' }">
                Cancelar
            </v-btn>
    
        </v-form>
                </v-container>
        </v-content>
    </v-app>
        
    </template>
    
    <script>
    import Axios from 'axios';
    import swal from 'sweetalert'
        export default {
            data(){
                return{
                    // profid: this.$route.params.profesorid,
                    form: {
                        id_alumno: this.$route.params.alumnoid,
                        id_materia:'',
                        // apellido_materno:'',
                        // matricula:null
                    }
                }
            },
            methods: {
                onSubmit() {
                    const dataq = { 
                        id_alumno: this.form.id_alumno,
                        id_materia: this.form.id_materia
                        }
                     console.log(dataq)
    
                    const path = 'http://localhost:3000/registroHorario'
                    Axios.post(path,dataq)
                    .then((response) => {
                        console.log(response)
                        swal("Materia cargada correctamente!","","success")
                    })
                    
                }
            }
        }
    </script>
    
    <style>
    body{
    background: #74ebd5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ACB6E5, #74ebd5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    }
    </style>