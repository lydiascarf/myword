import React from 'react';
import './InputForm.css';

function DisplayForm(props) {
    return (
        <form>
            <div className={'myboard'}>
                {props.value}
            </div>
        </form>
    );
}

export default DisplayForm;