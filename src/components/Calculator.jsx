import React, { useEffect, useState } from 'react';
import Key from './Key';
import Display from './Display';
import calculate from '../logic/calculate';

const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calculator = () => {
  const [tools, setTools] = useState({ total: null, next: null, operation: null });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    console.log(tools);
    if (tools.next) {
      setDisplay(tools.next);
    } else if (tools.operation) {
      setDisplay(tools.operation);
    } else if (tools.total) {
      setDisplay(tools.total);
    } else setDisplay(0);
  });
  const operation = (e) => {
    const updatedTools = calculate(tools, e.target.innerHTML);
    setTools(updatedTools);
    setDisplay((state) => console.log(state, tools));
  };
  return (
    <section className="container">
      <Display clname="key darkgray" char={display} />
      <div className="keyContainer">{buttons.map((val) => (<Key key={val} clname="key lightgray" char={val} handleClick={operation} />))}</div>
    </section>
  );
};
export default Calculator;
//
// return (
