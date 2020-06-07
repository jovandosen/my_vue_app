<template>
    <thead>
        <tr v-bind:style="headerStyle">
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th>Status</th>
        </tr>
    </thead>
</template>

<script>
    export default {
        name: "PostsTableHeader",
        data() {
            return {
                headerStyle: {
                    'background-color': '#bfbfbf'
                }
            }
        }
    }
</script>

<style scoped>
th {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: left;
    padding: 10px;
}   
</style>