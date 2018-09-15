import actions from './constants';

const DEFAULT_STATE = '0';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD:
            let st =  {
                ...state,
                isValid: true,
                text: state.text === DEFAULT_STATE ? 
                    action.symbol
                    : `${state.text}${action.symbol}`
            };
            return st;
        case actions.CALC:
            return action.isValid ? {
                history: state.text,
                text: action.value,
                isValid: action.isValid
            } : {
                ...state,
                isValid: action.isValid
            }
        case actions.CLEAR:
            return {
                isValid: true,
                text: DEFAULT_STATE,
                history:''
            };
        case actions.SET_TEXT:
            return {
                ...state,
                isValid:true,
                text: getText(action.text) 
            };
        default:
            return state;
    }
}

const getText = (text) => {
    if(text === ''){
        return DEFAULT_STATE;
    }

    if(text.length === 2 && text.charAt(0) === DEFAULT_STATE){
        return text.charAt(1);
    }

    return text;
}