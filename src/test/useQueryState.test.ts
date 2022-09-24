import { describe, test, expect } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useQueryState } from '../core/index';
import { createMockProvider } from '../mock/mockProvider';

describe('useQueryState: Testing hook', () => {
  const initialSettings = () => {
    const { MockProvider } = createMockProvider();
    const { result } = renderHook(() => useQueryState(['TEST'], { userName: 'Hoge', isLoggedIn: true }), {
      wrapper: MockProvider,
    });
    return result;
  };

  test('Set global state.', () => {
    const result = initialSettings();
    const [getter] = result.current;

    expect(getter.userName).toBe('Hoge');
    expect(getter.isLoggedIn).toBeTruthy();
  });

  test('Change global state.', async () => {
    const result = initialSettings();

    // change state value
    await act(async () => {
      const [getter, setter] = result.current;
      setter({ ...getter, userName: '', isLoggedIn: false });
    });

    // Using React 18 or later, Required "waitFor"
    // https://tanstack.com/query/v4/docs/guides/testing#our-first-test
    await waitFor(() => expect(result.current[0].userName).toBe(''));
    await waitFor(() => expect(result.current[0].isLoggedIn).toBe(false));
  });
});
