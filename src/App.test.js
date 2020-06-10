/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Name', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Name/i);
    expect(linkElement).toBeInTheDocument();
});
