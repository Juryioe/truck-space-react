import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import styles from './TodoForm.module.scss'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!text) return
    addTodo(text)
    setText('')
  }

  return (
    <form className={styles.forma} onSubmit={onSubmitHandler}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Add new task"
        variant="outlined"
        size="small"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="outlined" color="primary" typeof="submit">
        Add
      </Button>
    </form>
  )
}

export default TodoForm
