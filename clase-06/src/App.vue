
<template>
  <div>
    
    <!--<Label />
    <br>
    <Increment />
    <br>
    <Decrement />-->

    <input type="text " v-model="task">
    <button @click="addTask(task)">Agregar Tarea</button>
    <ListTasks />
    <hr>
    <User />
  </div>
</template>

<script>
import User from './components/User'
import Label from './components/Label'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import ListTasks from './components/ListTasks'

import { mapActions,
 mapGetters} from 'vuex'
export default {
   name: 'app',
   /* components: {
     Label,
     Increment,
     Decrement
   } */
   components: {
     ListTasks,
     User
   },
    methods: {
      ...mapActions(['addTask']),
    },
    computed: {
      ...mapGetters(['tareasConEstudiar'])

    },

   data() {
     return {
       task: ''
     
     }
   }
 
}
</script>