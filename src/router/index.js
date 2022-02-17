import Vue from 'vue'
import VueRouter from 'vue-router'
import Operation from '@/views/Operation.vue'
import Label from '@/views/Label.vue'
import Count from '@/views/Count.vue'
import LabelDisplay from '@/components/LabelDisplay.vue'
import LabelAddIcon from '@/components/LabelAddIcon.vue'
import LabelAddMessage from '@/components/LabelAddMessage.vue'
import DataDisplay from '@/components/DataDisplay.vue'
import ViewDisplay from '@/components/ViewDisplay.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/operation' },
  { path: '/operation', component: Operation },
  {
    path: '/label',
    component: Label,
    redirect: '/label/labelDisplay',
    children: [
      { path: 'labelDisplay', component: LabelDisplay },
      { path: 'labelAddIcon', component: LabelAddIcon },
      { path: 'labelAddMessage', component: LabelAddMessage }
    ]
  },
  {
    path: '/count',
    component: Count,
    redirect: '/count/dataDisplay',
    children: [
      { path: 'dataDisplay', component: DataDisplay },
      { path: 'viewDisplay', component: ViewDisplay }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
