import {Code} from '../code/index';
import {Container} from '../../frontend/guideline/container/index';
import React from 'react';

export const PageContent = ({caption, content, code}) => {
    let data = [
        <h1 key='h1key'>{caption}</h1>,
        ...content,
        <Code key = 'codeKey' text={code}/>,
    ];
    console.log(data);
    return (
        <Container className='content' content={data}
        />)
};