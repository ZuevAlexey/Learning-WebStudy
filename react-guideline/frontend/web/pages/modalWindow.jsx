import ModalWindow from '../../guideline/modal-window';
import {Button} from '../../guideline/button';
import React from 'react';

const MODAL_ONE = 'mw1Show';
const MODAL_TWO = 'mw2Show';

class Example extends React.Component{
    constructor(){
        super();
        let state = {};
        state[MODAL_ONE]=false;
        state[MODAL_TWO]=false;
        this.state = state;
    }

    changeVisible(key, isOpen){
        let newState = {...this.state};
        newState[key] = isOpen;
        this.setState(newState);
    }

    render(){
        return(
            <div>
                <Button text='Модальник 1' className='teal' onClick={() => this.changeVisible(MODAL_ONE, true)}/>
                <Button text='Модальник 2' className='teal' onClick={() => this.changeVisible(MODAL_TWO, true)}/>
                {this.state[MODAL_ONE] === true && <ModalWindow
                             text = 'После удаления, история будет недоступна. Продолжить?'
                             processingText = 'Удаление истории может занять некоторое время'
                             caption = 'Удаление истории'
                             btnOkCaption = 'Да, сделать все равно'
                             btnCloseCaption = 'Закрыть'
                             btnOkCallback = {() => {
                                 setTimeout(() => this.changeVisible(MODAL_ONE, false), 1500)
                             }}
                             btnCloseCallback = {() => this.changeVisible(MODAL_ONE, false)}
                />}
                {this.state[MODAL_TWO] === true && <ModalWindow
                    text = 'Обновление весит 713мб. Вы уверены, что хотите загрузить его с мобильного интернета?'
                    processingText = 'Загрузка...'
                    caption = 'Загрузка обновления'
                    btnOkCaption = 'Да'
                    btnCloseCaption = 'Нет'
                    btnOkCallback = {() => {
                        setTimeout(() => this.changeVisible(MODAL_TWO, false), 1500)
                    }}
                    btnCloseCallback = {() => this.changeVisible(MODAL_TWO, false)}
                    onOverlayClick = {() => this.changeVisible(MODAL_TWO, false)}
                />}
            </div>
        );
    }
}





const content = [
    <Example key={1} />
];

const code = '<Button text=\'Default\' />\n\r' +
    '<Button text=\'Disabled\' disabled = {true}/>\n' +
    '<Button text=\'Teal\' className = \'teal\' />\n' +
    '<Button text=\'Purple\' className = \'purple\' />';

export default {
    content,
    code,
    caption: 'ModalWindow'
};