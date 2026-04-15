import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import CitizenDashboard from './pages/CitizenDashboard';
import CitizenSubmitComplaint from './pages/CitizenSubmitComplaint';
import CitizenMyComplaints from './pages/CitizenMyComplaints';
import CitizenComplaintDetail from './pages/CitizenComplaintDetail';
import OfficerDashboard from './pages/OfficerDashboard';
import OfficerComplaintDetail from './pages/OfficerComplaintDetail';
import WorkerDashboard from './pages/WorkerDashboard';
import WorkerTaskDetail from './pages/WorkerTaskDetail';
import AdminDashboard from './pages/AdminDashboard';
import RoleDashboardPlaceholder from './pages/RoleDashboardPlaceholder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
        <Route path="/citizen/submit-complaint" element={<CitizenSubmitComplaint />} />
        <Route path="/citizen/my-complaints" element={<CitizenMyComplaints />} />
        <Route path="/citizen/my-complaints/demo" element={<CitizenComplaintDetail />} />
        <Route path="/officer/dashboard" element={<OfficerDashboard />} />
        <Route path="/officer/complaints/demo" element={<OfficerComplaintDetail />} />
        <Route path="/worker/dashboard" element={<WorkerDashboard />} />
        <Route path="/worker/tasks/demo" element={<WorkerTaskDetail />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
