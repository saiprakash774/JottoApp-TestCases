import { ShallowWrapper } from "enzyme"

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper-Enzyme shallow Wrapper 
 * @param {string} val -value of data-test attribute for search 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr =(wrapper,val)=>{
    return wrapper.find(`[data-test='${val}']`)
}