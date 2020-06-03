<template>
    <div class="sidebar-one">
        <div class="sidebar-one-title">
            <h3>My Vue App</h3>
        </div>
        <div id="sidebar-one-body">
            <ul>
                <li v-for="link in links" v-bind:key="link.id">
                    <a v-bind:href="link.url" v-bind:target="link.target">{{ link.text }}</a>
                </li>
            </ul>
        </div>        
    </div>
</template>

<script>
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
                ]
            }
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
}

#sidebar-one-body ul {
    list-style-type: none;
}

#sidebar-one-body ul li {
    padding-bottom: 5px;
}

#sidebar-one-body ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
}

#sidebar-one-body ul li a:hover {
    color: black;
    padding-left: 10px;
    transition: 0.3s;
}
</style>