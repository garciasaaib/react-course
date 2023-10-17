import { render, screen } from '@testing-library/react';
import App from './App';

/*
 1. renderiza el componente app en la pantalla
 2. busca el texto "learn react" en el componente como una query
 3. espera que el texto "learn react" esté en el documento

 toBeInTheDocument introducida a jest por @testing-library/react
 desde el archivo setupTests.ts
*/
 test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
