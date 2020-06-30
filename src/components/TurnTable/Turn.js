import React from 'react';
import PropTypes from 'prop-types';
import '../MyBoard/styles.css';

function Turn({ guess, score, index }) {
    return (
        <tr>
            <td className={'board-row'}>{guess}</td>
            <td className={'board-row'}>{score}</td>
        </tr>
    );
}
Turn.propTypes = {
    guess: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default Turn;
