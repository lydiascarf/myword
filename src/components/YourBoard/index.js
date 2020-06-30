import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import TurnTable from '../TurnTable';
import data from '../../data/2_board.json';

function YourBoard({ MaxTurnLength }) {
    return (
        <Col sm={6}>
            <TurnTable turnRecords={data.board.yourturns} header={'Your'} />
        </Col>
    );
}

YourBoard.propTypes = {
    MaxTurnLength: PropTypes.number.isRequired,
};

export default YourBoard;
