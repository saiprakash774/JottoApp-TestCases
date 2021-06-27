/***
 * Functional react component for congratulory message
 * @function
 * @param {object} props -React props.
 * @returns {JSX.Element} -Rendered component (or null if `success` prop is false )
 */

import React from 'react';
import PropTypes from 'prop-types';

function Congrats(props) {
    if (props.success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    Congratulations! You guessed the wordd !!!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
}

Congrats.PropTypes={
    success:PropTypes.bool
};

export default Congrats
