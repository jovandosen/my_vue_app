import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home'
        },
        component: () => import(/* webpackChunkName: "Home" */ "../views/Home")
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'About'
        },
        component: () => import(/* webpackChunkName: "About" */ "../views/About")
    },
    {
        path: '/contact',
        name: 'Contact',
        meta: {
            title: 'Contact'
        },
        component: () => import(/* webpackChunkName: "Contact" */ "../views/Contact")
    },
    {
        path: '/team',
        name: 'Team',
        meta: {
            title: 'Team'
        },
        component: () => import(/* webpackChunkName: "Team" */ "../views/Team")
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            title: 'Register'
        },
        component: () => import(/* webpackChunkName: "Register" */ "../views/Register")
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Login'
        },
        component: () => import(/* webpackChunkName: "Login" */ "../views/Login")
    },
    {
        path: '/gallery',
        name: 'Gallery',
        meta: {
            title: 'Gallery'
        },
        component: () => import(/* webpackChunkName: "Gallery" */ "../views/Gallery")
    },
    {
        path: '/posts',
        name: 'Posts',
        meta: {
            title: 'Posts'
        },
        component: () => import(/* webpackChunkName: "Posts" */ "../views/Posts")
    },
    {
        path: '/users',
        name: 'Users',
        meta: {
            title: 'Users'
        },
        component: () => import(/* webpackChunkName: "Users" */ "../views/Users")
    },
    {
        path: '/post/:slug',
        name: 'Post',
        meta: {
            title: 'Post'
        },
        props: true,
        component: () => import(/* webpackChunkName: "Post" */ "../views/Post")
    },
    {
        path: '/user/:username',
        name: 'User',
        meta: {
            title: 'User'
        },
        props: true,
        component: () => import(/* webpackChunkName: "User" */ "../views/User")
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "NotFound" */ "../views/NotFound")
    }
]

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: "my-vue-app-active-class",
    routes
})

router.beforeEach((toRoute, fromRoute, next) => {
    var appName = 'my_vue_app | ';
    window.document.title = toRoute.meta && toRoute.meta.title ? appName + toRoute.meta.title : appName + 'Not Found';
    next();
})

export default router
