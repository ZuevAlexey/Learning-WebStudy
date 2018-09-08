import {Table} from '../../guideline/table/index';
import {PageContent} from "../page-content";

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

export const TablePage = () => {
    return (
    <PageContent
        caption= {'Table'}
        code = {code} >
            <Table caption='Таблица умножения' data={data} headers={headers} />
            <Table caption='Таблица умножения' data={data} headers={headers} className='t-min'/>
            <Table caption='Таблица умножения' data={data} headers={headers} className='t-zebra'/>
    </PageContent>);
};