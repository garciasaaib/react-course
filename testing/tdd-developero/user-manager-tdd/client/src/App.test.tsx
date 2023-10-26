import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './mocks/render-width-providers';

test('it should render the login page', () => {
  renderWithProviders(<App />);

  const headingLogin = screen.getByRole('heading',{name: /login/i});
  expect(headingLogin).toBeInTheDocument();
});
