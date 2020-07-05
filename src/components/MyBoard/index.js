import React from 'react';
import TurnTable from '../TurnTable';
import data from '../../data/2_board.json';

function MyBoard() {
    
    return (<div>
        <TurnTable isMine turnRecords={data.board.blueturns}/>
    </div>
    );
}

export default MyBoard;
