import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Team from '../views/Team.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Gallery from '../views/Gallery.vue'
import Posts from '../views/Posts.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home'
        },
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'About'
        },
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: {
            title: 'Contact'
        },
        component: Contact
    },
    {
        path: '/team',
        name: 'Team',
        meta: {
            title: 'Team'
        },
        component: Team
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            title: 'Register'
        },
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Login'
        },
        component: Login
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/gallery',
        name: 'Gallery',
        meta: {
            title: 'Gallery'
        },
        component: Gallery
    },
    {
        path: '/posts',
        name: 'Posts',
        meta: {
            title: 'Posts'
        },
        component: Posts
    },
    {
        path: '/users',
        name: 'Users',
        meta: {
            title: 'Users'
        },
        component: Users
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((toRoute, fromRoute, next) => {
    var appName = 'my_vue_app | ';
    window.document.title = toRoute.meta && toRoute.meta.title ? appName + toRoute.meta.title : appName + 'Not Found';
    next();
})

export default router
