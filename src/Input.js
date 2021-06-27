import React from 'react';
import PropType from 'prop-types';
function Input({secretWord}) {
    const [currentGuess,setCurrentGuess]= React.useState("");
    return (
        <div data-test='component-input'>
            <form className="form-inline">
                <input data-test='input-box' className='mb-2 mx-ms-3' type="text" 
                placeholder="Enter Guess" value={currentGuess} onChange={(event)=>setCurrentGuess(event.target.value)}/>
                <button data-test='submit-button' className='btn btn-primary mb-2'>Submit</button>
            </form>
        </div>
    )
}

Input.prototype={
    secretWord:PropType.string.isRequired,
}
export default Input
