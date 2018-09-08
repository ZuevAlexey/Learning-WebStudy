import './style.css';

export const Button = ({className, onClick, text, disabled, onMouseOver, onMouseOut, children}) => {
    return (
        <button className={`btn ${className !== undefined ? className : ''}`}
                onClick={onClick}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                disabled={disabled !== undefined ? disabled : ''}>
            {text === undefined ? children : text}
        </button>
    );
}