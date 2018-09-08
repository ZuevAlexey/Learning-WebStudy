import Popover from '../../guideline/popover/index';
import {PageContent} from "../page-content";

const code = '<Popover text=\'Тут особо важная информация\' caption=\'Спойлер - нажми\' trigger=\'click\'/>,\n' +
    '<Popover text=\'Тут особо важная информация\' caption=\'Спойлер - наведи\' trigger=\'hover\'/>';

export const PopoverPage = () => {
    return (
    <PageContent
        caption= {'Popover'}
        code = {code} >
            <Popover text='Тут особо важная информация' caption='Спойлер - нажми' trigger='click'/>
            <Popover text='Тут особо важная информация' caption='Спойлер - наведи' trigger='hover'/>
    </PageContent>);
};