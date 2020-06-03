<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> 
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link> 
            <router-link to="/team">Team</router-link>
            <router-link to="/register" v-bind:class="auth">Register</router-link>
            <router-link to="/login" v-bind:class="auth">Login</router-link>
        </div> 
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                auth: 'auth-links'
            }
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#nav {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    padding: 20px 0px 20px 20px;
    background-color: #808080;
}

#nav a {
    text-decoration: none;
    color: white;
    margin-right: 20px; 
}

#nav a.router-link-exact-active {
    color: #80bfff;
    border-bottom: 2px solid #80bfff;
}

#nav a:hover {
    color: #b8b894;
}

#nav a:active {
    color: #ff8080;
}

.auth-links {
    float: right;
}
</style>
