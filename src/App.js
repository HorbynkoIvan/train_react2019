import React from 'react'
import Lesson from './React&Redux/Context'
import Collapse from './react-collapse/Collapse'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`

function App () {
  return (
    <Container>
      <Lesson/>
      <Collapse/>
    </Container>
  )
}

export default App
