// @packages
import { render, screen } from '@testing-library/react';

// @scripts
import EmployeeCard from '../../src/components/EmployeeCard';

describe('Test in <EmployeeCard />',() => {

    const contact = '1234567';
    const document = 566667;
    const name = 'test name';
    const id = 'ee-11';

    test('must match snapshot', () => {
        const { container } = render(
            <EmployeeCard
                contactNumber={contact}
                document={document}
                fullName={name}
                id={id}
                onEdit={jest.fn()}
            />
        )
        expect(container).toMatchSnapshot();
    });

    test('must display the component with the indicated value', () => {
        render(
            <EmployeeCard
                contactNumber={contact}
                document={document}
                fullName={name}
                id={id}
                onEdit={jest.fn()}
            />
        )
        const title = screen.getByText(name.charAt(0).toUpperCase())
        expect(title).toBeTruthy();
    });
});
