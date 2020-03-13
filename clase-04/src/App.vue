<template>
  <div>
    <ChildComponent>
      <h1>¿Que cerveza quieres?</h1>
      <template v-slot:mainSlot="scopedSlot">
      <h3> {{scoedSlot.mensaje}} </h3>
      </template>
    </ChildComponent>
    <ChildComponent>  
      <h3> Amber o IPA </h3>
    </ChildComponent>
    <BrotherComponent />
  
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
import BrotherComponent from './components/BrotherComponent.vue'

export default {
  name: 'app',
 
  components: {
    ChildComponent,
    BrotherComponent
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
