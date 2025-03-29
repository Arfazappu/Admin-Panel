import React from "react";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RatingAndReview from "./pages/RatingAndReview";
import Settings from "./pages/Settings";
import History from "./pages/History";
import DashboardLayout from "./components/common/DashboardLayout";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="rating-and-review" element={<RatingAndReview />} />
          <Route path="settings" element={<Settings />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
