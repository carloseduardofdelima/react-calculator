import React, { useState } from 'react';
import './global.css';
import { create, all } from 'mathjs';

const config = { };
const math = create(all, config);

function App() {
  
  const [values, setValues] = useState('');
  const [res, setRes] = useState('');

  function setInput(value) {
    
    if (isNaN(Number(value)) && values === '') {
        return;
    }

    if (value === '=' && values !== '') {
      let calc = math.evaluate(values);
      setRes(calc);
      return;
    }

    if (values.length <= 8) {
      setValues(values + value);

    }
    
}

  function clear(value) {
    if (value === 'C') {
      setValues(values.slice(0, -1));
      return;
    }
    
    if (value === 'CA') {
      setValues('');
      setRes('');
      return;
    }
}



  return (
    <div className="app">
      <div className="calculator">

      <section className="output">
      <div className="actual-output">{values}</div>
      <div className="result-output">{res}</div>
      </section>

      <section className="input">
        <button className="input-item" onClick={() => clear('C')}>C</button>
        <button className="input-item" onClick={() => setInput('^')}>^</button>
        <button className="input-item" onClick={() => setInput('%')}>%</button>
        <button className="input-item" onClick={() => setInput('/')}>/</button>
        <button className="input-item" onClick={() => setInput('7')}>7</button>
        <button className="input-item" onClick={() => setInput('8')}>8</button>
        <button className="input-item" onClick={() => setInput('9')}>9</button>
        <button className="input-item" onClick={() => setInput('*')}>*</button>
        <button className="input-item" onClick={() => setInput('4')}>4</button>
        <button className="input-item" onClick={() => setInput('5')}>5</button>
        <button className="input-item" onClick={() => setInput('6')}>6</button>
        <button className="input-item" onClick={() => setInput('-')}>-</button>
        <button className="input-item" onClick={() => setInput('1')}>1</button>
        <button className="input-item" onClick={() => setInput('2')}>2</button>
        <button className="input-item" onClick={() => setInput('3')}>3</button>
        <button className="input-item" onClick={() => setInput('+')}>+</button>
        <button className="input-item" onClick={() => setInput('0')}>0</button>
        <button className="input-item" onClick={() => setInput('.')}>.</button>
        <button className="input-item" onClick={() => clear('CA')}>CA</button>
        <button className="input-item" onClick={() => setInput('=')}>=</button>

      </section>

      </div>

    </div>
  );
}

export default App;
