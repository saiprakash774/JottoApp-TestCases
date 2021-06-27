import Enzyme,{shallow, ShallowWrapper} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import {findByTestAttr} from '../src/test/testUtils'
Enzyme.configure({adapter: new EnzymeAdapter()});

/***
 * Factory function to create a ShallowWrapper for congrats component.
 * @function setup
 * @param {object} props -component prop specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) =>{
    //props={success:true}
    return shallow(<Congrats{...props}/>)
}
test('renders without error',()=>{
    const wrapper=setup();
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.length).toBe(1);
});
test('renders no text when success porp is flase',()=>{
    const wrapper=setup({success:false});
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('');
});
test('render non-empty congrats message when success props is true',()=>{
    const wrapper=setup({success:true});
    const message = findByTestAttr(wrapper,'congrats-message');
    expect(message.text().length).not.toBe(0);
});