<template>
    <div class="container">
        <GoBack />
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
    import GoBack from '../components/GoBack.vue'
    import store from '../store.js'

    export default {
        name: "Users",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer,
            UsersTableHeader,
            UserTableRow,
            GoBack
        },
        data() {
            return {
                componentTitle: "Users",
                users: store.users
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