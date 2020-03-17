<template>
    <button @click="incrementCounter(5)">+</button>
</template>


<script>
import { mapActions} from 'vuex'
export default {
    name: 'Increment',
    methods: {
        ...mapActions(['incrementCounter'])
    }
}
</script>