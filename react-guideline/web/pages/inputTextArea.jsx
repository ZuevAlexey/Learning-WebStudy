import React from 'react';
import {InputTextArea} from "../../frontend/guideline/input-text-area/index";

const content = [
    <InputTextArea key = {1} caption='Введите текст:' placeholder='ваш текст' />,
    <InputTextArea key = {2} caption='Введите текст:' placeholder='ваш текст' resizable={false}/>,
    <InputTextArea key = {3} disabled = {true} caption='Введите текст:' placeholder='ваш текст' />,
];

const code = '<InputTextArea caption=\'Введите текст:\' placeholder=\'ваш текст\' />,\n' +
    '<InputTextArea caption=\'Введите текст:\' placeholder=\'ваш текст\' resizable={false}/>,\n' +
    '<InputTextArea disabled = {true} caption=\'Введите текст:\' placeholder=\'ваш текст\' />,';

export default {
  content,
  code,
  caption: 'InputTextArea'
};