<template>
    <div class="container">
        <GoBack />
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <div id="post-title">
                <h4>{{ postData.title }}</h4>
            </div>
            <div id="post-content">
                <p>{{ postData.content }}</p>
            </div>
            <div id="post-author">
                <p>{{ postData.author }}</p>
            </div>
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
    import GoBack from '../components/GoBack.vue'

    export default {
        name: "Post",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer,
            GoBack
        },
        data() {
            return {
                componentTitle: "Post",
                postData: this.$route.params.post
            }
        }
    }
</script>