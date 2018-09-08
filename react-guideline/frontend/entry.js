import './web/base.css';
import Header from './web/header';
import {Footer} from './web/footer';
import {MenuItems} from './web/MenuItems.js';
import {Router} from './web/router';
import {BrowserRouter} from 'react-router-dom';

let App = () => {
    return (
        <BrowserRouter>
            <div className='page-container'>
            <Header items = {MenuItems} />
            <Router />
            <Footer email='aleksey.zuev@ingate.ru' />
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));