import React from 'react';
import Col from 'react-bootstrap/Col';
import TurnTable from '../TurnTable';
import data from '../../data/2_board.json';

function YourBoard() {
    return (
        <Col sm={6}>
            <TurnTable turnRecords={data.board.beigeturns} />
        </Col>
    );
}

export default YourBoard;
