import Vue from "vue";
import VueRouter from "vue-router";

//components
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/news", component: NewsView },
        { path: "/ask", component: AskView },
        { path: "/job", component: JobsView },
    ],
});

export default router;
