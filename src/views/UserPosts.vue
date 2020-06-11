<template>
    <div id="user-posts-box">
        <h2>User Posts:</h2>
        <ul v-if="posts.length > 0">
            <li v-for="post in posts" v-bind:key="post.id">
                <router-link :to="{ name: 'Post', params: { slug: post.slug } }">
                    {{ post.title }}
                </router-link>
            </li>
        </ul>
        <h3 v-else>No Posts found.</h3>
    </div>
</template>

<script>
import store from "@/store"    
export default {
    props: {
        username: {
            type: String,
            required: true
        }
    },
    computed: {
        user() {
            return store.users.find(
                user => user.username === this.username
            )
        },
        posts() {
            var allPosts = store.posts
            var i
            var posts = []
            for(i = 0; i < allPosts.length; i++){
                if(this.user.id === allPosts[i].userId){
                    posts.push(allPosts[i])
                }
            }
            return posts
        }
    }
}    
</script>

<style scoped>
#user-posts-box {
    padding-top: 10px;
}  
#user-posts-box ul {
    list-style-type: none;
}  
#user-posts-box a {
    text-decoration: none;
    color: black;
}
#user-posts-box a:hover {
    text-decoration: underline;
}
</style>