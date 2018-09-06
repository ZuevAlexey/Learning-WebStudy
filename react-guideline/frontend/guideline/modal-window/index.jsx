import './style.css';
import React from 'react';
import {Button} from '../button';

export default class ModalWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {processing: false};
    }

    startProcessing(){
        this.setState({
            processing: true
        })
    }

    render() {
        let {caption, text, processingText, btnOkCaption, btnCloseCaption, btnOkCallback, btnCloseCallback, onOverlayClick} = this.props;
        let process = () => {
            this.startProcessing();
            btnOkCallback();
        }
        return (
            <div className="modal-window mw1">
                <div className="mw-form">
                    <h2 className="mw-caption">{caption}</h2>
                    <text className="mw-text">{this.state.processing ? processingText : text}</text>
                    <Button className="teal mw-ok" onClick={process} text = {btnOkCaption} disabled = {this.state.processing ? true : undefined}/>
                    <Button className="teal mw-close" onClick={btnCloseCallback} text = {btnCloseCaption} />
                </div>
                <div className="mw-overlay" onClick={onOverlayClick}></div>
            </div>
        );
    }
}