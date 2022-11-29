import { createWebHistory, createRouter } from "vue-router";
import WebsiteDessert from "@/views/WebsiteDessert.vue";

const routes = [
    {
        path: "/",
        name: "websitedessert",
        component: WebsiteDessert,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    }, 
    {
        path: "/desserts/:id",
        name: "dessert.edit",
        component: () => import("@/views/DessertEdit.vue"),
        props: true
    },
    {
        path: "/dessertAdd",
        name: "dessert.add",
        component: () => import("@/views/DessertAdd.vue"),
        props: true
    },    
    {
        path: "/signup",
        name: "dessert.signup",
        component: () => import("@/views/DessertRegister.vue"),
        props: true
    },
    {
        path: "/login",
        name: "dessert.login",
        component: () => import("@/views/DessertLogin.vue"),
        props: true
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;