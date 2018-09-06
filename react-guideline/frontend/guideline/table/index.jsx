import './style.css';
import React from 'react';

const COLUMN_HEADER_PROP_NAME = 'columnHeaders';
const ROW_HEADER_PROP_NAME = 'rowHeaders';

export const Table = ({data, headers, caption, className}) => {
    let columnHeaders = headers[COLUMN_HEADER_PROP_NAME];
    let hasColumnHeaders =  columnHeaders !== undefined;
    let rowHeaders = headers[ROW_HEADER_PROP_NAME];
    let hasRowHeaders = rowHeaders !== undefined;

    return (
        <table className={`table ${className !== undefined ? className : ''}`}>
            <caption>{caption}</caption>
            <tbody>
            {hasColumnHeaders &&
                <tr>
                    {columnHeaders.map((el, columnIndex) => {
                    return <th key={columnIndex}>{el}</th>
                    })}
                </tr>
            }
            {data.map((row, rowIndex) => {
                return <tr key = {rowIndex}>
                    {hasRowHeaders && <th key={1}>{rowHeaders[rowIndex]}</th>}
                    {row.map((el, columnIndex) => {
                        return <td key={columnIndex + 1}>{el}</td>
                    })}
                </tr>
            })}
            </tbody>
        </table>
    );
};