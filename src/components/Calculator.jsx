import React, { useState } from 'react';
import Key from './Key';
import Display from './Display';
import calculate from '../logic/calculate';

const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calculator = () => {
  const [tools, setTools] = useState({ total: null, next: null, operation: null });
  const operation = (e) => {
    setTools(calculate(tools, e.target.innerHTML));
    console.log(tools.total);
  };
  return (
    <section className="container">
      <Display clname="key darkgray" char="0" />
      <div className="keyContainer">{buttons.map((val) => (<Key key={val} clname="key lightgray" char={val} handleClick={operation} />))}</div>
    </section>
  );
};
export default Calculator;
//
// return (
