import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from 'components/Calculator';

describe('User interactions', () => {
  test('Calculating 5 x 3 on calculator', () => {
    render(<Calculator />);

    userEvent.click(screen.getByRole('button', { name: /3/i }));
    userEvent.click(screen.getByRole('button', { name: /X/i }));
    userEvent.click(screen.getByRole('button', { name: /9/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));

    const checkContent = screen.getByTestId('displayCalc');
    expect(checkContent).toHaveTextContent('27');
  });

  test('Input 2.3 on calculator', () => {
    render(<Calculator />);

    userEvent.click(screen.getByRole('button', { name: /2/i }));
    userEvent.click(screen.getByRole('button', { name: /\./i }));
    userEvent.click(screen.getByRole('button', { name: /3/i }));

    const newinput = screen.getByTestId('displayCalc');
    expect(newinput).toHaveTextContent('2.3');
  });

  test('Input 16÷4= on calculator', () => {
    render(<Calculator />);

    userEvent.click(screen.getByRole('button', { name: /1/i }));
    userEvent.click(screen.getByRole('button', { name: /6/i }));
    userEvent.click(screen.getByRole('button', { name: /÷/i }));
    userEvent.click(screen.getByRole('button', { name: /4/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));
    const newinput = screen.getByTestId('displayCalc');
    expect(newinput).toHaveTextContent('4');
  });

  test('Input 20%3= on calculator', () => {
    render(<Calculator />);

    userEvent.click(screen.getByRole('button', { name: /2/i }));
    userEvent.click(screen.getByRole('button', { name: /0/i }));
    userEvent.click(screen.getByRole('button', { name: /%/i }));
    userEvent.click(screen.getByRole('button', { name: /3/i }));
    userEvent.click(screen.getByRole('button', { name: /=/i }));
    const newinput = screen.getByTestId('displayCalc');
    expect(newinput).toHaveTextContent('2');
  });
});
