<template>
<v-app>
    <v-content>
            <v-toolbar color="#FFFF00">
                    <v-toolbar-title>Agregar alumno</v-toolbar-title>
                </v-toolbar>
        <v-spacer></v-spacer>
            <v-container>
        <v-form  @submit="onSubmit">
        <v-text-field v-model.trim="nombre"  label="Nombre" required></v-text-field>

        <v-text-field v-model.trim="apellido_paterno"  label="Apellido paterno" required></v-text-field>

        <v-text-field v-model.trim="apellido_materno"  label="Apellido materno" required></v-text-field>

        <v-text-field v-model.trim="matricula"  label="Matricula" required></v-text-field>
                
        <v-text-field v-model.trim="rfid"  label="RFID" required disabled></v-text-field>



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
import io from 'socket.io-client';
    export default {
        data(){
            return{
                // profid: this.$route.params.profesorid,
           
                nombre:'',
                apellido_paterno:'',
                apellido_materno:'',
                matricula:null,
                rfid:null,
                socket : io('localhost:3000')
            }
        },
        methods: {
            onSubmit() {
                const dataq = { 
                    nombre: this.nombre,
                    apellido_paterno: this.apellido_paterno,
                    apellido_materno: this.apellido_materno,
                    matricula: this.matricula,
                    rfid: this.rfid
                    }
                 console.log(dataq)

                const path = 'http://192.168.1.72:3000/registro'
                Axios.post(path,dataq)
                .then((response) => {
                    console.log(response.data)
                    swal("Alumno creado correctamente!","","success").then(()=>{
                        location.href = '/alist'
                    })
                })
            }, 
            socketRFID(){
                let x= 1;
                this.socket.on('registro', (data) => {
                    console.log(data)
                    x= data;
                    console.log(this.rfid)
                    this.rfid= x
                    console.log(this.rfid);
                });
                
            },
            
        }, created(){
            this.socketRFID()
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