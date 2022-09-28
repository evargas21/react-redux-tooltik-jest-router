// @packages
import { Navigate, Route, Routes } from 'react-router-dom';

// @scripts
import FormPage from '../pages/Form';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/form" element={<FormPage />}/>
            <Route path="/form/:id" element={<FormPage />}/>
            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    );
};

export default AppRouter
