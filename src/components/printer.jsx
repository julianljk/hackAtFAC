import React, { Component } from 'react';

class Printer extends Component {
  render() {
    let token = this.props.value >= 0 ? this.props.positiveToken : this.props.negativeToken;
    return (
        <div>
          {token.repeat(Math.abs(this.props.value))}
        </div>
    );
  }
}

export default Printer;
