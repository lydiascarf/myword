import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

import Turn from './Turn';

function TurnTable({header, turnRecords}) {
    return (
        <Row>
            <Col sm={6}>
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
            </Col>
        </Row>
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
