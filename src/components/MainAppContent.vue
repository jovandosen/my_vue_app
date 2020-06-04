<template>
    <div class="main-app-data">
        <div class="content-title">
            <h3 v-bind:class="appContentTitle">App Content</h3>
        </div>
        <div id="main-application-content">
            {{ content }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainAppContent",
        data() {
            return {
                appContentTitle: 'animate__animated animate__bounceInRight'
            }
        },
        props: ["content"]
    }
</script>

<style scoped>
.content-title {
    background-color: #808080;
}  

.content-title h3 {
    color: white;
}  
</style>