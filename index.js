import React from 'react';
import ReactDOM from 'react-dom';
import reactStamp from 'react-stamp';

import Counter from './components/counter';
import withState from './utils/withState';
import mapProps from './utils/mapProps';
import hoo from './utils/hoo';

const CounterContainer = reactStamp(React).compose(
  withState('counter', 'setCounter', 0),
  mapProps(({ setCounter, ...rest }) => ({
    increment: () => setCounter(n => n + 1),
    decrement: () => setCounter(n => n - 1),
    ...rest,
  })),
  hoo(Counter)
);

ReactDOM.render(
  <CounterContainer />,
  document.getElementById('root')
);
