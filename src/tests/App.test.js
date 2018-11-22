import React from 'react';
import { render } from 'react-testing-library';
import App from '../App';

test('Should render app', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch('home');
});
