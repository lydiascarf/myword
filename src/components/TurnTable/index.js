import React from 'react';
import PropTypes from 'prop-types';

import Turn from './Turn';

function TurnTable({turnRecords}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Guess</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    // turn records include offsets derived from turn #
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
        })
    ).isRequired,
};

export default TurnTable;
