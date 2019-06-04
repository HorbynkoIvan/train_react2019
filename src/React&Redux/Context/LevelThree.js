import React from 'react'
import { GreetContext } from './index'

const LevelThree = () =>
  <GreetContext.Consumer>
    {({ greet, name }) => (
        <>
            <h1>{greet}!</h1>
            <h1>My dear friend, {name}!</h1>
        </>)}
  </GreetContext.Consumer>

export default LevelThree
