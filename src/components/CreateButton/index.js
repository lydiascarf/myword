import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './styles.css';

const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

function CreateButton({ name }) {
    return (
        <Link onClick={event => (!name) ? event.preventDefault() : null} to={`game?name=${name}&room=${getUniqueID()}`} >
            <Button size="lg" className="createButton">
                Create
            </Button>
        </Link>
    );
}

CreateButton.propTypes = {
    name: PropTypes.string.isRequired,
};

export default CreateButton;
