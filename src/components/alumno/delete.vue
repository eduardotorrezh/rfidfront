<template>
<v-app>
    <v-content>
            <v-toolbar color="#FFFF00">
                    <v-toolbar-title>Eliminar alumno</v-toolbar-title>
                </v-toolbar>
        <v-spacer></v-spacer>
            <v-container>
        <v-form  >
        <v-text-field v-model.trim="form.nombre"  label="Nombre" required></v-text-field>

        <v-text-field v-model.trim="form.apellido_paterno"  label="Apellido paterno" required></v-text-field>

        <v-text-field v-model.trim="form.apellido_materno"  label="Apellido materno" required></v-text-field>

        <v-text-field v-model.trim="form.matricula"  label="Matricula" required></v-text-field>

        <v-text-field v-model.trim="form.rfid"  label="RFID" required></v-text-field>



        <v-btn color="red" v-on:click="deleteAlumno">
            Eliminar
        </v-btn>
        <v-btn color="blue" :to="{ name: 'aList' }">
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
                alumnoid: this.$route.params.alumnoid,
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
      deleteAlumno(){
        const idroute = this.$route.params.alumnoid
        console.log("Esta cosa es lo que tiene el rout.params "+idroute)
        const dataq = { rfid: idroute}
        const path = 'http://localhost:3000/alumnoDelete'
        Axios.post(path,dataq).then((response) => {
                console.log(response)
             swal("Alumno eliminado correctamente!","","success")
            location.href = '/alist'
                })
            },
            getAlumno(){
                const idroute = this.$route.params.alumnoid
                console.log("Esta cosa es lo que tiene el rout.params "+idroute)
                const dataq = { rfid: idroute}
                const path = 'http://localhost:3000/alumnoByRfid'
                Axios.post(path,dataq
                ).then((response) => {
                    console.log(response.data.r[0])
                    this.form.nombre = response.data.r[0].nombre
                    this.form.apellido_paterno = response.data.r[0].apellido_paterno
                    this.form.apellido_materno = response.data.r[0].apellido_materno
                    this.form.matricula = response.data.r[0].matricula,
                    this.form.rfid = response.data.r[0].rfid
                })
            }
        }, created(){
            
            this.getAlumno()
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