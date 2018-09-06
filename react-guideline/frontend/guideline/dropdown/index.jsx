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

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.select = this.select.bind(this);
    }

    open(){
        this.setState({
            ...this.state,
            open: true
        })
    }

    close(){
        this.setState({
            ...this.state,
            open: false
        })
    }

    select(selected){
        this.setState({
            selected,
            open: false
        });
    }

    render() {
        let {caret, items} = this.props;
        let selected = this.state.selected;
        return (
            <div className="dropdown">
                <button className="dd-btn" onClick = {this.open}>
                    <span className="dd-text">{selected}</span>
                    <span className="dd-caret">{caret}</span>
                </button>
                {this.state.open && <div className="dd-menu">
                    {items.map((e, i) => {
                        return <div key = {i}
                                    className={`dd-element ${e === selected ? 'selected' : ''}`}
                                    onClick = {() => this.select(e)}>
                            {e}
                            </div>
                    })}
                </div>}
            </div>
        );
    }
}