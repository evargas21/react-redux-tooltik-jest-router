// @packages
import { useEffect, useState } from 'react';

export const useSearch = (search = '', dataFilter = []) => {
    const [data, setData] = useState(dataFilter);

    const filterEmployee = () => {
        const employees = data.filter((e) => {
            if (e.document.toString().includes(search)) return e
            if (e.fullName.toLowerCase().includes(search)) return e
            if (e.position.toLowerCase().includes(search)) return e
        });
        setData(employees);
    }

    useEffect(() => {
        if (search.trim()) {
            filterEmployee()
        } else {
            setData(dataFilter)
        }
    }, [search]);

    return {
        data
    }
}
