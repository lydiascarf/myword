import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DisplayForm from './DisplayForm';
import data from '../../data/2_board.json';

import { getTurnValues } from '../../utilities';

const T = 11;
let tCount = 0;
let tGuess = '';

function Body({ N }) {
    const N_array = [...Array(N).keys()].map(num => num + 1);
    const T_array = [...Array(T).keys()].map(num => num + 1);
    

    const [yourGuess, setYourGuess] = useState([
        data.board.yourturns.map(t => t.guess)
    ]);
    const [yourScore, setYourScore] = useState([
        data.board.yourturns.map(t => t.score)
    ]);

    useEffect(() => {
        loadInput(); 

    }, []);

    function loadInput() {
        setYourGuess(
            data.board.yourturns.map(t => t.guess)
        );
        setYourScore(
            data.board.yourturns.map(t => t.score)
        );  
    }

    return (
        <tbody>
            {T_array.map(t => {
                const { n, p } = getTurnValues({ t, N });
                tCount = t;
                tGuess = yourGuess[tCount - 1];
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
                                            <DisplayForm
                                                value={''}
                                            />
                                            
                                        : ''}
                                </td>
                            );
                        })}
                        {yourScore[tCount-1]
                            ? <td>{yourScore[tCount-1]}</td>
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
