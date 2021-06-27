/***
 * Functional react component for congratulory message
 * @function
 * @param {object} props -React props.
 * @returns {JSX.Element} -Rendered component (or null if `success` prop is false )
 */

import React from 'react'

function Congrats({ success }) {
    if (props.success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats=message">
                    Congratulations! You guessed the wordd !!!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
    <div>
    </div>
}

export default Congrats
