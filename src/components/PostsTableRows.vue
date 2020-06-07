<template>
    <tr v-bind:class="postsRowStyle">
        <td>{{ post.title }}</td>
        <td>{{ post.content }}</td>
        <td>{{ post.author }}</td>
        <td>{{ post.status }}</td>
    </tr>
</template>

<script>
    export default {
        name: "PostsTableRows",
        props: ["post"],
        data() {
            return {
                postsRowStyle: 'postsRowStyleClass'
            }
        }
    }
</script>

<style scoped>
td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: left;
    padding: 10px;
} 

.postsRowStyleClass:hover {
    color: white;
    background-color: #36E11DFF;
}   
</style>