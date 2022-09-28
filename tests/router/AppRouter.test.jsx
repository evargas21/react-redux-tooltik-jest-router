// @packages
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

// @scripts
import AppRouter from '../../src/router/AppRouter';
import { store } from '../../src/store/store';

describe('Test in <AppRouter />', () => {
    test('should show initial route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('EPIC')).toBeTruthy();
    });

    test('should show form page route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/form']}>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Form Employee')).toBeTruthy();
        expect(screen.getAllByText('Add employee')).toBeTruthy();
    });

    test('should show form page route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/form/id']}>
                    <AppRouter />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByText('Update employee')).toBeTruthy();
    });

});
