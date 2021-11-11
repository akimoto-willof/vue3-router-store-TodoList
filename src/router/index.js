import { createRouter, createWebHistory } from "vue-router";
import Top from "../views/Top.vue";
import TodoList from "../views/TodoList.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
    {
        path: "/",
        component: Top,
    },
    {
        path: "/todo",
        component: TodoList,
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
