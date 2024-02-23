import { DeleteForeverSharp } from '@mui/icons-material'
import { Box, Button, Modal, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 335,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
}

const BasicModal = ({ removeModal, setRemoveModal, onClose, setElements }) => {
  const handleRemove = () => {
    setElements([])
    setRemoveModal(false)
  }
  return (
    <div>
      <Modal
        open={removeModal}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">
            Do you want to remove all the cargo?
          </Typography>
          <Box
            sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'center' }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setRemoveModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteForeverSharp />}
              onClick={handleRemove}
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal
