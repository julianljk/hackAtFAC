import React, { Component } from 'react';
import Slider from './components/slider.jsx';
import Printer from './components/printer.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
      sliderValue: 0
    }
  }
  componentWillMount(){
    setInterval(() => {
      this.setState({
        counter: this.state.counter + this.state.sliderValue
      });
    }, 1000)
  }
  onSliderChange = (e) => {
    this.setState({
      sliderValue: Number(e.target.value)
    });
  }
  render() {
    let {
      counter,
      sliderValue
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Slider
          counter={counter}
          onSliderChange={this.onSliderChange}
          sliderValue={sliderValue}
        />
        <Printer
          value={counter}
          negativeToken={"[̲̅$̲̅(̲̅-1)̲̅$̲̅]"}
          positiveToken={"[̲̅$̲̅(̲̅1)̲̅$̲̅]"}
        />
      </div>
    );
  }
}

export default App;
