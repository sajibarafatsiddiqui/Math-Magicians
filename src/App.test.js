import React from 'react';
import renderer from 'react-test-renderer';
import Quote from 'router/Quote';
import Calculator from 'components/Calculator';
import Display from './components/Display';
import App from 'App';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import Key from 'components/Key';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



describe('components', () => {
    test('renders Quote component correnctly', () => {
        const tree = renderer
          .create(<Quote />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    test('renders Calculator component correnctly', () => {
        const tree = renderer
          .create(<Calculator />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    test('renders Display component correnctly', () => {
        const tree = renderer
          .create(<Display clname="key darkgray" char='1' />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    test('renders Header component correnctly', () => {
        const tree = renderer
          .create(<BrowserRouter><Header /></BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });  
    test('renders Key component correnctly', () => {
        const tree = renderer
          .create(<Key />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      }); 
    it('renders App component', () => {
        render(<BrowserRouter><App /></BrowserRouter>);
      });      
  });

 