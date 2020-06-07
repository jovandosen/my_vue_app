<template>
    <div class="sidebar-one">
        <div class="sidebar-one-title">
            <h3 v-bind:class="appNameStyle">My Vue App</h3>
        </div>
        <div id="sidebar-one-body">
            <ul>
                <Link v-for="link in links" v-bind:link="link" v-bind:key="link.id" />
            </ul>
        </div>
        <div id="sidebar-one-links-title">
            <h3>Read More</h3>
        </div>
        <div id="sidebar-one-links">
            <ul>
                <li>
                    <router-link to="/posts">Posts</router-link>
                </li>
                <li>
                    <router-link to="/users">Users</router-link>
                </li>
            </ul>
        </div>        
    </div>
</template>

<script>
    import Link from './Link.vue'

    export default {
        name: "SidebarOne",
        data() {
            return {
                links: [
                    { id: 1, text: 'Html', url: 'https://www.w3schools.com/html/default.asp', target: '_blank' },
                    { id: 2, text: 'Css', url: 'https://www.w3schools.com/css/default.asp', target: '_blank' },
                    { id: 3, text: 'Javascript', url: 'https://www.w3schools.com/js/default.asp', target: '_blank' },
                    { id: 4, text: 'Sql', url: 'https://www.w3schools.com/sql/default.asp', target: '_blank' },
                    { id: 5, text: 'Php', url: 'https://www.w3schools.com/php/default.asp', target: '_blank' },
                    { id: 6, text: 'Slim', url: 'http://www.slimframework.com/', target: '_blank' },
                    { id: 7, text: 'Laravel', url: 'https://laravel.com/', target: '_blank' },
                    { id: 8, text: 'Wordpress', url: 'https://developer.wordpress.org/', target: '_blank' },
                    { id: 9, text: 'Bootstrap', url: 'https://getbootstrap.com/', target: '_blank' },
                    { id: 10, text: 'Vue', url: 'https://vuejs.org/', target: '_blank' }
                ],
                appNameStyle: 'animate__animated animate__flipInX'
            }
        },
        components: {
            Link
        }
    }
</script>

<style scoped>
.sidebar-one-title {
    padding: 10px;
    color: white;
    border-bottom: 1px solid #808080;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

#sidebar-one-body {
    padding: 10px;
    border-bottom: 1px solid #808080;
}

#sidebar-one-body ul, #sidebar-one-links ul {
    list-style-type: none;
}

.sidebar-one-title h3 {
    color: #3E86C0FF;
}

#sidebar-one-links-title {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-bottom: 1px solid #808080;
    padding: 10px;
}

#sidebar-one-links-title h3 {
    color: #168EE8FF;
}

#sidebar-one-links {
    padding: 10px;
}

#sidebar-one-links ul li {
    padding-bottom: 5px;
}

#sidebar-one-links ul li a {
    color: white;
    font-size: 18px;
    text-decoration: none;
}

#sidebar-one-links ul li a:hover {
    color: black;
    padding-left: 10px;
    transition: 0.3s;
}
</style>