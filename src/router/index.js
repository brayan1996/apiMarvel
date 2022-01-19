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
