<template>
    <div>
        <h1>Tareas</h1>
        <ul>
            <li :key="index" v-for="(task, index) in  tasks">
                {{task}}
            </li>
        </ul>
        <h1>Tareas con la palabra Estudiar</h1>
        <ul>
            <li v-for="(task, index) in tareasConEstudiar" :key="index">
                {{task}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    computed : {
        ...mapState(['tasks']),
        ...mapGetters(['tareasConEstudiar'])
    }
}
</script>