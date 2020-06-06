<template>
    <div class="footer">
        <p>{{ footerDetails }}</p>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data()  {
            return {
                footerDetails: "This is footer for My Vue App."
            }
        }
    }
</script>

<style scoped>
.footer p {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}    
</style>