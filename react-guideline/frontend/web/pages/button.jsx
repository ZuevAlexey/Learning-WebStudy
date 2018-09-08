import {PageContent} from '../../web/page-content';
import {Button} from '../../guideline/button';

const code = '<Button text=\'Default\' />\n\r' +
    '<Button text=\'Disabled\' disabled = {true}/>\n' +
    '<Button text=\'Teal\' className = \'teal\' />\n' +
    '<Button text=\'Purple\' className = \'purple\' />';

export const ButtonPage = (props) => {
    console.log(props);
    return (<PageContent
        caption= {'Button'}
        code = {code} >
            <Button text='Default' />
            <Button text='Disabled' disabled = {true}/>
            <Button text='Teal' className = 'teal' />
            <Button text='Purple' className = 'purple' />
    </PageContent>);
};