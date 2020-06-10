import React from 'react';
import PropTypes from 'prop-types';


function Turn({ guess, score }) {
    return (
        <tr>
            <td>{guess}</td>
            <td>{score}</td>
        </tr>
    );
}
Turn.propTypes = {
    guess: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
};

export default Turn;
