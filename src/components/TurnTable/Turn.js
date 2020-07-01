import React from 'react';
import PropTypes from 'prop-types';
import { getOffset } from '../../utilities';
import '../MyBoard/styles.css';

function Turn({ guess, score, index }) {
    const offset = getOffset(index);
    return (
        <tr>
            <td className={'guess-row'}><span className={'offset'}>{offset}</span>{guess}</td>
            <td className={'score-row'}>{score}</td>
        </tr>
    );
}
Turn.propTypes = {
    guess: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default Turn;
