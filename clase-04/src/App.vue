<template>
  <ChildComponent  :NewMessage="message"/>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'app',
 
  components: {
    ChildComponent
  },
  data() {
    return {
      message: 'Prueba una beuan cerveza'
    }
  }
}
</script>

<style>

</style>
