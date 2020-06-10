<template>
    <div id="app">
        <TheNavigation /> 
        <router-view/>
    </div>
</template>

<script>
    import TheNavigation from "@/components/TheNavigation"
    export default {
        components: {
            TheNavigation
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 80%;
    height: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
}

.sidebar-one, .sidebar-two {
    float: left;
    width: 20%;
    height: 780px;
    border: 1px solid #808080;
    background-color: #bfbfbf;
} 

.main-app-data {
    float: left;
    width: 60%;
    height: 780px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
}

.content-title {
    padding: 10px;
    border-bottom: 1px solid #808080;
    font-family: Avenir, Helvetica, Arial, sans-serif;
} 

.footer {
    border: 1px solid #808080;
    color: white;
    background-color: #808080;
    text-align: center;
    float: left;
    width: 100%;
    padding: 10px;
}
</style>
