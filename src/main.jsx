import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import AddTodo from './Components/AddToDo.jsx'
import Todo from './Components/Todo.jsx'
import { Store } from './App/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <Todo />
   <AddTodo />
  </Provider>,
)
