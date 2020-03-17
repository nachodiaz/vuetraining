<template>
    <button @click="decrementCounter(5)">-</button>
</template>


<script>
import { mapActions} from 'vuex'
export default {
    name: 'decrementCounter',
    methods: {
        ...mapActions(['decrementCounter'])
    },
}
</script>