import { API, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { createGame } from '../../graphql/mutations';
import './styles.css';

function CreateButton({ name: keyword }) {
    const [gameID, setGameID] = useState();
    const input = { keyword };
    const makeGame = async (e) => {
        if (!keyword) e.preventDefault();
        try {
            const game = await API.graphql(graphqlOperation(createGame, { input }));
            console.log(game);
            setGameID(game.id);
            console.log(gameID);
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
