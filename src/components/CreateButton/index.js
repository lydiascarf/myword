import { API, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { createGame } from '../../graphql/mutations';
import './styles.css';

function CreateButton({ name }) {
    const [gameID, setGameID] = useState();
    const input = { name };
    const makeGame = async (e) => {
        if (!name) e.preventDefault();
        try {
            const x = await API.graphql(graphqlOperation(createGame, {input }));
            console.log(x);
            setGameID(x.id);
        } catch(e) {
            console.error('Error in create button\n', e);
        }
    };
    return (
        <Link onClick={makeGame} to={`game?name=${name}&game=${gameID}`} >
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
