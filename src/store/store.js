// @packages
import { configureStore } from '@reduxjs/toolkit';

// @scripts
import { employeeSlice } from './employees/employeeSlice';

export const store = configureStore({
    reducer: {
        employees: employeeSlice.reducer
    },
});
