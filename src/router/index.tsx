import { createBrowserRouter } from "react-router-dom";
import IndexComponent from '@/pages/index'
import TodoListComponent from '@/pages/todoList'

const router: unknown = createBrowserRouter([
  {
    path: '',
    element: <IndexComponent />
  },
  {
    path: '/todo',
    element: <TodoListComponent />
  }
])

export default router