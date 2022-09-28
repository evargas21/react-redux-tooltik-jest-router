// @packages
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// @scripts
import EmployeeCard from '../components/EmployeeCard';
import SearchInput from '../components/SearchInput';
import { getData } from '../store/employees/employeeSlice';
import { useSearch, useForm } from '../hooks';

const Home = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.employees.data);

    const { onInputChange, search } = useForm({ search: '' });

    const { data: employees } = useSearch(search, data);

    const addNewPersonnel = () => {
        console.log("AddNewPersonnel")
        navigation('/form');
    };

    const handleEdit = (id) => {
        navigation(`/form/${id}`, {
            replace: true
        })
    };

    useEffect(() => {
        if (!search) {
            dispatch(getData());
        }
    }, [search]);

    return (
        <div className="home-container">
            <h1>EPIC</h1>
            <div className="search-container">
                <SearchInput
                    placeholder="Search employee..."
                    onChange={onInputChange}
                    name="search"
                />
                <button
                    className="custom-button"
                    aria-label="add-employee-btn"
                    onClick={addNewPersonnel}
                >
                    Add new personnel
                </button>
            </div>
            <div className="list-card">
                {
                    employees.map((employee) => (
                        <EmployeeCard key={employee.id} {...employee} onEdit={handleEdit} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
