<template>
    <li><router-link :to="{ name: 'Post', params: { slug: post.slug }}">{{ post.title }}</router-link></li>
</template>

<script>
    export default {
        name: "Post",
        props: ["post"]
    }
</script>

<style scoped>
#sidebar-two-content ul li {
    padding-bottom: 5px;
}

#sidebar-two-content ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

#sidebar-two-content ul li a:hover {
    color: black;
    font-size: 25px;
    transition: 0.3s;
    cursor: pointer;
}    
</style>