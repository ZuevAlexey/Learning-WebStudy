import React from 'react';
import {InputText} from "../../guideline/input-text";

const content = [
    <InputText key = {1} className = 'small' caption='Введите текст:' placeholder='ваш текст' />,
    <InputText key = {2} caption='Введите текст:' placeholder='ваш текст' />,
    <InputText key = {3} disabled = {true} caption='Введите текст:' placeholder='ваш текст' />,
    <InputText key = {4} className = 'large' caption='Введите текст:' placeholder='ваш текст' />,
];

const code = '<InputText className = \'small\' caption=\'Введите текст:\' placeholder=\'ваш текст\' />\n' +
    '<InputText caption=\'Введите текст:\' placeholder=\'ваш текст\' />\n' +
    '<InputText disabled = {true} caption=\'Введите текст:\' placeholder=\'ваш текст\' />\n' +
    '<InputText className = \'large\' caption=\'Введите текст:\' placeholder=\'ваш текст\' />';

export default {
  content,
  code,
  caption: 'InputText'
};