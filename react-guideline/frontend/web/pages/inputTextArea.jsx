import {InputTextArea} from "../../guideline/input-text-area/index";
import {PageContent} from "../page-content";

const code = '<InputTextArea caption=\'Введите текст:\' placeholder=\'ваш текст\' />,\n' +
    '<InputTextArea caption=\'Введите текст:\' placeholder=\'ваш текст\' resizable={false}/>,\n' +
    '<InputTextArea disabled = {true} caption=\'Введите текст:\' placeholder=\'ваш текст\' />,';

export const InputTextAreaPage = () => {
    return (
    <PageContent
        caption= {'Input text area'}
        code = {code} >
            <InputTextArea caption='Введите текст:' placeholder='ваш текст' />
            <InputTextArea caption='Введите текст:' placeholder='ваш текст' resizable={false}/>
            <InputTextArea disabled = {true} caption='Введите текст:' placeholder='ваш текст' />
    </PageContent>);
};