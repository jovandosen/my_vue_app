<template>
    <tr v-bind:class="usersRowStyle">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.role }}</td>
    </tr>
</template>

<script>
    export default {
        name: "UserTableRow",
        props: ["user"],
        data() {
            return {
                usersRowStyle: 'usersRowStyleClass'
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

.usersRowStyleClass:hover {
    color: white;
    background-color: #36E11DFF;
}   
</style>