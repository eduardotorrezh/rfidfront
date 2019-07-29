<template>
    <v-app>
        <v-content>
                <v-toolbar color="#FFFF00">
                        <v-toolbar-title>Cargar materia</v-toolbar-title>
                    </v-toolbar>
            <v-spacer></v-spacer>
                <v-container>
            <v-form  @submit="onSubmit">
            <v-text-field v-model.trim="form.nombre"  label="Nombre del alumno"  :value="form.id_alumno" disabled></v-text-field>
    
            <!-- <v-text-field v-model.trim="form.id_materia"  label="id_materia" required></v-text-field> -->
            <v-select v-model.trim="form.id_materia" :items="items"  label="Materias"  ></v-select>
    
            <!-- <v-text-field v-model.trim="form.apellido_materno"  label="Apellido materno" required></v-text-field>
    
            <v-text-field v-model.trim="form.matricula"  label="Matricula" required></v-text-field> -->
    
    
            <v-btn  color="blue" v-on:click="onSubmit">
                Crear
            </v-btn>
            <v-btn  color="red" :to="{ name: 'hList' }">
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
                    alumid: this.$route.params.alumnoid,
                    form: {
                        nombre: '',
                        id_alumno: this.alumid,
                        id_materia:'',
                        // apellido_materno:'',
                        // matricula:null
                    },
                    
                    items: [],
                }
            },
            created(){
                this.getMateria()
                this.getAlumno()
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
                        swal("Materia cargada correctamente!","","success").then(()=>{
                            location.href = '/hlist'
                        })
                    })
                    
                },
                getMateria(){
                    var se2;
                    Axios.get('http://localhost:3000/materia')
                        .then((response) => {
                            // this.items = response.data.
                            var se= []
                            var se2 =[]
                          
                            se = response.data.r
                            se.forEach((materia)=>{
                                
                                // this.items = [materia.id]
                                se2.push({
                                    text: materia.nombre,
                                    value: materia.id
                                })
                                
                            })
                          
                             this.items = se2
                            //  this.items2 = se3
                            
                        }).then(error => console.log(error));
                },
                getAlumno() {
                    const idroute = this.alumid
                    console.log("Esta cosa es lo que tiene el rout.params " + idroute)

                    const dataq = { rfid: idroute }
                    const path = 'http://localhost:3000/alumnoByRfid'
                    Axios.post(path, dataq
                    ).then((response) => {
                        console.log(response.data.r[0])

                        this.form.id_alumno = response.data.r[0].id
                        this.form.nombre =response.data.r[0].nombre
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