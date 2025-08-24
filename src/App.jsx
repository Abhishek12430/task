import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectEmployee from "./pages/SelectEmployee";
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectEmployee />} />
        <Route path="/form/:id" element={<EmployeeForm />} />
        <Route path="/details" element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
