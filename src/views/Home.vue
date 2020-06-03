<template>
    <div class="home">
        <h1>This is Home page</h1>
        <HelloWorld />
    </div>
</template>

<script>
    import HelloWorld from '../components/HelloWorld.vue'

    export default {
        name: "Home",
        components: {
            HelloWorld
        }
    }
</script>
