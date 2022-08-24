import React from "react";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import HrPage from "./pages/HrPage";
import EmployeePage from "./pages/EmployeePage";
import PrivateRoute from "./components/PrivateRoute";
import { useAppSelector } from "./hooks/toolkit-types";
import Navbar from "./components/navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/password/ForgotPassword";
import ResetPassword from "./pages/password/ResetPassword";
import RequestForm from "./components/Absence Request";

import EmployeesList from "./pages/EmployeesList/EMployeesList";
import EmployeesHub from "./pages/EmployeesHub/EmployeesHub";
import AbsenceHistory from "./pages/AbsenceHistory";
import AbsenceHistoryAccordionList from "./components/absence-history-accordion";

function App() {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/absencehistory" element={<AbsenceHistory />} />
        <Route path="/absencehistory1" element={<EmployeesHub />} />

        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        {/* protected user page */}
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={<UserPage />} />
        </Route>

        {/* reset password routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

        <Route path="/team/:teamId" element={<EmployeesList />} />
        <Route path="/empList" element={<EmployeesHub />} />

        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        <Route path="page1" element={<Navbar />} />
        <Route path="page2" element={<AbsenceHistoryAccordionList />} />

        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        <Route path="page1" element={<Navbar />} />

        {/* protected user page */}

        <Route path="/hr" element={<PrivateRoute />}>
          <Route path="/hr" element={<HrPage />} />
        </Route>
        {/* protected admin page */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        {/* protected employee page */}
        <Route path="/employee" element={<PrivateRoute />}>
          <Route path="/employee" element={<EmployeePage />} />
        </Route>

        {/* request absence */}
        <Route path="/request" element={<PrivateRoute />}>
          <Route path="/request" element={<RequestForm />} />
        </Route>
        {isAuthenticated ? (
          <Route path="*" element={<Navigate to="/employee" replace />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
