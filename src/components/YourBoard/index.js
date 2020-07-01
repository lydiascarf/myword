import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import TurnTable from '../TurnTable';
import data from '../../data/2_board.json';

function YourBoard({ MaxTurnLength }) {
    return (
        <Col sm={6}>
            <TurnTable header={'Your'} turnRecords={data.board.yourturns} />
        </Col>
    );
}

YourBoard.propTypes = {
    MaxTurnLength: PropTypes.number.isRequired,
};

export default YourBoard;
