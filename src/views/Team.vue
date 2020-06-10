<template>
    <div class="container">
        <GoBack />
        <SidebarOne />
        <MainAppContent v-bind:componentTitle="componentTitle" />
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
        name: "Team",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer,
            GoBack
        },
        data() {
            return {
                componentTitle: "Team"
            }
        }
    }
</script>