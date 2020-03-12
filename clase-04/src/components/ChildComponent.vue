<template>
    <div>
        <h1>{{NewMessage}}</h1>
    </div>
</template>
<script>
    export default {
        name: 'ChildComponent',
        props: {
            NewMessage: {
                type: String,
                validator: value => { return value.includes('cerveza')}
            }
            
        }
    }
</script>
<style>
</style>