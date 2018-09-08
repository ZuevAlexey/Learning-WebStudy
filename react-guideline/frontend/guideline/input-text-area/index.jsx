import './style.css';

export const InputTextArea = ({caption, placeholder, resizable, disabled}) => {
    return (<div className={`input-text-area ${resizable === false ? 'resize-none' : ''}` }>
        <div className="label">{caption}</div>
        <textarea placeholder={placeholder} disabled={disabled !== undefined ? disabled : ''}></textarea>
    </div>)
};

