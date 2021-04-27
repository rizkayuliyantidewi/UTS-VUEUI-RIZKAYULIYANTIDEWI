import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/mahasiswa/Home.vue'
import Createmahasiswa from '../views/mahasiswa/Createmahasiswa.vue'
import Editmahasiswa from '../views/mahasiswa/Editmahasiswa.vue'
import Index from '../views/matakuliah/Index.vue'
import Creatematakuliah from '../views/matakuliah/Creatematakuliah.vue'
import Editmatakuliah from '../views/matakuliah/Editmatakuliah.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createmahasiswa',
    name: 'Createmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswa
  },
  {
    path: '/editmahasiswa/:id',
    name: 'Editmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswa
  },
  {
    path: '/matakuliah',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: '/creatematakuliah',
    name: 'Creatematakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliah
  },
  {
    path: '/editmatakuliah',
    name: 'Editmatakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliah
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
