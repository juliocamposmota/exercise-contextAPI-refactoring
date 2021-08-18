import React from 'react';
import MyContext from './MyContext';
import Cars from './Cars';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }

  render() {
    return (
      <MyContext.Provider value={{ ...this.state, moveCar: this.handleClick }}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
