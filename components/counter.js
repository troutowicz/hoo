import React from 'react';

export default ({ counter, increment, decrement }) => (
  <p>
    Count: {counter}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </p>
);
