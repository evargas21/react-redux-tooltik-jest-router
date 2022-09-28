// @packages
import { render, screen } from '@testing-library/react';

// @scripts
import SearchInput from '../../src/components/SearchInput';

describe('Test in <SearchInput />', () => {
    const value = 'test';

    test('must match snapshot', () => {
        const { container } = render(<SearchInput  name={name} onChange={jest.fn()}/>)
        expect(container).toMatchSnapshot();
    });

    test('must display the input with the indicated value and placeholder', () => {
        render(<SearchInput name={value} onChange={jest.fn()} placeholder={value} />);
        const { name, placeholder } = screen.getByTestId('test-input-search');
        expect(name).toBe(value);
        expect(placeholder).toBe(value);
    });
});
