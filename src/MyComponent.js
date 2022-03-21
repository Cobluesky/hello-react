import React from 'react';
import PropTypes from 'prop-types'
import { Component } from 'react/cjs/react.production.min';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                HI, my name is {name}. <br />
                children value is {children}.
                <br />
                My favorite number is {favoriteNumber}.
            </div>
        )
    }
}


MyComponent.defaultProps = {
    name: 'Basic'
}

MyComponent.ropTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;