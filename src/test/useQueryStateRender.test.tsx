import React from 'react';
import { describe, test, expect, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMockProvider } from '../mock/mockProvider';
import Counter from '../components/Counter';

describe('useQueryState: Testing component', () => {
  const { MockProvider, queryClient } = createMockProvider();

  afterEach(async () => {
    queryClient.clear();
  });

  test('Render state value.', () => {
    render(<Counter />, { wrapper: MockProvider });
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('Render chamge state value', async () => {
    render(<Counter />, { wrapper: MockProvider });

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });
});
