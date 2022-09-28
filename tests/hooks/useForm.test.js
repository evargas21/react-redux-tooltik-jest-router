// @packages
import { act, renderHook } from '@testing-library/react';

// @scripts
import { useForm } from '../../src/hooks';

describe('Test in useForm', () => {

    const form = {
        name: ''
    };

    const event = {target: { value: 'Changed', name: 'name' }}

    test('should return default value', () => {
        const { result } = renderHook(() => useForm());
        const { formState, onInputChange, onResetForm } = result.current;
        expect(formState).toEqual({});
        expect(onInputChange).toEqual(expect.any(Function));
        expect(onResetForm).toEqual(expect.any(Function));
    });

    test('should return value state', () => {
        const { result } = renderHook(() => useForm(form));
        expect(result.current).toEqual({
            name: form.name,
            formState: form,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('should change state init', () => {
        const { result } = renderHook(() => useForm(form));
        const { onInputChange } = result.current;
        act(() => {
            onInputChange(event);
        });
        expect(result.current.name).toBe(event.target.value);
        expect(result.current.formState).toEqual({name: event.target.value});
    });

    test('should reset state to init value', () => {
        const { result } = renderHook(() => useForm(form));
        const { onResetForm, onInputChange } = result.current;
        act(() => {
            onInputChange(event);
            onResetForm();
        });
        expect(result.current.formState).toEqual(form);
    });
});
