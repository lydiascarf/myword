import React from 'react';
import PropTypes from 'prop-types';

import Turn from './Turn';

function TurnTable({turnRecords, header}) {
    return (
        <table>
            <thead>
                <tr> 
                    <th className={'board-hd'}>{header} Guess</th>
                    <th className={'board-hd'}>{header} Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    turnRecords.map(({ guess, score }, index) => <Turn key={score + guess} guess={guess} score={score} index={index} />)
                }
            </tbody>
        </table>

    );
}

TurnTable.propTypes = {
    turnRecords: PropTypes.arrayOf(
        PropTypes.shape({
            guess: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
            header: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TurnTable;
