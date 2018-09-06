import Dropdown from '../../frontend/guideline/dropdown/index';
import React from 'react';

const content = [
    <Dropdown key = {1} selected='JavaScript' items={['JavaScript', 'Java', 'C#', 'C++']} caret='↓'/>,
    <Dropdown key = {2} selected='C#' items={['JavaScript', 'Java', 'C#', 'C++']} caret='⇩'/>,
    <Dropdown key = {3} selected='Java' items={['JavaScript', 'Java', 'C#', 'C++']} caret='↓' disabled = {true}/>,
];

const code = '<Dropdown selected=\'JavaScript\' items={[\'JavaScript\', \'Java\', \'C#\', \'C++\']} caret=\'↓\'/>\n' +
    '<Dropdown selected=\'C#\' items={[\'JavaScript\', \'Java\', \'C#\', \'C++\']} caret=\'⇩\'/>\n' +
    '<Dropdown selected=\'Java\' items={[\'JavaScript\', \'Java\', \'C#\', \'C++\']} caret=\'↓\' disabled = {true}/>';

export default {
    content,
    code,
    caption: 'Dropdown'
}