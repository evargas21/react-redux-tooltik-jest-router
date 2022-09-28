// @packages
import { renderHook } from '@testing-library/react';

// @scripts
import { useSearch } from '../../src/hooks';

describe('Test in useSearch', () => {
    test('should', () => {
        const { result } = renderHook(() => useSearch());
        const { data } = result.current;
        expect(data).toEqual([]);
    });
});
