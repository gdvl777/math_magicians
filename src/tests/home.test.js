import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders the Home component', () => {
  // Render the Home component
  const { getByText } = render(<Home />);

  // Use the getByText method to check if specific text is present in the component
  const pageTitle = getByText('Welcome to Our Page!');
  const paragraphText = getByText(
    'The Math Magicians app is a powerful calculator that provides users with the ability to perform various calculations effortlessly.'
  );

  // Assert that the elements you expected are present in the rendered component
  expect(pageTitle).toBeInTheDocument();
  expect(paragraphText).toBeInTheDocument();
});
