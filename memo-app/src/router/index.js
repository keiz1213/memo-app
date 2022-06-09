import Vue from 'vue'
import Router from 'vue-router'
import MemoDetail from '../components/MemoDetail.vue'
import MemoCreate from '../components/MemoCreate.vue'

Vue.use(Router)

const routes = [
  {
    path: '/memos/new',
    name: 'MemoCreate',
    component: MemoCreate
  },
  {
    path: '/memos/:memoId',
    name: 'MemoDetail',
    component: MemoDetail
  }
]

const router = new Router({
  base: process.env.BASE_URL,
  routes
})

export default router
