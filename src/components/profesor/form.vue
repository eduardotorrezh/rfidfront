<template>
<v-app>
    <v-content>
        <h1>Registro de profesores</h1>
        <v-spacer></v-spacer>
            <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" label="Nombre" required></v-text-field>

        <v-text-field v-model="lastname" :rules="nameRules" label="Apellido paterno" required></v-text-field>

        <v-text-field v-model="mlastname" :rules="nameRules" label="Apellido materno" required></v-text-field>

        <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Selecciona materia" required></v-select>

        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Estás seguro que deseas crear?"
            required></v-checkbox>

        <v-btn :disabled="!valid" color="green" @click="validate">
            Validate
        </v-btn>

    </v-form>
            </v-container>
    </v-content>
</v-app>
    
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            select: null,
            items: [
                'Materia 1',
                'Materia 2',
                'Materia 3',
                'Materia 4'
            ],
            checkbox: false
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
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