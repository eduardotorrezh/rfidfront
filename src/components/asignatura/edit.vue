<template>
<v-app>
    <v-content>
            <v-toolbar color="#FFFF00">
                    <v-toolbar-title>Editar materia</v-toolbar-title>
                </v-toolbar>
        <v-spacer></v-spacer>
            <v-container>
        <v-form  @submit="onSubmit">
        <v-text-field v-model.trim="form.nombre"  label="Nombre" required></v-text-field>

        <v-select v-model.trim="form.id_profesor" :items="items"  label="profesor"  ></v-select>


        <v-btn color= "blue" v-on:click="onSubmit">
            Editar
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
                idroute: this.$route.params.materiaid,
                form: {
                    nombre:'',
                    id_profesor: ''
                }, 
                items:[]
            }
        },
        methods: {
            onSubmit() {
                
                const dataq = { 
                    id: this.idroute,
                    nombre : this.form.nombre,
                    id_profesor: this.form.id_profesor
                }
                 console.log(dataq)

                const path = 'http://localhost:3000/materiaUpdate'
                Axios.post(path,dataq)
                .then((response) => {
                    console.log(response)
                })
                swal("Materia editada correctamente!","","success")
            },
            getProfesores() {
                Axios.get('http://localhost:3000/profesor')
                    .then((response) => {
                        
                        var se =[]
                        var se2 = []
                        se = response.data.r

                        se.forEach((profe)=>{
                            se2.push({
                                text: profe.nombre + " " + profe.apellido_paterno + " " +profe.apellido_materno,
                                value: profe.id
                            })
                        })
                        this.items = se2
                    }).then(error => console.log(error));
            },
            getMateria(){
                
                console.log("Esta cosa es lo que tiene el rout.params "+this.idroute)
                const dataq = { id_materia: this.idroute}
                const path = 'http://localhost:3000/materiaById'
                Axios.post(path,dataq
                ).then((response) => {

                    // console.log(se)

                    this.form.nombre = response.data.r[0].nombre
                   
                })
            }
        }, created(){
            
            this.getMateria()
            this.getProfesores()
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