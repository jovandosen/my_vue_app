<template>
    <li><a>{{ comment.text | cut }}</a></li>
</template>

<script>
    export default {
        name: "Comment",
        props: ["comment"]
    }
</script>

<style scoped>
#sidebar-two-comments-content ul li {
    padding-bottom: 5px;
}  

#sidebar-two-comments-content ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}  

#sidebar-two-comments-content ul li a:hover {
    color: black;
    transition: 0.3s;
    cursor: pointer;
}
</style>