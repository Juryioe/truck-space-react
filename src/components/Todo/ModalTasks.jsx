import { Button } from '@mui/material'
import styles from './ModalTasks.module.scss'

function ModalTasks({ modal, setModal, setTodos }) {
  const resetTodosHandler = () => {
    setTodos([])
    setModal(false)
  }

  return (
    <>
      {modal && (
        <div className={styles.modalContainer}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm reset</h5>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to reset all tasks?</p>
              </div>
              <div className="modal-footer gap-2 p-2">
                <Button variant="outlined" onClick={() => setModal(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={resetTodosHandler}
                  variant="outlined"
                  color="error"
                >
                  Remove all tasks
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalTasks
