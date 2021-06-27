import React from 'react';
import PropType from 'prop-types';

function Input({secretWord}) {
    return (
        <div data-test='component-input'>
            
        </div>
    )
}

Input.prototype={
    secretWord:PropType.string.isRequired,
}
export default Input
