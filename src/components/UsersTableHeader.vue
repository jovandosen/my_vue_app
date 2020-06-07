<template>
    <thead>
        <tr v-bind:style="headerStyle">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
        </tr>
    </thead>
</template>

<script>
    export default {
        name: "UsersTableHeader",
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