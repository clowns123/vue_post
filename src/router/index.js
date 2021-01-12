import Vue from "vue";
import VueRouter from "vue-router";

//components
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import UserView from "../views/UserView.vue";
import ItemVuew from "../views/ItemVuew.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/news" },
    { path: "/news", component: NewsView },
    { path: "/ask", component: AskView },
    { path: "/jobs", component: JobsView },
    { path: "/user", component: UserView },
    { path: "/item", component: ItemVuew }
  ]
});

export default router;
