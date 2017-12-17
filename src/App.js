import React, { Component } from 'react';
import Slider from './components/slider.jsx';
import Printer from './components/printer.jsx';
import CryptoList from './components/cryptoList.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            sliderValue: 0,
            showSlider: true
        }
    }
    componentWillMount() {
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
    onToggle = (e) => {
        this.setState({
            showSlider: !this.state.showSlider
        });
    }
    render() {
        let {
			counter,
            sliderValue,
            showSlider
		} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button type="button" onClick={this.onToggle}>Toggle Slider</button>
                <div className="component"> 
                {
                    showSlider &&
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

export default App;
