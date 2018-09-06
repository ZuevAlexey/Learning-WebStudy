import Dropdown from '../../guideline/dropdown';
import React from 'react';

const content = [
    <Dropdown key = {1} selected='JavaScript' items={['JavaScript', 'Java', 'C#', 'C++']}/>
];

const code = '<Popover text=\'Тут особо важная информация\' caption=\'Спойлер - нажми\' trigger=\'click\'/>,\n' +
    '<Popover text=\'Тут особо важная информация\' caption=\'Спойлер - наведи\' trigger=\'hover\'/>';

export default {
    content,
    code,
    caption: 'Dropdown'
}