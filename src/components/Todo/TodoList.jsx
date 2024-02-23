import Todo from './Todo'
import styles from './TodoList.module.scss'
import TodosActions from './TodosActions'

function TodoList({
  todos,
  deleteTodo,
  todoCompleted,
  deleteCompletedHandler,
  resetTodosHandler,
}) {
  return (
    <div className={styles.todoListContainer}>
      <div className={styles.actionsContainer}>
        {todos.length > 0 && (
          <TodosActions
            todos={todos}
            deleteCompletedHandler={deleteCompletedHandler}
            resetTodosHandler={resetTodosHandler}
          />
        )}
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            todoCompleted={todoCompleted}
          />
        </div>
      ))}
    </div>
  )
}

export default TodoList
