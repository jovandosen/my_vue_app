<template>
    <div class="container">
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <table style="width: 100%">
                <UsersTableHeader />
                <tbody>
                    <UserTableRow v-for="user in users" v-bind:key="user.id" v-bind:user="user" />
                </tbody>
            </table>
        </main-app-content>
        <SidebarTwo /> 
        <Footer />      
    </div>
</template>

<script>
    import SidebarOne from '../components/SidebarOne.vue'
    import SidebarTwo from '../components/SidebarTwo.vue'
    import MainAppContent from '../components/MainAppContent.vue'
    import Footer from '../components/Footer.vue'
    import UsersTableHeader from '../components/UsersTableHeader.vue'
    import UserTableRow from '../components/UserTableRow.vue'

    export default {
        name: "Users",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer,
            UsersTableHeader,
            UserTableRow
        },
        data() {
            return {
                componentTitle: "Users",
                users: [
                    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', age: 32, gender: 'Male', role: 'admin' },
                    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@gmail.com', age: 40, gender: 'Female', role: 'editor' },
                    { id: 3, firstName: 'Jack', lastName: 'Smith', email: 'jacksmith@gmail.com', age: 22, gender: 'Male', role: 'subscriber' },
                    { id: 4, firstName: 'David', lastName: 'Johnson', email: 'david@gmail.com', age: 52, gender: 'Male', role: 'admin' },
                    { id: 5, firstName: 'Lilly', lastName: 'Lock', email: 'lillylock@gmail.com', age: 25, gender: 'Female', role: 'author' }
                ]
            }
        }
    }
</script>

<style scoped>
table {
    border: 1px solid black;
    border-collapse: collapse;
}     
</style>