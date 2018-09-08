import Dropdown from '../../guideline/dropdown/index';
import {PageContent} from '../page-content';

const code = '<Dropdown selected=\'JavaScript\' items={[\'JavaScript\', \'Java\', \'C#\', \'C++\']} caret=\'↓\'/>\n' +
    '<Dropdown selected=\'C#\' items={[\'JavaScript\', \'Java\', \'C#\', \'C++\']} caret=\'⇩\'/>\n' +
    '<Dropdown selected=\'Java\' items={[\'JavaScript\', \'Java\', \'C#\', \'C++\']} caret=\'↓\' disabled = {true}/>';

export const DropdownPage = (props) => {
    return (
    <PageContent
        caption= {'Dropdown'}
        code = {code} >
            <Dropdown selected='JavaScript' items={['JavaScript', 'Java', 'C#', 'C++']} caret='↓'/>
            <Dropdown selected='C#' items={['JavaScript', 'Java', 'C#', 'C++']} caret='⇩'/>
            <Dropdown selected='Java' items={['JavaScript', 'Java', 'C#', 'C++']} caret='↓' disabled = {true}/>
    </PageContent>);
};