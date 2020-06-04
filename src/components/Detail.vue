<template>
    <li><a>{{ detail.title | cut }}</a></li>
</template>

<script>
    export default {
        name: "Detail",
        props: ["detail"]
    }
</script>

<style scoped>
#sidebar-two-news-content ul li {
    padding-bottom: 5px;
}   

#sidebar-two-news-content ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

#sidebar-two-news-content ul li a:hover {
    color: black;
    transition: 0.3s;
    cursor: pointer;
}
</style>