<template>
    <div class="container">
        <GoBack />
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <div id="login-form-box">
                <div id="username-box">
                    <div id="username-label-box">
                        <label for="username">Username</label>
                    </div>
                    <div id="username-field-box">
                        <input type="text" name="username" id="username" v-model="username" autocomplete="off" placeholder="Your username...">
                    </div>
                </div>
                <div id="password-box">
                    <div id="password-label-box">
                        <label for="password">Password</label>
                    </div>
                    <div id="password-field-box">
                        <input type="password" name="password" id="password" v-model="password" autocomplete="off" placeholder="Your password...">
                    </div>
                </div>
                <div id="login-button-box">
                    <button id="login-button" @click="login">Login</button>
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
    import store from '@/store'

    export default {
        name: "Login",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer,
            GoBack
        },
        data() {
            return {
                componentTitle: "Login",
                username: null,
                password: null
            }
        },
        methods: {
            login() {
                store.user = this.username
                this.$router.push({ name: 'Home' })
            }
        }
    }
</script>

<style scoped>
#username, #password {
    width: 50%;
    padding: 5px;
    outline: none;
}  
#login-button {
    padding: 5px 10px 5px 10px;
    color: white;
    outline: none;
    border: 1px solid #808080;
    background-color: seagreen;
}  
#login-button-box {
    margin-top: 5px;
}
#password-box {
    margin-top: 5px;
}
</style>