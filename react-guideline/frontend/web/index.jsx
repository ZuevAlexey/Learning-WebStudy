import '../guideline/base.css';
import {Header} from './header';
import {Footer} from './footer';
import {MenuItems} from './MenuItems.js';
import {PageContent} from './page-content';
import ReactDOM from 'react-dom';
import React from 'react';
import Button from './pages/button';
import InputText from './pages/inputText';
import InputTextArea from './pages/inputTextArea';
import Table from './pages/table';
import Container from './pages/container';
import Popover from './pages/popover';
import ModalWindow from './pages/modalWindow';
import DropDown from './pages/dropdown';


function GetCurrentControl(controls){
    let path = window.location.pathname;
    return controls.find((e) => {
        return path.indexOf(e.caption) !== -1;
    });
}

let control = GetCurrentControl([Button, InputTextArea, InputText, Table, Container, Popover, ModalWindow, DropDown]);

let App = () => {
    return (
        <div className='page-container'>
            <Header items = {MenuItems} selected = {control.caption}/>
            <PageContent
                caption= {control.caption}
                content = {control.content}
                code = {control.code}
            />
            <Footer email='aleksey.zuev@ingate.ru' />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
