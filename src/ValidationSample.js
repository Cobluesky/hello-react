import React, { Component } from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
    }
    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onchange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>Validate</button>

            </div>
        );
    }
}

export default ValidationSample;