import React from 'react';
import TurnTable from '../TurnTable';
import data from '../../data/2_board.json';
import './styles.css';

function MyBoard() {
    return (<div>
        <TurnTable header={'My'} turnRecords={data.board.myturns}/>
    </div>
    );
}

export default MyBoard;
