import './base.css';
import {Button} from './button';
import {Header} from './header';
import {Footer} from './footer';
import {Code} from './code';
import {MenuItems} from './MenuItems.js';
import ReactDOM from 'react-dom';
import React from 'react';

let PageContent = ({caption}) => {
    return (
        <div className='container content'>
            <h1>{caption}</h1>
            <Button text='Default' />
            <Button text='Disabled' disabled = {true}/>
            <Button text='Teal' className = 'teal' />
            <Button text='Purple' className = 'purple' />
            <Code text=''/>
        </div>
    );
}

let App = () => {
    return (
        <div className='page-container'>
            <Header items = {MenuItems} selected = 'Button'/>
            <PageContent />
            <Footer email='aleksey.zuev@ingate.ru' />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
