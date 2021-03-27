import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Game from './Game';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Game />);
    expect(asFragment()).toMatchSnapshot();
  });
});
