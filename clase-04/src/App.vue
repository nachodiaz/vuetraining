<template>
  <div>
    <ChildComponent>
      <h1>¿Que cerveza quieres?</h1>
      <h3> Negra o Rubia </h3>
    </ChildComponent>
    <ChildComponent>
     
      <h3> Amber o IPA </h3>
    </ChildComponent>
  </div>
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
      message: 'Prueba una buena cerveza'
    }
  }, 
  methods:{
    changeText (event) {
      this.message = event ;
    }
  }
}
</script>

<style>

</style>
