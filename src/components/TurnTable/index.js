import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

import Turn from './Turn';

function TurnTable({ header, turnRecords }) {

    return (
        <Row>
            <Col sm={6}>
                <div className={'board-box'}>
                    <table>
                        <thead>
                            <tr> 
                                <th>{header}<br/>Guess</th>
                                <th>{header}<br/>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                turnRecords.map(({ guess, score }, index) => <Turn key={score + guess} guess={guess} score={score} index={index}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </Col>
        </Row>
    );
}

TurnTable.propTypes = {
    turnRecords: PropTypes.arrayOf(
        PropTypes.shape({
            guess: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
            header: PropTypes.string,
        })
    ).isRequired,
};

export default TurnTable;
