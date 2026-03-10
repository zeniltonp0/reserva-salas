import type { RouteRecordRaw } from "vue-router";


export const routes: RouteRecordRaw[] = [
    {
        name: "Auth",
        path: "/auth",
        component: () => import("@/layouts/AuthLayout.vue"),
        children: [{ name: "Register", path: "register", component: () => import("../views/Register.vue") },
                   { name: "Login", path: "login", component: () => import("../views/Login.vue") },
        ]
    }, 
    {
        name: "Home",
        path: "/",
        component: () => import("@/layouts/AppLayout.vue"),
        children: [{ name: "Dashboard", path: "dashboard", component: () => import("../views/Dashboard.vue") },]
    },
]