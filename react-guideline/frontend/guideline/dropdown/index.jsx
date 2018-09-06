import './style.css';
import React from 'react';
import {Button} from '../button';

export default class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected : props.selected,
            open : false
        };

        this.change = this.change.bind(this);
        this.select = this.select.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    change(){
        this.setState({
            ...this.state,
            open: !this.state.open
        });
    }

    select(selected){
        this.setState({
            selected,
            open: false
        });
    }

    handleOutsideClick(e){
        if (this.node.contains(e.target)) {
            return;
        }
        this.change();
    }

    componentWillUpdate(nextProps, nextState){
        console.log(nextState)
        if(nextState.open){
            document.addEventListener('click', this.handleOutsideClick);
        } else {
            document.removeEventListener('click', this.handleOutsideClick);
        }
    }

    render() {
        let {caret, items, disabled} = this.props;
        let selected = this.state.selected;
        let isOpen = this.state.open;
        return (
            <div ref={(node) => this.node = node} className={`dropdown ${isOpen ? 'open' : ''}`}>
                <button className="dd-btn" onClick = {this.change} disabled={disabled !== undefined ? true : ''}>
                    <span className="dd-text">{selected}</span>
                    <span className="dd-caret">{caret}</span>
                </button>
                {isOpen && <div className="dd-menu">
                    {items.map((e, i) => {
                        return <div key = {i}
                                    className={`dd-element ${e === selected ? 'selected' : ''}`}
                                    onClick = {() => {
                                        this.select(e)
                                    }}>
                            {e}
                            </div>
                    })}
                </div>}
            </div>
        );
    }
}