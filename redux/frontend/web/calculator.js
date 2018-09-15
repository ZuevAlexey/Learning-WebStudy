import {Container, InputText, Button} from 'az-react-guideline';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Add, Clear, Calc, SetText} from '../store/actions';
import './style.css';

class Calculator extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let {history, text, actions, isValid} = this.props;
        return (<Container className = 'calc'>
            <text className='history'>{history}</text>
            <InputText 
                placeholder={text} 
                value={text} 
                onChange = {(event) => {
                    var newText = event.target.value;
                    if(newText.charAt(newText.length - 1) === '='){
                        return;
                    }
                    actions.setText(newText)}
                }
                onKeyPress = { (event) => {
                    if(event.key === 'Enter' || event.key === '=') {
                        actions.calc(text);
                        return;
                      }
                    }
                }

                className={`${isValid ? '' : 'error'}`}
            />
            <div className='row'>
                <Button className='Teal' text='(' onClick = {() => actions.add('(')} />
                <Button className='Teal' text=')' onClick = {() => actions.add(')')} />
                <Button className='Teal' text='%' onClick = {() => actions.add('%')} />
                <Button className='Teal' text='AC' onClick = {() => actions.clear()} />
            </div>
            <div className='row'>
                <Button className='Teal' text='7' onClick = {() => actions.add('7')} />
                <Button className='Teal' text='8' onClick = {() => actions.add('8')} />
                <Button className='Teal' text='9' onClick = {() => actions.add('9')} />
                <Button className='Teal' text='/' onClick = {() => actions.add('/')} />
            </div>
            <div className='row'>
                <Button className='Teal' text='4' onClick = {() => actions.add('4')} />
                <Button className='Teal' text='5' onClick = {() => actions.add('5')} />
                <Button className='Teal' text='6' onClick = {() => actions.add('6')} />
                <Button className='Teal' text='*' onClick = {() => actions.add('*')} />
            </div>
            <div className='row'>
                <Button className='Teal' text='1' onClick = {() => actions.add('1')} />
                <Button className='Teal' text='2' onClick = {() => actions.add('2')} />
                <Button className='Teal' text='3' onClick = {() => actions.add('3')} />
                <Button className='Teal' text='-' onClick = {() => actions.add('-')} />
            </div>
            <div className='row'>
                <Button className='Teal' text='0' onClick = {() => actions.add('0')} />
                <Button className='Teal' text='.' onClick = {() => actions.add('.')} />
                <Button className='Teal' text='=' onClick = {() => actions.calc(text)} />
                <Button className='Teal' text='+' onClick = {() => actions.add('+')} />
            </div>
        </Container> );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions : {
            add: value => dispatch(Add(value)),
            clear: () => dispatch(Clear()),
            calc: value => dispatch(Calc(value)),
            setText: value => dispatch(SetText(value)),
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator)