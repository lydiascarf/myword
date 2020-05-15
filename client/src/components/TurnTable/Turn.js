import React from 'react';

function Turn({ guess, score }) {
  return (
    <tr>
      <td>{guess}</td>
      <td>{score}</td>
    </tr>
  );
}

export default Turn;
