import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote', () => {
  it('renders the default quote', () => {
    const quote = {
      quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
      author: 'Helen Keller',
      category: 'Inspirational',
    };
    const { container } = render(<Quote quote={quote} />);
    expect(container).toMatchSnapshot();
  });
});
