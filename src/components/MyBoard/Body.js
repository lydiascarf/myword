import React from 'react';
import PropTypes from 'prop-types';
import DisplayForm from './DisplayForm';

import { getTurnValues } from '../../utilities';

const turns = 11;

function Body({ MaxTurnLength }) {
    const N_array = [...Array(MaxTurnLength).keys()].map(num => num + 1);
    const T_array = [...Array(turns).keys()].map(num => num + 1);
    
    return (
        <tbody>
            {T_array.map(currentTurn => {
                const { currentTurnLength, offset } = getTurnValues({ currentTurn, MaxTurnLength });

                return (
                    <tr key={`${currentTurnLength}-${offset}`}>
                        {N_array.map(num => {
                            const isActive = num <= currentTurnLength + offset && num >= offset;
                            return (
                                <td key={`${currentTurnLength}-${offset}-${num}`}>
                                    {isActive ?
                                    // '-'
                                        <DisplayForm 
                                            value={tGuess[n+p-num]}
                                        />
   
                                        : ''}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}

Body.propTypes = {
    MaxTurnLength: PropTypes.number.isRequired,
};

export default Body;
