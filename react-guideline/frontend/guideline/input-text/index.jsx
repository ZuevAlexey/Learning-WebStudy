import './style.css';

export const InputText = ({caption, placeholder, className, disabled}) => {
    return (<div className={`input-text ${className === undefined ? '' : className}`}>
        <label>{caption}</label>
        <input type="text" placeholder={placeholder} disabled={disabled !== undefined ? disabled : ''}/>
    </div>)
};