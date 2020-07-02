import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import '../MyBoard/styles.css';

import Turn from './Turn';

function TurnTable({ header, turnRecords }) {
    const turns = turnRecords.length;
    console.log(turns);
    return (
        <Row>
            <Col sm={6}>
                <table className={'board-box'}>
                    <thead>
                        <tr> 
                            <th className={'head-row'}>{header}<br/>Guess</th>
                            <th className={'head-row'}>{header}<br/>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            turnRecords.map(({ guess, score }, index) => <Turn key={score + guess} guess={guess} score={score} index={index}/>)
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
            header: PropTypes.string,
        })
    ).isRequired,
};

export default TurnTable;
