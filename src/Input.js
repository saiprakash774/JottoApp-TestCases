import React from 'react';
import PropType from 'prop-types';
function Input({success, secretWord}) {
    const [currentGuess,setCurrentGuess]= React.useState("");

    if(success){
        return <div data-test='component-input'/>
    }
    return (
        <div data-test='component-input'>
            <form className="form-inline">
                <input data-test='input-box' className='mb-2 mx-sm-3' type="text" 
                placeholder="Enter Guess" value={currentGuess} onChange={(event)=>setCurrentGuess(event.target.value)}/>
                <button data-test='submit-button' onClick={(e)=>{
                    e.preventDefault();
                    //TODO: updateGuessedWords
                    //TODO: check against secretWord and update success if needed
                    setCurrentGuess('');
                }} className='btn btn-primary mb-2'>Submit</button>
            </form>
        </div>
    )
}

Input.prototype={
    secretWord:PropType.string.isRequired,
}
export default Input
