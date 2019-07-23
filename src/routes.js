import Vue from 'vue'
import Router from 'vue-router'
import aList from '@/components/alumno/list'
import pList from '@/components/profesor/list'
import asList from '@/components/asignatura/list'
import hList from '@/components/horario/list'
import hw from '@/components/HelloWorld'
import pform from '@/components/profesor/form'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'start',
        component: hw,
      },
      {
        path: '/createprof',
        name: 'formprof',
        component: pform,
      },
      {
        path: '/aList',
        name: 'aList',
        component: aList,
      },
      {
        path: '/pList',
        name: 'pList',
        component: pList,
      },
      {
        path: '/asList',
        name: 'asList',
        component: asList,
      },
      {
        path: '/hList',
        name: 'hList',
        component: hList,
      },
     
    ]
});
export default router