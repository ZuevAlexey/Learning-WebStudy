import './style.css';
import React from 'react';

export const Button = ({className, onClick, text, disabled, onMouseOver, onMouseOut}) => {
    return (
        <button className={`btn ${className !== undefined ? className : ''}`}
                onClick={onClick}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                disabled={disabled !== undefined ? disabled : ''}>
            {text}
        </button>
    );
}