import { Cached, DeleteForeverSharp } from '@mui/icons-material'
import { Button } from '@mui/material'
import styles from './TodoActions.module.scss'

function TodosActions({ resetTodosHandler, deleteCompletedHandler, todos }) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button size="small" startIcon={<Cached />} onClick={resetTodosHandler}>
        Remove all
      </Button>

      <Button
        size="small"
        startIcon={<DeleteForeverSharp />}
        onClick={deleteCompletedHandler}
      >
        Delete completed
      </Button>
    </div>
  )
}

export default TodosActions
