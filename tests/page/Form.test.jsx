// @packages
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

// @scripts
import FormPage from '../../src/pages/Form';
import { store } from '../../src/store/store';

describe('Test in <FormPage />', () => {
    test('must match snapshot', () => {
        const { container } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FormPage />
                </MemoryRouter>
            </Provider>
        )

        expect(container).toMatchSnapshot();
    });

});
