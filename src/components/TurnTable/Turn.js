import React from 'react';
import PropTypes from 'prop-types';
import { getOffset } from '../../utilities';
import '../MyBoard/styles.css';

function Turn({ guess, score, index }) {
    const offset = getOffset(index);
    return (
        <tr>
            <td className={'board-row'}>{offset}{guess}</td>
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
