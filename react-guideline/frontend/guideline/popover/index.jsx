import './style.css';
import React from 'react';
import {Button} from '../button';

export default class Popover extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false};
        this.changeVisible = this.changeVisible.bind(this);
    }

    changeVisible(){
        this.setState({open:!this.state.open});
    }

    render() {
        let {caption, text, trigger} = this.props;
        return (
            <div className={`popover ${this.state.open ? 'open' : ''}`}>
                <Button
                    className='pp-btn'
                    text={caption}
                    onClick={trigger === 'click' ? this.changeVisible : null}
                    onMouseOver={trigger === 'hover' ? this.changeVisible : null}
                    onMouseOut={trigger === 'hover' ? this.changeVisible : null}
                />
                <div className='pp-body'>
                    <text>{text}</text>
                </div>
            </div>
        );
    }
}