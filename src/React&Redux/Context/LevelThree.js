import React, { useContext } from 'react'
import { GreetContext } from './index'

const LevelThree = () => {
  { /* <Greet Context.Consumer>
    {({ greet, name, click }) => (
        <>
            <h1 onClick={click}>{greet}!</h1>
            <h1>My dear friend, {name}!</h1>
        </>)}
  </GreetContext.Consumer> */
  }
  const { greet, name, click } = useContext(GreetContext)
  return (
    <>
        <h1 onClick={click}>{greet}!</h1>
        <h1>My dear friend, {name}!</h1>
    </>
  )
}

export default LevelThree