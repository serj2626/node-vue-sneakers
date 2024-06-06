import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/views/NotFoundView.vue"),
      },
    {
      path: '/',
      name: 'products',
      component: () => import('../views/ProductList.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/ProductDetail.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartPage.vue')
    },
    {
      path: "/",
      name: "home",
      redirect: {
        name: 'products'
      }
    },

  ]
})

export default router
