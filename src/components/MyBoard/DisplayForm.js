import React from 'react';
import './InputForm.css';

function DisplayForm(props) {
    console.log('props:', props.value);
    return (
        <form>
            <div className={'myboard'}>
                {props.value}
            </div>
        </form>
    );
}

export default DisplayForm;