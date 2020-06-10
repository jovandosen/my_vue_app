<template>
    <div class="container">
        <GoBack />
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <table style="width: 100%">
                <PostsTableHeader />
                <tbody>
                    <PostsTableRows v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
                </tbody>
            </table>
        </main-app-content>
        <SidebarTwo /> 
        <Footer />      
    </div>
</template>

<script>
    import SidebarOne from '../components/SidebarOne.vue'
    import SidebarTwo from '../components/SidebarTwo.vue'
    import MainAppContent from '../components/MainAppContent.vue'
    import Footer from '../components/Footer.vue'
    import PostsTableHeader from '../components/PostsTableHeader.vue'
    import PostsTableRows from '../components/PostsTableRows.vue'
    import GoBack from '../components/GoBack.vue'
    import store from '../store.js'

    export default {
        name: "Posts",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer,
            PostsTableHeader,
            PostsTableRows,
            GoBack
        },
        data() {
            return {
                componentTitle: "Posts",
                posts: store.posts
            }
        }
    }
</script>

<style scoped>
table {
    border: 1px solid black;
    border-collapse: collapse;
}    
</style>
