import './style.css';

export const Container = ({className, children}) => {
    return (
        <div className={`container ${className !== undefined ? className : ''}`}>
            {children}
        </div>
    );
}