// Настройка роутинга для продакшена
// import {createRouter, createWebHistory} from "vue-router";
// const routerHistory = createWebHistory();
//===============================================================

// Настройка роутинга для разработки
import {createRouter, createWebHashHistory} from "vue-router";
const routerHistory = createWebHashHistory();

//===============================================================

import HomePage from "@/pages/HomePage";
import PolicyPage from "@/pages/PolicyPage";
import UserAgreementPage from "@/pages/UserAgreementPage";
import notFoundPage from "@/pages/NotFoundPage";
import ThankYouPage from "@/pages/ThankYouPage"

const routers = createRouter(
    {
        history: routerHistory,
        routes: [
            {
                path: "/",
                name: "home",
                component: HomePage,
                meta: {
                    title: "Главная"
                }
            },
            {
                path: "/thankyou",
                name: "thankyou",
                component: ThankYouPage,
                meta: {
                    title: "Страница благодарности"
                }
            },
            {
                path: "/policy",
                name: "policy",
                component: PolicyPage,
                meta: {
                    title: "Политика конфиденциальности"
                }
            },
            {
                path: "/useragreement",
                name: "useragreement",
                component: UserAgreementPage,
                meta: {
                    title: "Пользовательское соглашение"
                }
            },

            {
                path: "/:CatchAll(.*)",
                name: "404",
                component: notFoundPage,
                meta: {
                    title: "404 - страница не найдена"
                }
            },
        ],

    }
)

routers.beforeEach((to,from, next) => {
    document.title = `PROXIMA - ${to.meta.title}`;
    next();
})




export default routers;