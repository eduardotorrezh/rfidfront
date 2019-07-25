<template>
  <v-app>
  <v-content>
      <v-toolbar color="#FFFF00">
        <v-spacer></v-spacer>
          <v-toolbar-items>
              <v-btn color="#FFFF00" text :to="{ name:'pList' }" >Profesores</v-btn>
              <v-btn color="#FFFF00" text :to="{ name:'aList' }">Alumnos</v-btn>
              <v-btn color="#FFFF00" text :to="{ name:'asList' }">Materias</v-btn>
              <v-btn color="#FFFF00" text :to="{ name:'hList' }">Horarios</v-btn>
          </v-toolbar-items>
      </v-toolbar>
      <v-container>
        <v-layout
          text-xs-center
          wrap
        >
          <v-flex xs12>
            <v-img
              src="https://tress.com.mx/portals/0/Images/Soluciones/ST/st2Asistencia200.png?ver=2017-12-31-152151-330"
              class="my-3"
              contain
              height="300"
            ></v-img>
          </v-flex>
    
          <v-flex mb-4>
            <h1 class="display-2 font-weight-bold mb-3">
              Registasist
            </h1>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <p class="subheading font-weight-regular">
              Programa de gestión estudiantil
              <br>
              <br>
              <a href="https://www.upchiapas.edu.mx/" target="_blank">#TecnologíaParaElBienComún</a>
            </p>
          </v-flex>
    
          
        </v-layout>
      </v-container>
  </v-content>
</v-app>
</template>

<script>
  export default {
    data: () => ({
      
      

    })
  }
</script>

<style>

</style>
