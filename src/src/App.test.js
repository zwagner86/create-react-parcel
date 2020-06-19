import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('shows the React + Parcel message', () => {
    const testMessage = 'React + Parcel';
    const {getByText} = render(<App />);

    expect(getByText(testMessage)).toBeInTheDocument();
});
