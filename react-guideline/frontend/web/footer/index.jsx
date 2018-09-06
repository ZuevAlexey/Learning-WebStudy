import './style.css';
import '../../guideline/container/style.css';
import React from 'react';

export const Footer = ({email}) => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="email">{`Email: ${email}`}</p>
            </div>
        </footer>
    );
}