<template>
    <div class="sidebar-two">
        <div class="sidebar-two-title">
            <h3>Latest Posts</h3>
        </div>
        <div id="sidebar-two-content">
            <ul>
                <Post v-for="post in posts" v-bind:post="post" v-bind:key="post.id" />
            </ul>
        </div>
    </div>
</template>

<script>
    import Post from './Post.vue'

    export default {
        name: "SidebarTwo",
        data() {
            return {
                posts: [
                    { id: 1, title: 'Foo', content: 'Foo content', author: 'John', role: 'admin' },
                    { id: 2, title: 'Bar', content: 'Bar content', author: 'Jane', role: 'editor' },
                    { id: 3, title: 'Baz', content: 'Baz content', author: 'Jack', role: 'admin' },
                    { id: 4, title: 'Dev', content: 'Dev content', author: 'Jasmin', role: 'subscriber' },
                    { id: 5, title: 'Test', content: 'Test content', author: 'Lilly', role: 'pending' }
                ]
            }
        },
        components: {
            Post
        }
    }
</script>

<style scoped>
.sidebar-two {
    text-align: center;
}

.sidebar-two-title {
    border-bottom: 1px solid #808080;
    padding: 10px;
    color: white;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

#sidebar-two-content {
    padding: 10px;
}

#sidebar-two-content ul {
    list-style-type: none;
}

/*#sidebar-two-content ul li {
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
}*/
</style>