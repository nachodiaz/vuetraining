<template>
    <div>
        <!--<h1>{{NewMessage}}</h1>
        <button @click="emitNewMessage">Cambiar Mensaje</button>-->
        <h1>¿Quieres Cerveza?</h1>º
        <slot name="mainSlot" :mensaje="message"/>
    </div>
</template>
<script>
    export default {
        name: 'ChildComponent',

        data() {
            return {
                mensaje: 'Quieres una Cerveza Rubia'
                }
        }
        
        
    }
</script>
<style>
</style>