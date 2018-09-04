import './style.css';
import React from 'react';

export const Button = ({className, onClick, text, disabled}) => {
    return (
        <button className={`btn ${className}`}
                onClick={onClick}
                disabled={disabled !== undefined ? disabled : ''}>
            {text}
        </button>
    );
}