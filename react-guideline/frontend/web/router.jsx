import {ButtonPage} from './pages/button';
import {InputTextPage} from './pages/inputText';
import {InputTextAreaPage} from './pages/inputTextArea';
import {TablePage} from './pages/table';
import {ContainerPage} from './pages/container';
import {PopoverPage} from './pages/popover';
import {ModalWindowPage} from './pages/modalWindow';
import {DropdownPage} from './pages/dropdown';
import {Switch, Route} from 'react-router';
  
export const Router = () => {
    return (<Switch>
        <Route exact path = {routing.pages.main} component={ButtonPage} />
        <Route exact path = {routing.pages.button} component={ButtonPage} />
        <Route exact path = {routing.pages.container} component={ContainerPage} />
        <Route exact path = {routing.pages.dropdown} component={DropdownPage} />
        <Route exact path = {routing.pages.inputText} component={InputTextPage} />
        <Route exact path = {routing.pages.inputTextArea} component={InputTextAreaPage} />
        <Route exact path = {routing.pages.modalWindow} component={ModalWindowPage} />
        <Route exact path = {routing.pages.popover} component={PopoverPage} />
        <Route exact path = {routing.pages.table} component={TablePage} />
    </Switch>
    );
}