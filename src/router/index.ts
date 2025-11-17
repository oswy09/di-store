import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '../views/Catalog.vue';
import AdminProducts from '../views/AdminProducts.vue';
import AdminOrders from '../views/AdminOrders.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog,
    },
    {
      path: '/di-admin',
      name: 'AdminProducts',
      component: AdminProducts,
    },
    {
      path: '/di-cotizaciones',
      name: 'AdminOrders',
      component: AdminOrders,
    },
    // Mantener rutas antiguas para compatibilidad (redirigen a las nuevas)
    {
      path: '/admin/products',
      redirect: '/di-admin'
    },
    {
      path: '/admin/orders',
      redirect: '/di-cotizaciones'
    },
  ],
});

export default router;
