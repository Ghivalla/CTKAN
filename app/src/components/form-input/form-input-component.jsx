import React, {useState} from 'react';
import "./form-input.css";

export default function ({ label, handleChange, value, error, ...otherProps}) {
    const [focused,setFocused] = useState(false);
    return(
        <div className={`${error ? 'error' : null}`}>
            <div className='input-component'>
                <label className={`${focused || value ?'hidden':null}`} htmlFor={label}>{label}</label>
                <input
                    {...otherProps}
                    value={value}
                    onFocus={ ()=> setFocused(true) }
                    onBlur={ ()=> setFocused(false) }
                    onChange={ handleChange }
                    id={ label }
                />
            </div>
            <p className="input-error">{error}</p>
        </div >
    )
}