import reducer from './reducer';
import { createStore} from 'redux';

export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState
    )
}