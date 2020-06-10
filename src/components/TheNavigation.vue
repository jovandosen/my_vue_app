<template>
    <div id="nav">
        <ul>
            <li><a v-bind:style="logoStyle">Vue Project</a></li>
            <li v-for="link in links" v-bind:key="link.id" v-bind:class="link.class">
                <router-link :to="{ name: link.name }">{{ link.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logoStyle: {
                'font-size': '22px'
            },
            links: [
                { id: 1, slug: 'home', name: 'Home', class: '' },
                { id: 2, slug: 'about', name: 'About', class: '' },
                { id: 3, slug: 'contact', name: 'Contact', class: '' },
                { id: 4, slug: 'team', name: 'Team', class: '' },
                { id: 5, slug: 'gallery', name: 'Gallery', class: '' },
                { id: 6, slug: 'register', name: 'Register', class: 'auth-links' },
                { id: 7, slug: 'login', name: 'Login', class: 'auth-links' }
            ]
        }
    }
}    
</script>

<style scoped>
#nav {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 18px;
    padding: 15px 0px 15px 20px;
    background-color: #808080;
    position: sticky;
    top: 0;
    z-index: 1;
}

#nav ul {
    list-style-type: none;
}

#nav ul li {
    display: inline-block;
}

#nav ul li a {
    text-decoration: none;
    color: white;
    margin-right: 20px; 
}

#nav ul li a.my-vue-app-active-class {
    color: #80bfff;
    border-bottom: 2px solid #80bfff;
}

#nav ul li a:hover {
    color: #b8b894;
}

#nav ul li a:active {
    color: #ff8080;
}

.auth-links {
    float: right;
}    
</style>