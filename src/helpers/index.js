import React from 'react'

/**
 * @method getLetterMatchCount
 * @param {string} guessedWord 
 * @param {String} secretWord 
 * @returns {number} -number of letters matched between
 */
export function getLetterMatchCount(guessedWord,secretWord) {
    const secretLetters= secretWord.split('');
    const guessedLetterSet=new Set(guessedWord);
    return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
    
}
