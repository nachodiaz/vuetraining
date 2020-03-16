<template>
  <div class="about">
    <h1>Estamos funcionando desde el año 2020</h1>
    <button @click="goToHome">Home</button>
  </div>
</template>

<script>
export default { 
  
  name: 'about',

  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    console.log({to, from })
    next()
  },
  methods: {
      goToHome () {
        this.$router.push({name: 'home'})
      }
  }

}
  
</script>