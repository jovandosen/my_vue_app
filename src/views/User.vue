<template>
    <div class="container">
        <GoBack />
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <h4>{{ user.firstName }} {{ user.lastName }}</h4>
            <h5>{{ user.email }}</h5>
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
import GoBack from '../components/GoBack.vue'
import store from '../store.js'    
export default {
    components: {
        SidebarOne,
        SidebarTwo,
        MainAppContent,
        Footer,
        GoBack
    },
    data() {
        return {
            componentTitle: "User Details"
        }
    },
    props: {
        username: {
            type: String,
            required: true
        }
    },
    computed: {
        user() {
            return store.users.find(
                user => user.username === this.username
            )
        }
    }
}    
</script>