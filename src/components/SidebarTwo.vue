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
        <div id="sidebar-two-news-title">
            <h3>Latest News</h3>
        </div>
        <div id="sidebar-two-news-content">
            <ul>
                <Detail v-for="detail in news" v-bind:key="detail.id" v-bind:detail="detail" />
            </ul>
        </div>
        <div>
            <img src="../assets/logo.png" alt="My Vue App Logo">
        </div>
    </div>
</template>

<script>
    import Post from './Post.vue'
    import Comment from './Comment.vue'
    import Detail from './Detail.vue'
    import store from '../store.js'

    export default {
        name: "SidebarTwo",
        data() {
            return {
                posts: store.posts,
                comments: store.comments,
                news: store.news
            }
        },
        components: {
            Post,
            Comment,
            Detail
        }
    }
</script>

<style scoped>
.sidebar-two {
    text-align: center;
}

.sidebar-two-title, #sidebar-two-comments-title, #sidebar-two-news-title {
    border-bottom: 1px solid #808080;
    padding: 10px;
    color: #007F0EFF;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

#sidebar-two-content, #sidebar-two-comments-content, #sidebar-two-news-content {
    padding: 10px;
    border-bottom: 1px solid #808080;
}

#sidebar-two-content ul, #sidebar-two-comments-content ul, #sidebar-two-news-content ul {
    list-style-type: none;
}
</style>