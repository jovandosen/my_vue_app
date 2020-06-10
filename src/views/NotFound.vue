<template>
    <div class="container">
        <GoBack />
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <h3 v-bind:class="notFoundStyle">{{ content }}</h3>
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
        name: "NotFound",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer,
            GoBack
        },
        data() {
            return {
                content: "Sorry, Page not Found.",
                notFoundStyle: "animate__animated animate__fadeInUp",
                componentTitle: "Not Found"
            }
        }
    }
</script>

<style scoped>

</style>