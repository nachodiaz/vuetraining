<template>
  <h1>Counter: {{ counter}}</h1>
</template>


<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['counter'])
  }
}
</script>