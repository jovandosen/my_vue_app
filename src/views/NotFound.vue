<template>
    <div class="container">
        <SidebarOne />
        <MainAppContent v-bind:content="content" />
        <SidebarTwo />       
    </div>
</template>

<script>
    import SidebarOne from '../components/SidebarOne.vue'
    import SidebarTwo from '../components/SidebarTwo.vue'
    import MainAppContent from '../components/MainAppContent.vue'

    export default {
        name: "NotFound",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent
        },
        data() {
            return {
                content: "Page not Found."
            }
        }
    }
</script>