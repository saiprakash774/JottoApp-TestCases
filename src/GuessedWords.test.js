import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from '../src/test/testUtils';
import GuessedWord from './GuessedWord';

const defaultProps={
    guessedWords:[{ guessedWord:"train",letterMatchCount:3}],
};

/***
 * Factory function to create a ShallowWrapper for congrats component.
 * @function setup
 * @param {object} props -component prop specific to this setup
 * @returns {ShallowWrapper}
 */

const setup=(props={})=>{
    const setUpProps={...defaultProps,...props};
    return shallow(<GuessedWord{...setUpProps}/>)
}

test('does not throw warining with expected props',()=>{
    checkProps(GuessedWord,defaultProps);
});

describe('if there is no words guessed',()=>{
    let wrapper
    beforeEach(()=>{
        wrapper=setup({guessedWords:[]});
    });
    test('renders withou error',()=>{
        const component=findByTestAttr(wrapper,'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word',()=>{
        const instructions=findByTestAttr(wrapper,"guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are guessed',()=>{

});