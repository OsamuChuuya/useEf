import React, { useState } from 'react';
import Main from './components/Main';
import { Counter } from './context/CounterContext';

const App = () => {
  const [product, setProduct] = useState(0);

  const add = () => {
    setProduct(product + 1);
  };

  return (
    <div>
      <Counter.Provider value={{ product, add }}>
        <Main />
      </Counter.Provider>
    </div>
  );
};

export default App;
