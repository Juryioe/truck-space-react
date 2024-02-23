import { AddCircleSharp, DeleteForeverSharp } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import { CirclePicker } from 'react-color'

const Toolbar = ({
  handleInputsChange,
  createNewElement,
  handleRemoveModal,
  elements,
  inputDataColor,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffffd0',
        backdropFilter: 'blur(4px)',
        borderRadius: 10,
        width: '100%',
        padding: '15px 0',
        mt: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        boxShadow: '1px 10px 18px -18px #4a4a4a',
        position: 'sticky',
        top: 10,
        zIndex: 100,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Quantity"
        variant="outlined"
        defaultValue="1"
        size="small"
        type="number"
        sx={{ width: '75px' }}
        InputProps={{
          inputProps: { min: 0 },
        }}
        onChange={(e) => handleInputsChange(e, 'quantity')}
      />

      <TextField
        id="outlined-basic"
        label="length"
        variant="outlined"
        defaultValue="120"
        size="small"
        type="number"
        sx={{ width: '90px' }}
        InputProps={{ inputProps: { min: 0 } }}
        onChange={(e) => handleInputsChange(e, 'length')}
      />
      <TextField
        id="outlined-basic"
        label="Width"
        variant="outlined"
        defaultValue="80"
        size="small"
        type="number"
        sx={{ width: '90px' }}
        InputProps={{ inputProps: { min: 0 } }}
        onChange={(e) => handleInputsChange(e, 'width')}
      />
      <TextField
        id="outlined-basic"
        label="Comment"
        variant="outlined"
        size="small"
        onChange={(e) => handleInputsChange(e, 'comment')}
      />
      <CirclePicker
        colors={['#ffc107', '#cddc39', '#c2bdb6', '#68b3f4', '#b69fe4']}
        width="210px"
        onChange={(color, e) => handleInputsChange(e, 'color', color)}
        color={inputDataColor}
      />
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        startIcon={<AddCircleSharp />}
        onClick={createNewElement}
      >
        Create
      </Button>
      {elements.length > 0 && (
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteForeverSharp />}
          onClick={handleRemoveModal}
        >
          Remove all
        </Button>
      )}
    </Box>
  )
}

export default Toolbar
