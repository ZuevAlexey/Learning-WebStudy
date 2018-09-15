import './style.css';

export const InputText = (props) => {
    let {caption, placeholder, className, disabled, value, onChange} = props
    return (<div className={`input-text ${className === undefined ? '' : className}`}>
        <label>{caption}</label>
        <input 
            {...props}
            type="text" 
            placeholder={placeholder} 
            disabled={disabled !== undefined ? disabled : ''}
            value={value}
            onChange={onChange}
            />
    </div>)
};