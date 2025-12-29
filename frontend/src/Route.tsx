import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import VolunteerPage from './pages/VolunteerPage';
import App from './App';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/edit" element={<App />} />
            <Route path="*" element={<div>Page not found</div>} />
        </Routes>
    );
}