import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import data from '../../data/2_board.json';

import { getTurnValues } from '../../utilities';

const T = 11;

function Body({ N }) {
    const N_array = [...Array(N).keys()].map(num => num + 1);
    const T_array = [...Array(T).keys()].map(num => num + 1);

    const [myGuess, setMyGuess] = useState([
        data.board.myturns.map(t => t.guess)
    ]);
    const [myScore, setMyScore] = useState([
        data.board.myturns.map(t => t.score)
    ]);
    const [inputData, setInputData] = useState([{
        inputData: data.board.myturns
    }]);

    useEffect(() => {
        loadInput(); 
        // console.log(inputData);
        console.log('data: ', inputData);
        console.log('guess: ', myGuess);
        console.log('score: ', myScore);
   
    }, []);

 
    function loadInput() {
        setInputData(data.board.myturns);
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
                const tCount = t;
                console.log('tCount: ',tCount);
                return (
                    <tr key={`${n}-${p}`}>
                        {N_array.map(num => {
                            const isActive = num <= n + p && num >= p;
                            
                            return (
                                <td key={`${n}-${p}-${num}`}>
                                    {isActive ?
                                    // '-'
                                        <InputForm />
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



// const name = myGuess[t]
// const map = Array.prototype.map

// const myTurn = map.call(name, eachLetter => {
//     return `${eachLetter}`
// })
