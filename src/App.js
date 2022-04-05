import ValidationSample from './ValidationSample';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import Counter from './Counter';

import { Component } from 'react';

import React from 'react';
import { render } from '@testing-library/react';
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }


  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      < div >
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div >
    );
  }
}

export default App;
