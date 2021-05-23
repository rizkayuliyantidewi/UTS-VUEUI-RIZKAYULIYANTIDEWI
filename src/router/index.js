import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/mahasiswa/Home.vue'
import Createmahasiswa from '../views/mahasiswa/Createmahasiswa.vue'
import Editmahasiswa from '../views/mahasiswa/Editmahasiswa.vue'
import Index from '../views/matakuliah/Index.vue'
import Creatematakuliah from '../views/matakuliah/Creatematakuliah.vue'
import Editmatakuliah from '../views/matakuliah/Editmatakuliah.vue'
import Createabsensi from '../views/absensi/Createabsensi.vue'
import Index from '../views/absensi/Index.vue'
import Createkontrak from '../views/kontrak/Createkontrak.vue'
import Editkontrak from '../views/kontrak/Editkontrak.vue'
import Index from '../views/kontrak/Index.vue'
import Createjadwal from '../views/jadwal/Createjadwal.vue'
import Editjadwal from '../views/jadwal/Editjadwal.vue'
import Index from '../views/jadwal/Index.vue'
import Createsemester from '../views/semester/Createsemester.vue'
import Editsemester from '../views/semester/Editsemester.vue'
import Index from '../views/semester/Index.vue'


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
  },
  {
    path: '/absensi',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: '/createabsensi',
    name: 'Createabsensi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createabsensi
  },
  {
    path: '/kontrak',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: '/createkontrak',
    name: 'Createkontrak',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createkontrak
  },
  {
    path: '/editkontrak/:id',
    name: 'Editkontrak',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkontrak
  },
  {
    path: '/jadwal',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: '/createjadwal',
    name: 'Createjadwal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createjadwal
  },
  {
    path: '/editjadwal/:id',
    name: 'Editjadwal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editjadwal
  },
  {
    path: '/semester',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: '/createsemester',
    name: 'Createsemester',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createsemester
  },
  {
    path: '/editsemester/:id',
    name: 'Editsemester',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editsemester
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
