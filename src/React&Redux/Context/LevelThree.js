import React, {Component} from 'react';
import {GreetContext} from './index'

const LevelThree = () => <GreetContext.Consumer>{greet => <h1>{greet}</h1>}</GreetContext.Consumer>
export default LevelThree;