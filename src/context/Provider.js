import React, { Component } from 'react';
import MyContext from './MyContext';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
        moveCar: this.moveCar,
      },
      signal: {
        color: 'red',
        changeSignal: this.changeSignal,
      },
    };
  }

  moveCar = (car, side) => {
    this.setState({
      ...this.state,
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }

  changeSignal = (color) => {
    this.setState({
      ...this.state,
      signal: {
        ...this.state.signal,
        color,
      },
    });
  }

  render() {
    const { children } = this.props;

    return (
      <MyContext.Provider value={ this.state }>
        { children }
      </MyContext.Provider>
    );
  }
}

export default Provider;
