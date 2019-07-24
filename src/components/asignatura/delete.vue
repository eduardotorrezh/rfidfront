<template>
    <v-app>
        <v-content>
            <h1>Eliminar materia</h1>
            <v-spacer></v-spacer>
                <v-container>
            <v-form  >
                <v-text-field v-model.trim="form.nombre"  label="Nombre" required></v-text-field>

                <v-text-field v-model.trim="form.id_profesor"  label="Id profesor" required></v-text-field>
    
    
    
            <v-btn v-on:click="deleteMateria">
                Eliminar
            </v-btn>
            <v-btn color="red" :to="{ name: 'asList' }">
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
                    form: {
                        nombre: '',
                        id_profesor: ''
                    }
                }
            },
            methods: {
          deleteMateria(){
            const idroute = this.$route.params.materiaid
            console.log("Esta cosa es lo que tiene el rout.params "+idroute)
            const dataq = { id: idroute}
            const path = 'http://localhost:3000/materiaDelete'
            Axios.post(path,dataq).then((response) => {
                    console.log(response)
                 swal("Materia eliminada correctamente!","","success")
                location.href = '/aslist'
                    })
                },
                getMateria(){
                    const idroute = this.$route.params.materiaid
                    console.log("Esta cosa es lo que tiene el rout.params "+idroute)
                    const dataq = { id_materia: idroute}
                    const path = 'http://localhost:3000/materiaById'
                    Axios.post(path,dataq
                        ).then((response) => {
                        console.log(response.data.r[0])
                            console.log(response.data.r)

                            this.form.nombre = response.data.r[0].nombre
                            this.form.id_profesor = response.data.r[0].id_profesor
                        })
                }
            }, created(){
                
                this.getMateria()
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