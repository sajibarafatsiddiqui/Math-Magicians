import Key from './Key';

const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calculator = () => (
  <section className="container">
    <Key clname="key darkgray" char="0" />
    <div className="keyContainer">{buttons.map((val) => (<Key key={val} clname="key lightgray" char={val} />))}</div>
  </section>
);

export default Calculator;
