import React from 'react';
import './InputForm.css';

function DisplayForm(props) {
    return (
        <form>
            <div className={'yourboard'}>
                {props.value}
            </div>
        </form>
    );
}

export default DisplayForm;