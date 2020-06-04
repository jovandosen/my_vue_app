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
        <div id="sidebar-two-comments-title">
            <h3>Latest Comments</h3>
        </div>
        <div id="sidebar-two-comments-content">
            <ul>
                <Comment v-for="comment in comments" v-bind:key="comment.id" v-bind:comment="comment" />
            </ul>
        </div>
    </div>
</template>

<script>
    import Post from './Post.vue'
    import Comment from './Comment.vue'

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
                ],
                comments: [
                    { id: 1, postID: 1, userID: 1, text: 'This is comment one.' },
                    { id: 2, postID: 1, userID: 2, text: 'This is comment two.' },
                    { id: 3, postID: 2, userID: 2, text: 'This is comment three.' },
                    { id: 4, postID: 3, userID: 3, text: 'This is comment four.' },
                    { id: 5, postID: 4, userID: 4, text: 'This is comment five.' }
                ]
            }
        },
        components: {
            Post,
            Comment
        }
    }
</script>

<style scoped>
.sidebar-two {
    text-align: center;
}

.sidebar-two-title, #sidebar-two-comments-title {
    border-bottom: 1px solid #808080;
    padding: 10px;
    color: white;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

#sidebar-two-content, #sidebar-two-comments-content {
    padding: 10px;
    border-bottom: 1px solid #808080;
}

#sidebar-two-content ul, #sidebar-two-comments-content ul {
    list-style-type: none;
}
</style>