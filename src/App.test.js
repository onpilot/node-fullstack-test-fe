import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  expect(screen.getByTestId('search-field')).toBeInTheDocument();
  expect(screen.getByTestId('safe-search')).toBeInTheDocument();
});
