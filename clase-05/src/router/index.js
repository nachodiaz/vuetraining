import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PersonView from '../views/PersonView.vue'
import PersonLastName from '../views/PersonLastName.vue'
import Wall from '../views/Wall.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/wall',
    name: 'Wall',
    component: Wall,
    beforeEnter : (to, from, next) => {
        console.log('BeforeEach')
        console.log({to, from}) 
        next()
    }
  },
  {
    path: '/About',
    name: 'about',
    component: About,
    beforeEnter: (to, from, next) => {
      console.log('BeforeEnter ')
      console.log({to, from})
      next()
    },
  },
  {
    path: '/name',
    component: PersonView,
    children : [
      {
        path: ':id',
        name: 'lastname',
        component: PersonLastName
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach ((to,from,next)=>{
  console.log('BeforEach')
  console.log({to,from})
  next()
})

router.afterEach((to, from) => {
  console.log('AfterEach')
  console.log(to, from)
})


export default router
  