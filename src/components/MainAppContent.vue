<template>
    <div class="main-app-data">
        <div class="content-title">
            <h3 v-bind:class="appContentTitle">App Content</h3>
        </div>
        <div id="main-application-content">
            <slot></slot>
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
        }
    }
</script>

<style scoped>
.content-title {
    background-color: #808080;
}  

.content-title h3 {
    color: white;
}

#main-application-content {
    padding: 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}  
</style>