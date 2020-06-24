import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import DisplayForm from './DisplayForm';
import data from '../../data/2_board.json';

import { getTurnValues } from '../../utilities';

const T = 11;
let tCount = 0;
let tGuess = '';
let newGuess = [];

function Body({ N }) {
    const N_array = [...Array(N).keys()].map(num => num + 1);
    const T_array = [...Array(T).keys()].map(num => num + 1);
    

    const [myGuess, setMyGuess] = useState([
        data.board.yourturns.map(t => t.guess)
    ]);
    const [myScore, setMyScore] = useState([
        data.board.yourturns.map(t => t.score)
    ]);

    useEffect(() => {
        loadInput(); 
    }, []);


  
    useEffect(() => {
        loadInput();
    }, []);
     
    const handleInputChange = event => {
        const id = event.target.id;
        const char = event.target.value.toUpperCase();
        const code = event.target.code;
        const mykey = event.target.keyCode;
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const idx = letters.indexOf(char);
        console.log('char:', char);
        console.log('mykey:', mykey);

        if (idx === -1) {
            setMyValue(
                '',
                event.target.id
            );
        } else {
            console.log('turn: ', char);
            console.log('id: ', id);
            console.log('code: ', code);
            setMyValue(
                char,
                event.target.id
            );
            console.log('myvalue: ', myValue);
            newGuess.unshift(char);
            console.log('newGuess:', newGuess);
        }
       
        loadInput();
    };

    // eslint-disable-next-line
    const [myValue, setMyValue] = useState({
        char: [],
        id: 0,
    });

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
                return (
                    <tr key={`${n}-${p}`}>
                        {N_array.map(num => {
                            const isActive = num <= n + p && num >= p;
            
                            return (
                                // <td key={`${n}-${p}-${num}`}>
                                <td key={`${n}-${p}-${num}`}>
                                    {isActive ?
                                    // '-'
                                        tGuess ?
                                            <DisplayForm 
                                                value={tGuess[n+p-num]}
                                            />
                                            :
                                            <InputForm
                                                id={num.id}
                                                value={num.char}
                                                handleInputChange={handleInputChange}
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
