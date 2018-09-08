import {Code} from '../code/index';
import {Container} from '../../guideline/container/index';

export const PageContent = ({caption, code, children}) => {
    return (
        <Container className='content'>
            <h1>{caption}</h1>
            {children}
            <Code text={code}/>
        </Container>)
};