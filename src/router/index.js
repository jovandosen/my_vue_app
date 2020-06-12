import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

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
            title: 'Posts',
            requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "Posts" */ "../views/Posts")
    },
    {
        path: '/users',
        name: 'Users',
        meta: {
            title: 'Users',
            requiresAuth: true
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
            title: 'User',
            requiresAuth: true
        },
        props: true,
        component: () => import(/* webpackChunkName: "User" */ "../views/User"),
        children: [
            {
                path: 'posts',
                name: 'userPosts',
                props: true,
                meta: {
                    title: 'User Posts',
                    requiresAuth: true
                },
                component: () => import(/* webpackChunkName: "UserPosts" */ "../views/UserPosts")
            }
        ]
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition){
            return savedPosition
        } else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ x: 0, y: 0 })
                }, 500)
            })
        }
    }
})

router.beforeEach((toRoute, fromRoute, next) => {
    var appName = 'my_vue_app | ';
    window.document.title = toRoute.meta && toRoute.meta.title ? appName + toRoute.meta.title : appName + 'Not Found';
    next();
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(!store.user){
            next({ name: "Login" })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
