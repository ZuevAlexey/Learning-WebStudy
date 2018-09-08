import './style.css';
import {Container} from '../../guideline/container';

export const Footer = ({email}) => {
    return (
        <footer className="footer">
            <Container>
                <p className="email">{`Email: ${email}`}</p>
            </Container>
        </footer>
    );
}