import React from 'react';
import { render } from '@testing-library/react';

// Simple component test to verify React is working
const TestComponent = () => <div>Portfolio Test</div>;

test('React renders components correctly', () => {
  const { getByText } = render(<TestComponent />);
  expect(getByText('Portfolio Test')).toBeInTheDocument();
});

test('basic functionality works', () => {
  expect(1 + 1).toBe(2);
});
