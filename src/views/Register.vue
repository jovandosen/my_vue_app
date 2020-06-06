<template>
    <div class="container">
        <SidebarOne />
        <MainAppContent />
        <SidebarTwo />   
        <Footer />    
    </div>
</template>

<script>
    import SidebarOne from '../components/SidebarOne.vue'
    import SidebarTwo from '../components/SidebarTwo.vue'
    import MainAppContent from '../components/MainAppContent.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: "Register",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer
        }
    }
</script>