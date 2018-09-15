import actions from './constants';

const setDispatch = (type, data) => {
    return {type, data}
};

export function Add(value) {
    return {type: actions.ADD, symbol: value };
}

export function Calc(expression) {
    let value;
    let hasError = false;
    try{
        value = eval(expression);
    } catch(error){
        hasError = true;
    }
    
    hasError |= value === Infinity;
    hasError |= isNaN(value);
    return {type: actions.CALC, isValid: !hasError, value};
}

export function Clear() {
    return {type: actions.CLEAR};
}

export function SetText(text) {
    return {type: actions.SET_TEXT, text};
}