import { render } from 'solid-testing-library';
import '@testing-library/jest-dom';
import App from '../src/App'; // Adjust the path based on your actual App component location

test('renders the welcome message', () => {
  const { getByText } = render(() => <App />);
  expect(getByText('Welcome To FrontEnd Chapter.')).toBeInTheDocument();
});