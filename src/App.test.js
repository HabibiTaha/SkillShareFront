// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to SkillSwap!/i)).toBeInTheDocument();
});

// Additional tests to check if the Navbar and routes are working
test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Profile/i)).toBeInTheDocument();
});
