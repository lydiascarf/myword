import React from 'react';
import PropTypes from 'prop-types';
import TurnTable from '../TurnTable';
import data from '../../data/2_board.json';
import './styles.css';

function MyBoard({ MaxTurnLength }) {
    return (<div>
        <TurnTable header={'My'} turnRecords={data.board.myturns}/>
    </div>
    );
}

MyBoard.propTypes = {
    MaxTurnLength: PropTypes.number.isRequired,
};

export default MyBoard;
