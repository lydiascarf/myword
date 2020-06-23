import React from 'react';
import './InputForm.css';

function InputForm(props) {
    console.log('props:', props.value);
    return (
        <form>
            <div >
                <input className={'myboard'}
                    value={props.value}
                />
            </div>
        </form>
    );
}

export default InputForm;
