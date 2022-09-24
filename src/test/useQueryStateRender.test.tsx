import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMockProvider } from '../mock/mockProvider';
import Counter from '../components/Counter';

describe('useQueryState: Testing component', () => {
  const { MockProvider } = createMockProvider();

  test('Render state value.', () => {
    render(<Counter />, { wrapper: MockProvider });
    screen.debug();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
