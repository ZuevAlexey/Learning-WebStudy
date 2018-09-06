import {Button} from '../../guideline/button';
import React from 'react';

const content = [
    <Button key = {1} text='Default' />,
    <Button key = {2} text='Disabled' disabled = {true}/>,
    <Button key = {3} text='Teal' className = 'teal' />,
    <Button key = {4} text='Purple' className = 'purple' />
];

const code = '<Button text=\'Default\' />\n\r' +
    '<Button text=\'Disabled\' disabled = {true}/>\n' +
    '<Button text=\'Teal\' className = \'teal\' />\n' +
    '<Button text=\'Purple\' className = \'purple\' />';

export default {
    content,
    code,
    caption: 'Button'
};