// @packages
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

// @scripts
import Home from '../../src/pages/Home';
import { store } from '../../src/store/store';

describe('Test in <Home />', () => {
    test('should text input search', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        )

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: { value: 'Does', name: 'search' }})
        expect(input.value).toBe('Does');
    });
});