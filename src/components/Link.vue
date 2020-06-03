<template>
    <li>
        <a v-bind:href="link.url" v-bind:target="link.target">{{ link.text }}</a>
    </li>
</template>

<script>
    export default {
        name: "Link",
        props: ["link"]
    }
</script>

<style scoped>
#sidebar-one-body ul li {
    padding-bottom: 5px;
}

#sidebar-one-body ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
}

#sidebar-one-body ul li a:hover {
    color: black;
    padding-left: 10px;
    transition: 0.3s;
}    
</style>