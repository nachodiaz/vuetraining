<template>
    <div>
        <!--<h1>{{NewMessage}}</h1>
        <button @click="emitNewMessage">Cambiar Mensaje</button>-->
        <h1>¿Quieres Cerveza?</h1>
        <slot name="mainSlot" :mensaje="message"/>
    </div>
</template>
<script>
    export default {
        name: 'ChildComponent',
       
        props: {
            NewMessage: {
                type: String,
                //validator: value => { return value.includes('cerveza')}
            }
            
        },
        methods: {
            emitNewMessage() {
                this.$emit('changeMessage', 'Quiero otra Cervezota!')
            }
        }
    }
</script>
<style>
</style>