import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

const styles = {
    createButton: {
        marginTop: '30px',
        marginBottom: '30px',
        backgroundColor: '#74aec1',
        border: 'none', 
        color: '#242222', 
        borderRadius: '100px',
        width: '200px',
        display: 'inline', 
        float: 'left',
        marginLeft: '140px',
        padding: '12px',
        fontWeight: '500',
        textDecorationColor: 'white'
    }
};

function CreateButton({ name }) {
    return (
        <div className='createButton'>
            <Link onClick={event => (!name) ? event.preventDefault() : null} to={`game?name=${name}&room=${getUniqueID()}`} >
                <Button size="lg" style={styles.createButton} size="lg" block>
                Create
                </Button>
            </Link>
        </div>
    );
}

CreateButton.propTypes = {
    name: PropTypes.string.isRequired,
};

export default CreateButton;
