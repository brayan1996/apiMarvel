import { createRouter, createWebHistory } from 'vue-router'
import characterRouter from '@/modules/characters/routes'
import comicRouter from '@/modules/comics/routes'
const routes = [
  {
    path: '/characters',
    ...characterRouter
    
  },
  {
    path:'/comics',
    ...comicRouter
  },
  // {
  //   path: '/comics',
  //   name: 'comicsLayout',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
      path:'',
      redirect: { name: 'character-group' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
