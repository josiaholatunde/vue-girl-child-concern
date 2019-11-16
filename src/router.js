import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Blog from './views/Blog.vue'
import Leadership from './views/Leadership.vue'
import OurStory from './views/OurStory.vue'
import ContactUs from './views/ContactUs.vue'



Vue.use(VueRouter);


const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/leadership',
        component: Leadership
    },
    {
        path: '/our-story',
        component: OurStory
    },
    {
        path: '/contact-us',
        component: ContactUs
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: __dirname, 
})


export default router;