import React, { Component } from 'react';
import Slider from './components/slider.jsx';
import Printer from './components/printer.jsx';
import CryptoList from './components/cryptoList.jsx';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { addToCounter, setSliderValue } from './actions/counterActions.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showSlider: true
        }
    }
    componentWillMount() {
        setInterval(() => {
          this.props.dispatch(addToCounter());
        }, 1000)
    }
    onSliderChange = (e) => {
      this.props.dispatch(setSliderValue(Number(e.target.value)))
    }
    onToggle = (e) => {
        this.setState({
            showSlider: !this.state.showSlider
        });
    }
    render() {
        let {
          counter,
          sliderValue
        } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button type="button" onClick={this.onToggle}>Toggle Slider</button>
                <div className="component"> 
                {
                    this.state.showSlider &&
                    <div className="slider-component">
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
                }
                    <div className="list-component">
                        <CryptoList 
                            totalMoney={counter}
                        /> 
                    </div> 
                </div> 
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.counter, 
    sliderValue: state.counter.sliderValue
  }
}
export default connect(mapStateToProps)(App);
