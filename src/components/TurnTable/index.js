import React from 'react';

import Turn from './Turn';

function TurnTable(props) {
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
                    props.turnRecords.map(({ guess, score }, index) => <Turn guess={guess} score={score} index={index} />)
                }
            </tbody>
        </table>

    );
}

export default TurnTable;
