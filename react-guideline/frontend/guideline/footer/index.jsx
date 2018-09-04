import './style.css';
import React from 'react';

export const Footer = ({email}) => {
    return (
        <footer className="footer">
            <div className="container">
                <text className="email">{`Email: ${email}`}</text>
            </div>
        </footer>
    );
}