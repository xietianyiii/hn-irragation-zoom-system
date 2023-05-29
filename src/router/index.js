import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/main/index.vue'

import Serve from '../views/serve/index.vue'
import MapServer from '../views/serve/mapServe/mapServe.vue'

import Mapbox from '../views/mapbox/index.vue'
import MapboxServer from '../views/mapbox/mapboxmap/index.vue'

import Echart from '../views/Echart/index.vue'
import Echart1 from '../views/Echart/echart1/index.vue'
import Echart2 from '../views/Echart/echart2/index.vue'
import Echart3 from '../views/Echart/echart3/index.vue'
import Echart4 from '../views/Echart/echart4/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
      title: 'DataServer-main'
    },
    redirect: '/main/serve',
    children: [{
      path: 'serve',
      name: 'serve',
      component: Serve,
      meta: {},
      redirect: '/main/serve/mapServer',
      children: [{
        path: 'mapServer',
        name: 'mapServer',
        component: MapServer
      }]
    },
    {
      path: 'mapbox',
      name: 'mapbox',
      component: Mapbox,
      meta: {},
      redirect: '/main/mapbox/mapboxServer',
      children: [{
        path: 'mapboxServer',
        name: 'mapboxServer',
        component: MapboxServer,
      },]
    }, {
      path: 'echart',
      name: 'echart',
      component: Echart,
      meta: {},
      redirect: '/main/echart/echart1',
      children: [{
        path: 'echart1',
        name: 'echart1',
        component: Echart1
      }, {
        path: 'echart2',
        name: 'echart2',
        component: Echart2
      }, {
        path: 'echart3',
        name: 'echart3',
        component: Echart3
      },{
        path: 'echart4',
        name: 'echart4',
        component: Echart4
      },
    ]
    },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
