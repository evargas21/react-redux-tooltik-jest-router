// @scripts
import { demoEmployee, demoUpdateEmployee, initState, initStateCreated } from "../../fixtures/employeeFixtures";
import { employeeSlice, addEmployee, updateEmployee } from '../../../src/store/employees/employeeSlice';

describe('Test in employeeSlice', () => {

    test('should show state init and name slice', () => {
        const state = employeeSlice.reducer(initState, {});
        expect(state).toEqual(initState);
        expect(employeeSlice.name).toBe('employee')
    });

    test('should create a employee', () => {
        const state = employeeSlice.reducer(initState, addEmployee(demoEmployee));
        expect(state).toEqual({
            data: [
                demoEmployee
            ]
        })
    });

    test('should update a employee', () => {
        const state = employeeSlice.reducer(initStateCreated, updateEmployee(demoUpdateEmployee));
        expect(state).toEqual({
            data: [
                demoUpdateEmployee
            ]
        })
    });
});
