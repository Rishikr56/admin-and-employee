import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Admin from "./components/Admin.jsx";
import Employee from "./components/Employee.jsx";
import EmployeeDetails from "./Employee Details/EmployeeDetails.jsx";
import Random from "./components/Random.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/employee" element={<Employee />}></Route>
      <Route path="/employeeDetails" element={<EmployeeDetails />}></Route>
    </Routes>
  </BrowserRouter>,
);
