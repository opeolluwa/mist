// import oly the app entry as static, others must be dynamic
import Mist from '@/views/home/Index.vue'
import Home from "@/views/home/Home.vue"
const About = () => import("@/views/home/About.vue")
const Pricing = () => import("@/views/home/Pricing.vue")
const SignUp = () => import("@/views/home/SignUp.vue")
const Login = () => import("@/views/home/Login.vue")
const PasswordReset = () => import("@/views/home/ForgottenPassword.vue")


export default {
    path: '/',
    component: Mist,
    children: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: Pricing
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: SignUp
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/forgotten-password',
            name: 'forgotten-password',
            component: PasswordReset
        },
    ]
}