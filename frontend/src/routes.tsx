import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import FormationPage from './pages/Formation';
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Applications from './pages/admin/Applications';
import Testimonials from './pages/admin/Testimonials';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'projects') {
      navigate('/projects');
    } else if (sectionId === 'formation') {
      navigate('/formation');
    } else if (sectionId === 'contact') {
      if (window.location.pathname === '/') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (['accueil', 'apropos', 'services', 'portfolio', 'faq'].includes(sectionId)) {
      if (window.location.pathname === '/') {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate('/');
    }
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home onNavigate={handleNavigate} />} />
      <Route path="/projects" element={<ProjectsPage onNavigate={handleNavigate} />} />
      <Route path="/formation" element={<FormationPage onNavigate={handleNavigate} />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      
      {/* Routes d'administration protégées */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute requireAdmin={true}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="applications" element={<Applications />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Route>

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
