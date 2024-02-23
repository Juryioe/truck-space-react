import {
  CachedSharp,
  DeleteForeverSharp,
  FileDownloadSharp,
  FormatListBulleted,
} from '@mui/icons-material'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Stack,
  TextField,
} from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Draggable from 'react-draggable'
import { usePDF } from 'react-to-pdf'
import { uid } from 'uid'
import './App.css'
import background from './assets/bg1.jpg'
import Logo from './components/Logo/Logo'
import BasicModal from './components/Modal/Modal'
import Toolbar from './components/Toolbar/Toolbar'
import Trailer from './components/Trailer/Trailer'

const App = () => {
  const [removeModal, setRemoveModal] = useState(false)
  const [todoDisplay, setTodoDisplay] = useState(true)
  const [elements, setElements] = useState([])
  const { toPDF, targetRef } = usePDF({ filename: 'Truckspace.eu.pdf' })
  const [inputData, setInputData] = useState({
    quantity: '1',
    length: '120',
    width: '80',
    comment: '',
    color: '#ffc107',
  })
  const [trailerWidth, setTrailerWidth] = useState(252)
  const [trailerHeight, setTrailerHeight] = useState(1364)

  const handleRemoveModal = () => {
    setRemoveModal((prev) => !prev)
  }

  const handleInputsChange = (e, name, color) => {
    if (name === 'color') {
      setInputData({ ...inputData, color: color.hex })
    } else {
      setInputData({ ...inputData, [name]: e.target.value })
    }
  }

  const trailerDimensions = {
    height: trailerHeight + 'px',
    width: trailerWidth + 'px',
  }

  const handleTrailerHeightChange = (e) => {
    const value = +e.target.value + 4
    setTrailerHeight(value === '' ? 1364 : value)
  }

  const handleTrailerWidthChange = (e) => {
    const value = +e.target.value + 4
    setTrailerWidth(value === '' ? 252 : value)
  }

  const createNewElement = (e) => {
    e.preventDefault()
    if (!inputData.width || !inputData.length) return
    {
      const newElement = Array.from(
        { length: +inputData.quantity },
        (_, index) => {
          const key = uid()
          return (
            <div
              className="div_element"
              key={key}
              style={{
                width: `${inputData.width}px`,
                height: `${inputData.length}px`,
                backgroundColor: inputData.color,
              }}
            >
              <div className="dimensions">
                {inputData.length}x{inputData.width}
              </div>
              <div className="icons__wrap">
                <div
                  className="delete__icon"
                  onClick={() => handleRemoveElement(key)}
                >
                  <DeleteForeverSharp fontSize="small" />
                </div>
                <div
                  className="rotate__icon"
                  onClick={() => handleElementRotate(key)}
                >
                  <CachedSharp fontSize="small" />
                </div>
              </div>
              <div className="note">{inputData.comment}</div>
            </div>
          )
        }
      )
      setElements((prevElements) => [...prevElements, ...newElement])
    }
  }

  const handleRemoveElement = (key) => {
    setElements((prevElements) => prevElements.filter((e) => e.key !== key))
  }

  const handleElementRotate = (key) => {
    setElements((prevElements) => {
      return prevElements.map((element) => {
        if (element.key === key) {
          return (
            <div className="flipped" key={element.key}>
              {element}
            </div>
          )
        }
        return element
      })
    })
  }

  const divElement = (
    <div className="elements__container">
      {elements.map((element, index) => (
        <Draggable key={index}>
          <div>{element}</div>
        </Draggable>
      ))}
    </div>
  )

  const handleTodoDisplay = () => {
    setTodoDisplay((prevTodoDisplay) => !prevTodoDisplay)
  }

  return (
    <>
      <div className="resolution">
        <Container>
          <Alert severity="warning" sx={{ mt: 4 }}>
            <AlertTitle>Warning</AlertTitle>
            Sorry, but your screen resolution is too low.
            <br /> You need a minimum of 1050px to work.
          </Alert>
        </Container>
      </div>
      <div className="med">
        <Box
          sx={{
            backgroundColor: '#ffffffef',
            width: '100%',
            boxShadow: '1px 10px 18px -18px rgba(31, 31, 31, 1)',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 1,
            }}
          >
            <BasicModal
              removeModal={removeModal}
              onClose={handleRemoveModal}
              setElements={setElements}
              setRemoveModal={setRemoveModal}
            />
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: {
                    xs: '100%',
                    sm: '100%',
                  },
                }}
              >
                <Logo />
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignSelf="center"
                  spacing={1}
                  useFlexGap
                  sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                ></Stack>
              </Box>
            </Box>
            <Box>
              <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <TextField
                  id="outlined-basic"
                  label="Trailer length"
                  variant="outlined"
                  defaultValue="1360"
                  size="small"
                  sx={{ width: '125px' }}
                  InputProps={{ inputProps: { min: 0 } }}
                  type="number"
                  onChange={handleTrailerHeightChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Trailer width"
                  variant="outlined"
                  defaultValue="248"
                  size="small"
                  InputProps={{ inputProps: { min: 0, max: 400 } }}
                  sx={{ width: '125px' }}
                  type="number"
                  onChange={handleTrailerWidthChange}
                />
                <Button startIcon={<FileDownloadSharp />} onClick={toPDF}>
                  Download loading plan
                </Button>
                <Button
                  onClick={handleTodoDisplay}
                  startIcon={<FormatListBulleted />}
                >
                  Todo list
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 0 },
            pb: { xs: 0, sm: 0 },
          }}
        >
          <Box
            id="image"
            sx={{
              mt: { xs: 8, sm: 0 },
              alignSelf: 'center',
              minHeight: '100vh',
              width: '100%',
              backgroundImage: `url(${background})`,
              backgroundPosition: 'center',
            }}
          >
            <Toolbar
              handleInputsChange={handleInputsChange}
              createNewElement={createNewElement}
              handleRemoveModal={handleRemoveModal}
              elements={elements}
              inputDataColor={inputData.color}
            />
            <Trailer
              trailerDimensions={trailerDimensions}
              toPdf={targetRef}
              divElement={divElement}
              todoDisplay={todoDisplay}
              setTodoDisplay={setTodoDisplay}
            />
          </Box>
        </Container>
      </div>
    </>
  )
}

export default App
