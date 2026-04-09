import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/Admin";
import Employee from "../components/Employee";
import EmployeeDetails from "../Employee Details/EmployeeDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/employee" element={<Employee />}></Route>
      <Route path="/employeeDetails" element={<EmployeeDetails />}></Route>
    </Routes>
  );
};

export default AppRouter;
