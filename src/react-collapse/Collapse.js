import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 700px;
`

const ClickMe = styled.div`
  position:relative;
  background: chocolate;
  padding: 30px;
  .arrow-btn{
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    transition: background-color .3s;
    top: 50%;
    transform: translateY(-50%);
    right: 17px;
     &:before,
     &:after {
       content: '';
       display: block;
       width: 8px;
       height: 2px;
       background: #7779ce;
       transition: background-color .3s;
          }
     &:before {
       position: absolute;
       top: 50%;
       right: 32%;
       transform: rotate(45deg);
        }
     &:after {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: rotate(-45deg);
      }
  }
`

const StyledCollapse = styled(Collapse)`
  background: tomato;
  .ReactCollapse--content{
    padding: 30px 40px;
  }
`

const CollapseComponent = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Container>
      <ClickMe onClick={() => setOpen(!isOpen)}>Click me please!<span className="arrow-btn"></span></ClickMe>
      <StyledCollapse
        isOpened={isOpen}
      >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at beatae corporis dignissimos
                distinctio eligendi eum illum, incidunt ipsa iure laudantium libero maiores minima minus necessitatibus
                nisi nobis nulla odio odit praesentium quaerat quas quia quos soluta suscipit velit voluptatem
                voluptates. Ab adipisci enim eum explicabo ipsam, qui repudiandae tempore.
      </StyledCollapse>
    </Container>
  )
}

export default CollapseComponent
