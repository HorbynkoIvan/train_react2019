import React, { Component } from 'react'
import LevelOne from './LevelOne'

export const GreetContext = React.createContext()

class Lesson extends Component {
  render () {
    return (
      <GreetContext.Provider value={{ greet: 'Hello', name: 'Ivan', click: () => { console.log('Hello') } }}>
        <LevelOne/>
      </GreetContext.Provider>
    )
  }
}

export default Lesson
