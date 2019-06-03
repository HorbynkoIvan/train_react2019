import React, {Component} from 'react';
import LevelOne from './LevelOne'

export const GreetContext = React.createContext();

class Lesson extends Component {
    render() {
        return (
            <GreetContext.Provider value='Hello1'>
                <LevelOne greet="Hello"/>
            </GreetContext.Provider>
        )
    }
}

export default Lesson;