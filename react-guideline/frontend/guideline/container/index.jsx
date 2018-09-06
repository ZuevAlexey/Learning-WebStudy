import './style.css';
import React from 'react';

export const Container = ({className, content}) => {
    return (
        <div className={`container ${className !== undefined ? className : ''}`}>
            {content}
        </div>
    );
}