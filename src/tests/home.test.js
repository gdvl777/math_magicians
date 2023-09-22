import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
