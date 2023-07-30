import { createRouter, createWebHistory } from 'vue-router';

import LoginForm from "@/components/LoginForm.vue";
import Menu from "@/components/Header/Menu.vue";
import Index from "@/components/Index.vue";

const routes = [
    { path: '/:pathMatch(.*)*', redirect: '/index' },
    { path: '/index', component: Index },
    { path: '/menu', component: Menu },
    { path: '/loginForm', component: LoginForm},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;