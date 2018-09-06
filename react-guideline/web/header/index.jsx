import './style.css';
import '../../frontend/guideline/container/style.css';
import React from 'react';

export const Header = ({items, selected}) => {
    return (
        <header className="header">
            <div className="container">
                <ul className="navbar">
                    {items.map((e, i) => {
                        let isSelected = e.name === selected;
                        return <li key = {i}className={`item ${isSelected ? 'active' : ''}`}>
                            <a className="link" href={`./${e.href}`}>{e.name}</a>
                        </li>
                    })}
                </ul>
            </div>
        </header>
    );
}








