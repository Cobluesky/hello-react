import { Component } from "react/cjs/react.production.min";

import React from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>Fixed Value : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({ fixedNumber: fixedNumber + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        )
    }
}
export default Counter;