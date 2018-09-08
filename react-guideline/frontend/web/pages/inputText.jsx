import {InputText} from "../../guideline/input-text/index";
import {PageContent} from "../page-content";

const code = '<InputText className = \'small\' caption=\'Введите текст:\' placeholder=\'ваш текст\' />\n' +
    '<InputText caption=\'Введите текст:\' placeholder=\'ваш текст\' />\n' +
    '<InputText disabled = {true} caption=\'Введите текст:\' placeholder=\'ваш текст\' />\n' +
    '<InputText className = \'large\' caption=\'Введите текст:\' placeholder=\'ваш текст\' />';

export const InputTextPage = () => {
    return (
    <PageContent
        caption= {'Input text'}
        code = {code} >
            <InputText className = 'small' caption='Введите текст:' placeholder='ваш текст' />
            <InputText caption='Введите текст:' placeholder='ваш текст' />
            <InputText disabled = {true} caption='Введите текст:' placeholder='ваш текст' />
            <InputText className = 'large' caption='Введите текст:' placeholder='ваш текст' />
    </PageContent>);
};