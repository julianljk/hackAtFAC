import React, { Component } from 'react';
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
    })
  }
  render() {
    let token = this.state.counter >= 0 ? "[̲̅$̲̅(̲̅1)̲̅$̲̅]" : "[̲̅$̲̅(̲̅-1)̲̅$̲̅]"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p>
            Counter value: {this.state.counter}
          </p>
          <div>
            {-10} <input type="range" min={-10} max={10} step={1} onChange={this.onSliderChange} value={this.state.sliderValue}/> {10}
          </div>
          <div>
            {this.state.sliderValue}
          </div>
          <div>
            {token.repeat(Math.abs(this.state.counter))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
