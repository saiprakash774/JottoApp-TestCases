import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from './test/testUtils';
import Input from "./Input";

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup=()=>{
    return shallow(<Input/>);
}
test('render input without error',()=>{
    const wrapper = setup();
    const inputComponent= findByTestAttr(wrapper,'component-input');
    expect(inputComponent.length).toBe(1);
});