import Popover from '../../guideline/popover';
import React from 'react';

const content = [
    <Popover key = {1} text='Тут особо важная информация' caption='Спойлер - нажми' trigger='click'/>,
    <Popover key = {2} text='Тут особо важная информация' caption='Спойлер - наведи' trigger='hover'/>
];

const code = '<Popover text=\'Тут особо важная информация\' caption=\'Спойлер - нажми\' trigger=\'click\'/>,\n' +
    '    <Popover text=\'Тут особо важная информация\' caption=\'Спойлер - наведи\' trigger=\'hover\'/>';

export default {
    content,
    code,
    caption: 'Popover'
}