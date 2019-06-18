import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

const CollapseComponent = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <div onClick={() => setOpen(!isOpen)}>Click me please!</div>
      <Collapse
        isOpened={isOpen}
      >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at beatae corporis dignissimos
                distinctio eligendi eum illum, incidunt ipsa iure laudantium libero maiores minima minus necessitatibus
                nisi nobis nulla odio odit praesentium quaerat quas quia quos soluta suscipit velit voluptatem
                voluptates. Ab adipisci enim eum explicabo ipsam, qui repudiandae tempore.
      </Collapse>
    </div>
  )
}

export default CollapseComponent
