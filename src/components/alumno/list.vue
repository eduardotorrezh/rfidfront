<template>
  <v-app>

    <v-content>
      <v-toolbar color="#FFFF00">
        <v-toolbar-title color="">Listado de alumnos</v-toolbar-title>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-container>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.nombre }}</td>
            <td class="text-xs-right">{{ props.item.apellido_paterno }}</td>
            <td class="text-xs-right">{{ props.item.apellido_materno }}</td>
            <td class="text-xs-right">{{ props.item.matricula }}</td>
            <td class="text-xs-right">{{ props.item.rfid }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="edit(props.item)">
                edit
              </v-icon>
              <v-icon small @click="delete(props.item)">
                delete
              </v-icon>
            </td>

          </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              
                <v-btn color="primary"  class="mb-2" v-on="on">Agregar alumno</v-btn>
             
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Completa el formulario</span>
                    <v-spacer></v-spacer>
                    <v-icon x-large>person_add</v-icon>
                </v-card-title>
  
                <v-card-text>
                    <v-container grid-list-md>
                        <v-form>
                            <v-text-field v-model="alumno.nombre" label="Nombre (S)"></v-text-field>
  
                            <v-text-field  v-model="alumno.apellido_paterno" label="Apellido paterno"></v-text-field>
  
                            <v-text-field  v-model="alumno.apellido_materno" label="Apellido materno"></v-text-field>
  
                            <v-text-field  v-model="alumno.matricula" label="Matrícula"></v-text-field>
  
                            <v-text-field  v-model="alumno.rfid" label="RFID"></v-text-field>
                        </v-form>
                    </v-container>
                </v-card-text>
  
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange" flat @click="close">Cancelar</v-btn>
                    <v-btn color="orange" flat @click="save">Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dialog2" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Completa el formulario</span>
                    <v-spacer></v-spacer>
                    <v-icon x-large>person_add</v-icon>
                </v-card-title>
  
                <v-card-text>
                    <v-container grid-list-md>
                        <v-form>
                            <v-text-field v-model="alumno2.nombre" label="Nombre (S)"></v-text-field>
  
                            <v-text-field  v-model="alumno2.apellido_paterno" label="Apellido paterno"></v-text-field>
  
                            <v-text-field  v-model="alumno2.apellido_materno" label="Apellido materno"></v-text-field>
  
                            <v-text-field  v-model="alumno2.matricula" label="Matrícula"></v-text-field>
  
                            <v-text-field  v-model="alumno2.rfid" label="RFID"></v-text-field>
                        </v-form>
                    </v-container>
                </v-card-text>
  
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange" flat @click="close2">Cancelar</v-btn>
                    <v-btn color="orange" flat @click="save2">Actualizar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  


      </v-container>

      
    </v-content>

    


  </v-app>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        dialog: false,
        dialog2: false,
        headers: [
          {
            text: 'Nombre (s)',
            // align: 'left',
            // sortable: false,
            value: 'nombre'
          },
          { text: 'Apelido Paterno', value: 'apellido_paterno' },
          { text: 'Apellido Materno', value: 'apellido_materno' },
          { text: 'Matrícula', value: 'matrícula' },
          { text: 'RFID', value: 'rfid' },
          { text: 'Acciones', value: 'nombre' }
        ],
        desserts: [],
        alumno:
        {
          nombre: '',
          apellido_paterno: '',
          apellido_materno: '',
          matricula: '',
          rfid: ''
        },
        alumno2:
        {
          nombre: '',
          apellido_paterno: '',
          apellido_materno: '',
          matricula: '',
          rfid: ''
        },
        editedIndex: -1,
      }
    }, methods: {
      getAlumno() {

        axios.get('http://localhost:3000/alumno')
          .then((response) => {
            this.desserts = response.data.r
          }).then(error => console.log(error));
      },
      save(){
        axios.post('http://localhost:3000/registro', {
          nombre: this.alumno.nombre,
          apellido_paterno: this.alumno.apellido_paterno,
          apellido_materno: this.alumno.apellido_materno,
          matrícula: this.alumno.matricula,
          rfid: this.alumno.rfid
        }).then((response) => {
            console.log(response.data)
          }).then(error => console.log(error));

          this.close()
      },
      close(){
        this.dialog = false
      },
      save2(){
        axios.post('http://localhost:3000/alumnoUpdate', {
          nombre: this.alumno.nombre,
          apellido_paterno: this.alumno.apellido_paterno,
          apellido_materno: this.alumno.apellido_materno,
          matrícula: this.alumno.matricula,
          rfid: this.alumno.rfid
        }).then((response) => {
            console.log(response.data)
          }).then(error => console.log(error));

          this.close2()
      },
      close2(){
        this.dialog2 = false
      },
      edit(item){
        this.editedIndex = this.desserts.indexOf(item)
        this.alumno2 = Object.assign({}, item)
        this.dialog2 = true
      },
      delete(item){

      }
    },
    created() {
      this.getAlumno()
    }
  }
</script>

<style>
</style>