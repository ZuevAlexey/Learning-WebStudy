import {Provider} from 'react-redux';
import Calculator from './web/calculator';
import store from './store/store';

let App = () => {
    return (
        <Provider store = {store({text:'0', isValid : true, history : ''})}>
            <Calculator />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));