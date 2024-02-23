import { Box, Slide } from '@mui/material'
import Draggable from 'react-draggable'
import TodoApp from '../Todo/TodoApp'
import './Trailer.scss'

const Trailer = ({
  trailerDimensions,
  toPdf,
  divElement,
  todoDisplay,
  setTodoDisplay,
}) => {
  return (
    <Slide direction="up" in mountOnEnter unmountOnExit timeout={2800}>
      <Box sx={{ position: 'relative', zIndex: 50 }}>
        <div className="truck-body" ref={toPdf}>
          {todoDisplay && (
            <Draggable>
              <Box
                sx={{
                  width: '310px',
                  position: 'absolute',
                  top: 80,
                  left: 40,
                }}
              >
                <TodoApp setTodoDisplay={setTodoDisplay} />
              </Box>
            </Draggable>
          )}
          <div className="head"></div>
          <div className="trailer" style={trailerDimensions}>
            {divElement}
          </div>
        </div>
      </Box>
    </Slide>
  )
}

export default Trailer
