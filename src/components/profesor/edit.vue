<template>
<v-app>
    <v-content>
        <h1>Editar profesor</h1>
        <v-spacer></v-spacer>
            <v-container>
        <v-form ref="form" @onSubmit="onSubmit">
        <v-text-field v-model.trim="form.nombre"  label="Nombre" required></v-text-field>

        <v-text-field v-model.trim="form.apellido_paterno"  label="Apellido paterno" required></v-text-field>

        <v-text-field v-model.trim="form.apellido_materno"  label="Apellido materno" required></v-text-field>

        <v-text-field v-model.trim="form.matricula"  label="Matricula" required></v-text-field>


        <v-btn >
            Editar
        </v-btn>
        <v-btn color="red" :to="{ name: 'pList' }">
            Cancelar
        </v-btn>

    </v-form>
            </v-container>
    </v-content>
</v-app>
    
</template>

<script>
import Axios from 'axios';
    export default {
        data(){
            return{
                profid: this.$route.params.profesorid,
                form: {
                    nombre:'',
                    apellido_paterno:'',
                    apellido_materno:'',
                    matricula:null
                }
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()  
            },
            getProfesor(){
                const idroute = this.$route.params.profesorid
                const rbody ={
                    id: idroute
                }
                const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded'  }    }
                const path = 'http://localhost:3000/profesorById'
                Axios.post(path,rbody, config
                ).then((response) => {
                    console.log(response.data.r)
                    this.form.nombre = response.data.r.nombre
                    this.form.apellido_paterno = response.data.r.apellido_paterno
                    this.form.apellido_materno = response.data.r.apellido_materno
                    this.form.matricula = response.data.r.matricula

                })
            }
        }, created(){
            
            this.getProfesor()
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