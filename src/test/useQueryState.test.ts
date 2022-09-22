import { describe, test, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useQueryState } from '../core/index';
import { createMockProvider } from '../mock/mockProvider';

describe('useQueryState', () => {
  test('Set global state.', () => {
    const { MockProvider } = createMockProvider();
    const { result } = renderHook(() => useQueryState(['TEST'], { id: 1, userName: 'Hoge', isLoggedIn: true }), {
      wrapper: MockProvider,
    });

    const [getter] = result.current;

    expect(getter.isLoggedIn).toBeTruthy();
  });
  // test('Read global state.', () => {});
});
