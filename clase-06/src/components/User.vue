<template>
    <div>
        <input type="text" v-model="newName" />
        <h1>{{name}}</h1>
        <button @click="addName(newName)">Cambiar Nombre</button>
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'
export default {
    name: 'user',
   
    computed: {
         ...mapState('user',['name'])
    },
    methods: {
        ...mapActions('user', ['addName'])
    },
    data() {
        return {
            newName: ''
        }
    }

   
}
</script>