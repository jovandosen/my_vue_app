<template>
    <img v-bind:src="require('../assets/images/' + image.src)"  v-bind:alt="image.name">
</template>

<script>
    export default {
        name: "GalleryImage",
        props: ["image"]
    }
</script>