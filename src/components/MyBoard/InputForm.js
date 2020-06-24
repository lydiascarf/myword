import React from 'react';
import './InputForm.css';

function InputForm(props) {
    return (
        <form>
            <div >
                <input className={'myboard'}
                    id={props.id} 
                    value={props.char}
                    onChange={props.handleInputChange}
                    maxLength={1}
                />
            </div>
        </form>
    );
}

export default InputForm;
