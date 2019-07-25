<template>
<v-app>
    <v-content>
            <v-toolbar color="#FFFF00">
                    <v-toolbar-title>Editar alumno</v-toolbar-title>
                </v-toolbar>
        <v-spacer></v-spacer>
            <v-container>
        <v-form  @submit="onSubmit">
        <v-text-field v-model.trim="form.nombre"  label="Nombre" required></v-text-field>

        <v-text-field v-model.trim="form.apellido_paterno"  label="Apellido paterno" required></v-text-field>

        <v-text-field v-model.trim="form.apellido_materno"  label="Apellido materno" required></v-text-field>

        <v-text-field v-model.trim="form.matricula"  label="Matricula" required></v-text-field>
                
        <v-text-field v-model.trim="form.rfid"  label="RFID" required></v-text-field>



        <v-btn color="blue" v-on:click="onSubmit">
            Editar
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
import swal from 'sweetalert'
    export default {
        data(){
            return{
                // alumnoid: this.$route.params.alumnoid,
                // ai: this.$route.params.ai,
                
                form: {
                    nombre:'',
                    apellido_paterno:'',
                    apellido_materno:'',
                    matricula:null,
                    rfid:null
                }
            }
        },
        ////FALTA OBTENER EL ID, SE MANDA ESTATICO
        methods: {
            onSubmit() {
                const idroute = this.$route.params.alumnoid
                const ai = this.$route.params.ai
                const dataq = { 
                    id: ai,
                    nombre: this.form.nombre,
                    apellido_paterno: this.form.apellido_paterno,
                    apellido_materno: this.form.apellido_materno,
                    matricula: this.form.matricula,
                    rfid: this.form.rfid
                    }
                console.log(dataq)
                console.log("IDAL TIENEEEEEEEEEEEE"+ai)


                const path = 'http://localhost:3000/alumnoUpdate'
                Axios.post(path,dataq)
                .then((response) => {
                    
                })
                swal("Alumnno editado correctamente!","","success")
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
                    this.form.matricula = response.data.r[0].matricula
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