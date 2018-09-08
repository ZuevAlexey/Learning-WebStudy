import ModalWindow from '../../guideline/modal-window/index';
import {Button} from '../../guideline/button/index';
import {PageContent} from "../page-content";

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

const code = '<div>\n' +
    '    <Button text=\'Модальник 1\' className=\'teal\' onClick={() => this.changeVisible(MODAL_ONE, true)}/>\n' +
    '    <Button text=\'Модальник 2\' className=\'teal\' onClick={() => this.changeVisible(MODAL_TWO, true)}/>\n' +
    '    {this.state[MODAL_ONE] === true && <ModalWindow\n' +
    '        text = \'После удаления, история будет недоступна. Продолжить?\'\n' +
    '        processingText = \'Удаление истории может занять некоторое время\'\n' +
    '        caption = \'Удаление истории\'\n' +
    '        btnOkCaption = \'Да, сделать все равно\'\n' +
    '        btnCloseCaption = \'Закрыть\'\n' +
    '        btnOkCallback = {() => {\n' +
    '            setTimeout(() => this.changeVisible(MODAL_ONE, false), 1500)\n' +
    '        }}\n' +
    '        btnCloseCallback = {() => this.changeVisible(MODAL_ONE, false)}\n' +
    '    />}\n' +
    '    {this.state[MODAL_TWO] === true && <ModalWindow\n' +
    '        text = \'Обновление весит 713мб. Вы уверены, что хотите загрузить его с мобильного интернета?\'\n' +
    '        processingText = \'Загрузка...\'\n' +
    '        caption = \'Загрузка обновления\'\n' +
    '        btnOkCaption = \'Да\'\n' +
    '        btnCloseCaption = \'Нет\'\n' +
    '        btnOkCallback = {() => {\n' +
    '            setTimeout(() => this.changeVisible(MODAL_TWO, false), 1500)\n' +
    '        }}\n' +
    '        btnCloseCallback = {() => this.changeVisible(MODAL_TWO, false)}\n' +
    '        onOverlayClick = {() => this.changeVisible(MODAL_TWO, false)}\n' +
    '    />}\n' +
    '</div>';

export const ModalWindowPage = () => {
    return (
    <PageContent
        caption= {'Modal window'}
        code = {code} >
            <Example />
    </PageContent>);
};