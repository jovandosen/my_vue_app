<template>
    <font color="red">
        <p>{{ error.message }}</p>
    </font>
</template>

<script>
    export default {
        name: "ContactFormError",
        props: ["error"]
    }
</script>