import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Quote from '../components/Quote';

// Mock the fetch function to simulate a successful response
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve([{ quote: 'Test Quote' }]), }) )
});

afterAll(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

test('renders the Quote component', async () => {
  // Render the Quote component
  const { getByText } = render(<Quote />);

  // Wait for the component to fetch data and render
  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalled();
  });

  // Check if the loading text is not displayed
  expect(getByText('Loading...')).not.toBeInTheDocument();

  // Check if the quote is displayed
  const quoteElement = getByText('Test Quote');
  expect(quoteElement).toBeInTheDocument();
});
