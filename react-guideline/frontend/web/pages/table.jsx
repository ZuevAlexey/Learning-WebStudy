import {Table} from '../../guideline/table';
import React from 'react';

let data = [
    [4,6,8,10],
    [6,9,12,15],
    [8,12,16,20],
    [10,15,20,25]
];

let headers = {
    rowHeaders : [2,3,4,5],
    columnHeaders : ['',2,3,4,5]
};

const content = [
    <Table key = {1} caption='Таблица умножения' data={data} headers={headers} />,
    <Table key = {2} caption='Таблица умножения' data={data} headers={headers} className='t-min'/>,
    <Table key = {3} caption='Таблица умножения' data={data} headers={headers} className='t-zebra'/>
];

const code = 'let data = [\n' +
    '    [4,6,8,10],\n' +
    '    [6,9,12,15],\n' +
    '    [8,12,16,20],\n' +
    '    [10,15,20,25]\n' +
    '];\n' +
    '\n' +
    'let headers = {\n' +
    '    rowHeaders : [2,3,4,5],\n' +
    '    columnHeaders : [\'\',2,3,4,5]\n' +
    '}\n\n' +
    '<Table caption=\'Таблица умножения\' data={data} headers={headers} />,\n' +
    '<Table caption=\'Таблица умножения\' data={data} headers={headers} className=\'t-min\'/>,\n' +
    '<Table caption=\'Таблица умножения\' data={data} headers={headers} className=\'t-zebra\'/>';

export default {
    content,
    code,
    caption: 'Table'
};