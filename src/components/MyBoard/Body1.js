import React from 'react';
import PropTypes from 'prop-types';

import { getTurnValues } from '../../utilities';

const T = 11;

function Body({ N }) {
    const N_array = [...Array(N).keys()].map(num => num + 1);
    const T_array = [...Array(T).keys()].map(num => num + 1);

    return (
        <tbody>
            {T_array.map(t => {
                const { n, p } = getTurnValues({ t, N });
                return (
                    <tr key={`${n}-${p}`}>
                        {N_array.map(num => {
                            const isActive = num <= n + p && num >= p;
                            return (
                                <td key={`${n}-${p}-${num}`}>
                                    {isActive ? '_' : ''}
                                </td>
                            );
                        })}
                        <td>s</td>
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