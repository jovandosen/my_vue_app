<template>
    <div id="go-back-box">
        <button @click="goBack" id="go-back-button">go back</button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    }
}    
</script>

<style scoped>
#go-back-box {
    margin-bottom: 5px;
} 
#go-back-button {
    padding: 3px;
}   
</style>