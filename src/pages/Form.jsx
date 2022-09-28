// @packages
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

// @scripts
import Input from '../components/Input';
import form from '../data/form';
import { addEmployee, getData, updateEmployee } from '../store/employees/employeeSlice';
import { useForm } from '../hooks';

const FormPage = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const { id } = useParams();

    const data = useSelector((state) => state.employees.data);

    const employee =  data.find((e) => e.id === id);

    const { onInputChange, onResetForm, formState } = useForm({
        document: employee?.document || '',
        fullName: employee?.fullName || '',
        contactNumber: employee?.contactNumber || '',
        position: employee?.position || '',
        dateBirth: employee?.dateBirth || '',
        address: employee?.address || '',
        email: employee?.email || '',
        salary: employee?.salary || ''
    });

    const submit = (e) => {
        e.preventDefault();
        const data = {
            ...formState,
            document: parseInt(formState.document),
            salary: parseInt(formState.salary)
        }
        if(id) {
            data.id = id;
            dispatch(updateEmployee(data))
        } else {
            data.id = uuid();
            dispatch(addEmployee(data));
        }

        onResetForm();
        navigation('/');
    };

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <div>
            <h1>Form Employee</h1>
            <h2 className="option-form">
                { id ? 'Update employee' : 'Add employee' }
            </h2>
            <form onSubmit={submit}>
                <div className="form">
                    {
                        form.map(({name, type, label}) => (
                            <Input
                                key={name}
                                value={formState[name].toString()}
                                type={type}
                                name={name}
                                disabled={!!(name === 'document' && id)}
                                onChange={onInputChange}
                                label={label}
                            />
                        ))
                    }
                </div>
                <div className="button-container">
                    <button className="custom-button">
                        { id ? 'Update employee' : 'Add employee' }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormPage;
