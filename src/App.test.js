import React from 'react';
import operate from 'logic/operate';
import calculate from 'logic/calculate';
import renderer from 'react-test-renderer';
import Quote from 'router/Quote';
import Calculator from 'components/Calculator';
import App from 'App';
import { render } from '@testing-library/react';
import { BrowserRouter, useLocation, NavLink } from 'react-router-dom';
import Header from 'components/Header';
import Key from 'components/Key';
import Display from './components/Display';

describe('components', () => {
  test('renders Quote component correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Calculator component correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Display component correctly', () => {
    const tree = renderer
      .create(<Display clname="key darkgray" char="1" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Header component correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><Header /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Key component correctly', () => {
    const tree = renderer
      .create(<Key />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders App component', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
  });
});

/* Testing Operator.js */

describe('Testing operate.js', () => {
  test('Testing + operator', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });
  test('Testing - operator', () => {
    const result = operate(4, 1, '-');
    expect(result).toBe('3');
  });
  test('Testing x operator', () => {
    const result = operate(0, 3, 'x');
    expect(result).toBe('0');
  });
  test('Testing ÷ operator', () => {
    const result = operate(15, 2, '÷');
    expect(result).toBe('7.5');
  });
  test('Testing % operator', () => {
    const result = operate(15, 7, '%');
    expect(result).toBe('1');
  });
});

/* Testing calculate.js */

describe('testing calculate.js ', () => {
  test('Testing AC Button', () => {
    expect(
      calculate(
        {
          total: 5,
          next: 2,
          operation: '+',
        },
        'AC',
      ),
    ).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Testing . Button', () => {
    expect(
      calculate(
        {
          total: null,
          next: '2',
          operation: null,
        },
        '.',
      ),
    ).toEqual({
      total: null,
      next: '2.',
      operation: null,
    });
  });

  test('Testing +/- Button', () => {
    expect(
      calculate(
        {
          total: null,
          next: '2',
          operation: null,
        },
        '+/-',
      ),
    ).toEqual({
      total: null,
      next: '-2',
      operation: null,
    });
  });

  test('Testing +/- Button', () => {
    expect(
      calculate(
        {
          total: null,
          next: '-5',
          operation: null,
        },
        '+/-',
      ),
    ).toEqual({
      total: null,
      next: '5',
      operation: null,
    });
  });
  test('Testing = Button', () => {
    expect(
      calculate(
        {
          total: 5,
          next: '2',
          operation: 'x',
        },
        '=',
      ),
    ).toEqual({
      total: '10',
      next: null,
      operation: null,
    });
  });
});
