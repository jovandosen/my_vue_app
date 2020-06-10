<template>
    <tr class="user-row" v-bind:class="usersRowStyle" v-on:click="getUserDetails(user.username)">
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
        },
        methods: {
            getUserDetails(username) {
                this.$router.push(`/user/${username}`)
            }
        }
    }
</script>

<style scoped>
.user-row td {
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