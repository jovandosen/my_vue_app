<template>
    <div class="container">
        <GoBack />
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <div id="user-data">
                <div id="user-avatar">
                    <img :src="require(`@/assets/images/users/${user.avatar}`)" :alt="user.name">
                </div>
                <div id="user-info">
                    <h2>{{ user.firstName }} {{ user.lastName }}</h2>
                    <h3>{{ user.email }}</h3>
                    <h4>Role: {{ user.role }}</h4>
                    <h5>{{ user.age }} years old</h5>
                    <button id="log-out-btn" @click="logOut">Log out</button>
                    <hr v-bind:style="hrLineStyle">
                    <router-link :to="{ name: 'userPosts', params: { username: user.username } }">view posts</router-link>
                    <router-view :key="$route.path"></router-view>
                </div>
            </div>
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
            componentTitle: "User Details",
            hrLineStyle: {
                'margin-top': '5px',
                'margin-bottom': '5px'
            }
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
    },
    methods: {
        logOut() {
            store.user = null
            this.$router.push("/")
        }
    }
}    
</script>

<style scoped>
#user-avatar, #user-info {
    float: left;
    width: 50%;
    height: 400px;
}
#user-avatar img {
    width: 100%;
    height: 400px;
}  
#user-info {
    padding-left: 10px;
}  
#user-info a {
    text-decoration: none;
    color: black;
}
#user-info a:hover {
    text-decoration: underline;
}
#log-out-btn {
    padding: 3px 7px 3px 7px;
    margin-top: 5px;
    color: white;
    background-color: #808080;
    outline: none;
    border: 1px solid #808080;
}
</style>