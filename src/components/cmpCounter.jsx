import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counterActions';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      sliderValue: 0
    }
  }
  componentWillMount(){
    setInterval(() => {
      this.props.dispatch(incrementCounter(this.state.sliderValue));
    }, 1000)
  }
  onSliderChange = (e) => {
    this.setState({
      sliderValue: Number(e.target.value)
    })
  }
  render() {
    return (
      <div>
        <p className="App-intro">
          Counter value: {this.props.counter}
        </p>
        <div>
          {-10} <input type="range" min={-10} max={10} step={1} onChange={this.onSliderChange} value={this.state.sliderValue}/> {10}
        </div>
        <div>
          {this.state.sliderValue}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
export default connect(mapStateToProps)(Counter);
