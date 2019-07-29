<template>
<v-app>
    <v-content>
            <v-toolbar color="#FFFF00">
                    <v-toolbar-title>Agregar alumno</v-toolbar-title>
                </v-toolbar>
        <v-spacer></v-spacer>
            <v-container>
        <v-form  @submit="onSubmit">
        <v-text-field v-model.trim="form.nombre"  label="Nombre" required></v-text-field>

        <v-text-field v-model.trim="form.apellido_paterno"  label="Apellido paterno" required></v-text-field>

        <v-text-field v-model.trim="form.apellido_materno"  label="Apellido materno" required></v-text-field>

        <v-text-field v-model.trim="form.matricula"  label="Matricula" required></v-text-field>
                
        <v-text-field v-model.trim="form.rfid"  label="RFID" required disabled></v-text-field>



        <v-btn color = "blue" v-on:click="onSubmit">
            Crear
        </v-btn>
        <v-btn color="red" :to="{ name: 'aList' }">
            Cancelar
        </v-btn>

    </v-form>
            </v-container>
    </v-content>
</v-app>
    
</template>

<script>
import Axios from 'axios';
import VueSocketIO from 'vue-socket.io';
import swal from 'sweetalert'
const io = require('socket.io-client')
    const socket = io('http://192.168.1.72:3000');
                    socket.on('registro',function(data){
                    console.log(data)
                    });
    export default {
        data(){
            return{
                // profid: this.$route.params.profesorid,
                form: {
                    nombre:'',
                    apellido_paterno:'',
                    apellido_materno:'',
                    matricula:null,
                    rfid:null
                }
            }
        },
        methods: {
            onSubmit() {
                const dataq = { 
                    nombre: this.form.nombre,
                    apellido_paterno: this.form.apellido_paterno,
                    apellido_materno: this.form.apellido_materno,
                    matricula: this.form.matricula,
                    rfid: this.form.rfid
                    }
                 console.log(dataq)

                const path = 'http://localhost:3000/registro'
                Axios.post(path,dataq)
                .then((response) => {
                    console.log(response.data)
                    swal("Alumno creado correctamente!","","success")
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