// @packages
import { fireEvent, render, screen } from '@testing-library/react';

// @scripts
import Input from '../../src/components/Input';

describe('Test in <Input />', () => {
    const name = "test";

    test('must match snapshot', () => {
        const { container } = render(<Input name={name} onChange={jest.fn()} value={name}/>);
        expect(container).toMatchSnapshot();
    });

    test('must display the input with the indicated value and disabled', () => {
        render(<Input name={name} onChange={jest.fn()} value={name} disabled />);
        const { value, disabled } = screen.getByRole('textbox');
        expect(value).toBe(name);
        expect(disabled).toBeTruthy();
    });
});
