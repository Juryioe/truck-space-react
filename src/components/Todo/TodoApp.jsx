import { Cancel, FormatListBulleted } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { uid } from 'uid'
import ModalTasks from './ModalTasks'
import styles from './TodoApp.module.scss'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App({ setTodoDisplay }) {
  const [todos, setTodos] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])
  const addTodoHandler = (text) => {
    const newTodo = { text: text, isCompleted: false, id: uid() }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const todoCompletedHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const resetTodosHandler = () => {
    setModal(true)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className={styles.todoAppContainer}>
      <ModalTasks modal={modal} setModal={setModal} setTodos={setTodos} />
      <strong className="cursor">
        <div className={styles.wrap}>
          <div className={styles.logoWrapper} title="I can be moved around!">
            <FormatListBulleted />
            <Typography
              component="h4"
              variant="body1"
              sx={{ fontWeight: 300, pl: 0.5 }}
            >
              What should be done?
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => setTodoDisplay(false)}>
              <Cancel
                sx={{
                  color: '#fff',
                  cursor: 'pointer',
                  ':hover': {
                    transform: 'scale(1.2)',
                  },
                  transition: 'all .3s ease-in-out',
                }}
              />
            </IconButton>
          </div>
        </div>
      </strong>

      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        todoCompleted={todoCompletedHandler}
        deleteCompletedHandler={deleteCompletedTodoHandler}
        resetTodosHandler={resetTodosHandler}
      />
    </div>
  )
}

export default App
