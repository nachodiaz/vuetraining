<template>
  <div>
    <PrimerComponente />
    <SegundoComponente />
    <TercerComponente />
  </div>
</template>

<script>
  import PrimerComponente from './components/PrimerComponente'
  import SegundoComponente from './components/SegundoComponente'
    import TercerComponente from './components/TercerComponente'

  export default {
    name: 'app',
    components:{
      PrimerComponente,
      SegundoComponente,
      TercerComponente
    }
  }
</script>

<style>

</style>
