// @packages
import { createSlice } from '@reduxjs/toolkit';

// @scripts
import initData from '../../data/mock';

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        data: initData
    },
    reducers: {
        getData: (state) => {
            state.data = state.data.map((e) => e).sort((a, b) => {
                if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) return -1;
                if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) return 1;
                return 0;
            });
        },
        addEmployee: (state, action) => {
           state.data.push(action.payload);
        },
        updateEmployee: (state, action) => {
            state.data = state.data.map((employee) => {
                if (employee.id === action.payload.id) return action.payload
                return employee;
            })
        },
    },
});

// Action creators are generated for each case reducer function
export const { addEmployee, getData, updateEmployee } = employeeSlice.actions