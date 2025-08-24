import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

function EmployeeForm() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [mobile, setMobile] = useState("");
  const [branchs, setBranchs] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/employees").then((res) => {
      const emp = res.data.find((e) => e.id === parseInt(id));
      setEmployee(emp);
    });
  }, [id]);

  const handleSubmit = async () => {
    await API.post("/employees/details", {
      employee_id: id,
      role,
      salary,
      mobile,
      branchs, 
    });
    navigate("/details");
  };

  return (
    <div>
      <h2>Employee Form</h2>
      <p>Name: {employee?.name}</p>

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <input
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

    
      <select value={branchs} onChange={(e) => setBranchs(e.target.value)}>
        <option value="">Select Branch</option>
        <option value="CSE">CSE</option>
        <option value="Electrical">Electrical</option>
        <option value="Civil">Civil</option>
        <option value="Mechanical">Mechanical</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>
       <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default EmployeeForm;
