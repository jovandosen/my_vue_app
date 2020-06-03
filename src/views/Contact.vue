<template>
    <div class="container">
        <SidebarOne />
        <MainAppContent />
        <SidebarTwo />       
    </div>
</template>

<script>
    import SidebarOne from '../components/SidebarOne.vue'
    import SidebarTwo from '../components/SidebarTwo.vue'
    import MainAppContent from '../components/MainAppContent.vue'

    export default {
        name: "Contact",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent
        }
    }
</script>