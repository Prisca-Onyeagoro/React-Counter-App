import * as React from 'react';
import './style.css';
import { useState } from 'react';

const App = () => {
  const [count, Setcount] = useState(0);

  return (
    <div className="app">
      <h1 className={count > 0 ? 'positive' : count < 0 ? 'negative' : null}>
        {count}
      </h1>
      <div className="buttons">
        <button onClick={() => Setcount(count - 1)}>-</button>
        <button onClick={() => Setcount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
