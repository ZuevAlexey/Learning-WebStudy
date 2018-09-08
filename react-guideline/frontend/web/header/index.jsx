import './style.css';
import {Container} from '../../guideline/container';
import {Link} from 'react-router-dom';
import {Route} from 'react-router';

const Header = ({items, location}) => {
    return (
        <Route>
            <header className="header">
                <Container>
                    <ul className="navbar">
                        {items.map((e, i) => {
                            return <li key = {i}className={`item ${location.pathname === e.href ? 'active' : ''}`}>
                                <Link className="link" to={e.href}>{e.name}</Link>
                            </li>
                        })}
                    </ul>
                </Container>
            </header>
        </Route>
    );
}

const RouteHeader = ({items}) => <Route component = {(props) => <Header {...props} items = {items}/>}/>;

export default RouteHeader;