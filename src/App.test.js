import { render, screen, fireEvent, waitFor, findByTestId, getByText } from '@testing-library/react';
import axios from "axios";
import App from './App';

test('renders Title Movie Night', () => {
  render(<App />);
  const title = screen.getByText(/Movie Night/i);
  expect(title).toBeInTheDocument();
});

test("renders Search Input", () => {
  render(<App />);
  const searchInput = screen.getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();
});

test("search for one piece and displays one piece suggestion", async () => {
  render(<App />);

  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, {target: {value: 'one piece'}});
  fireEvent.submit(screen.getByTestId("search-form"));

  await waitFor(() => screen.getByTestId("movie-item-0"));

  // so sorry i'm not experienced well in mocking api call
});
