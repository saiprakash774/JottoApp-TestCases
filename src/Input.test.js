import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from './test/testUtils';
import Input from "./Input";

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup=(success=false, secretWord='party')=>{
    return shallow(<Input success={success} secretWord={secretWord}/>);
}

describe('success is true',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setup(true);
    })
    test('render input without error',()=>{
        const wrapper = setup();
        const inputComponent= findByTestAttr(wrapper,'component-input');
        expect(inputComponent.length).toBe(1);
    });
    test('input box does not show',()=>{
        const inputBox=findByTestAttr(wrapper,'input-box');
        expect(inputBox.exists()).toBe(false);
    })
    test('submit button does not show',()=>{
        const submitButton= findByTestAttr(wrapper,'submit-button');
        expect(submitButton.exists()).toBe(false);
    })
});
describe('success is false', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper=setup(false);
    })
    test('render input without error',()=>{
        const wrapper = setup();
        const inputComponent= findByTestAttr(wrapper,'component-input');
        expect(inputComponent.length).toBe(1);
    });
    test('input box does  show',()=>{
        const inputBox=findByTestAttr(wrapper,'input-box');
        expect(inputBox.exists()).toBe(true);
    })
    test('submit button does show',()=>{
        const submitButton= findByTestAttr(wrapper,'submit-button');
        expect(submitButton.exists()).toBe(true);
    }) 
});


test('does not throw warning with expected props',()=>{
    checkProps(Input,{secretWord:'party'});
});

describe('state controlled input field',()=>{
    let mockSetCurrentGuess=jest.fn();
    let wrapper;
    let originalUseState;
    beforeEach(()=>{
        mockSetCurrentGuess.mockClear();
        originalUseState=React.useState;
        React.useState=jest.fn(()=>["",mockSetCurrentGuess]);
        wrapper=setup();
    });
    afterEach(()=>{
        React.useState=originalUseState;
    })
    test('state updates with value on input box upon change',()=>{
        const inputBox=findByTestAttr(wrapper,'input-box');

        const mockEvent={target:{value:'train'}};
        inputBox.simulate("change",mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
    test('field is cleared on click on submit button click ',()=>{
        const mockSetCurrentGuess =jest.fn();
        React.useState=jest.fn(()=>["",mockSetCurrentGuess]);
        
        const wrapper=setup();
        const submitButton=findByTestAttr(wrapper,'submit-button');

        submitButton.simulate('click',{preventDefault() {}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    })
})