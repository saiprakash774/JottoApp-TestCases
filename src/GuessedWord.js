import React from 'react';
import PropTypes from 'prop-types';

function GuessedWord(props) {
    let contents
    if(props.guessedWords.length === 0 ){
        contents=(
            <span data-test='guess-instructions'>
                Try to Guess a Secret word!
            </span>
        );
    }else{
        const guessedWordsRows=props.guessedWords.map((word,index)=>(
        <tr  data-test='guessed-word' key={index}>
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
        </tr>
        ));
        contents=(
        <div data-test='guessed-words'>
            <h3>Guessed Words</h3>
            <table>
                <thead>
                    <tr><th>Guess</th><th>Matching letters</th></tr>
                </thead>
                <tbody>
                    {guessedWordsRows}
                </tbody>
            </table>
        </div>
        )
    }
    return (
        <div data-test='component-guessed-words'>
            {contents}
        </div>
    )
}

GuessedWord.propTypes={
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired
        })
    ).isRequired,
};

export default GuessedWord
