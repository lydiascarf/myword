import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import DisplayForm from './DisplayForm';
import data from '../../data/2_board.json';

import { getTurnValues } from '../../utilities';

const T = 11;
let tCount = 0;
let nCount = 0;
let tGuess = '';

function Body({ N }) {
    const N_array = [...Array(N).keys()].map(num => num + 1);
    const T_array = [...Array(T).keys()].map(num => num + 1);
    

    const [myGuess, setMyGuess] = useState([
        data.board.myturns.map(t => t.guess)
    ]);
    const [myScore, setMyScore] = useState([
        data.board.myturns.map(t => t.score)
    ]);

    useEffect(() => {
        loadInput(); 
        console.log('myguess: ', myGuess);
        console.log('myscore: ', myScore);

    }, []);

    function loadInput() {
        setMyGuess(
            data.board.myturns.map(t => t.guess)
        );
        setMyScore(
            data.board.myturns.map(t => t.score)
        );  
    }

    return (
        <tbody>
            {T_array.map(t => {
                const { n, p } = getTurnValues({ t, N });
                tCount = t;
                tGuess = myGuess[tCount - 1];
                console.log('tguess:', tGuess);
                return (
                    <tr key={`${n}-${p}`}>
                        {N_array.map(num => {
                            const isActive = num <= n + p && num >= p;
                            return (
                                <td key={`${n}-${p}-${num}`}>
                                    {isActive ?
                                    // '-'
                                        tGuess ?
                                            <DisplayForm
                                                value={tGuess[n+p-num]}
                                            />
                                            :
                                            <InputForm
                                                value={''}
                                            />
                                            
                                        : ''}
                                </td>
                            );
                        })}
                        {myScore[tCount-1]
                            ? <td>{myScore[tCount-1]}</td>
                            : <td>{''}</td> }
                    </tr>
                );
            })}
        </tbody>
    );
}

Body.propTypes = {
    N: PropTypes.number.isRequired,
};

export default Body;
