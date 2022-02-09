import TodoRouter from '@/pages/todos/TodoRouter.vue'
import TodoList from '@/pages/todos/TodoList.vue'
import TodoCreate from '@/pages/todos/TodoCreate.vue'
import TodoFinishedList from '@/pages/todos/TodoFinishedList.vue'
import TodoUpdate from '@/pages/todos/TodoUpdate.vue'

const todos = [{
    path: '/',
    component: TodoRouter,
    children: [
      {
        path: '',
        component:TodoList
      }, { 
        path: '/todocreate',
        component: TodoCreate
      }, {
        path: '/todofinishedlist',
        component: TodoFinishedList
      }, {
        path: '/todoupdate',
        component: TodoUpdate
    }
    ]
  }, ]

export default todos