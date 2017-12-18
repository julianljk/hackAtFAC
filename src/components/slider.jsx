import React, { Component } from 'react';

class Slider extends Component {
    componentWillReceiveProps() {
        console.log("ComponentWillReceiveProps");
    }
    shouldComponentUpdate() {
        console.log("ShouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log("ComponentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillMount() {
        console.log("mouting");
    }
    componentWillUnmount() {
        console.log("unmounting");
    }
    render() {
        return (
            <div>
                <p>
                    Counter value: {this.props.counter}
                </p>
                <div>
                    {-10} <input type="range" min={-10} max={10} step={1} onChange={this.props.onSliderChange} value={this.props.sliderValue} /> {10}
                </div>
                <div>
                    {this.props.sliderValue}
                </div>
            </div>
        );
    }
}

export default Slider;
