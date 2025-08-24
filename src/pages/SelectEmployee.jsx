import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function SelectEmployee() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const handleSubmit = () => {
    if (selected) navigate(`/form/${selected}`);
  };

  return (
    <div>
      <h2>Select Employee</h2>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="">-- Choose Employee --</option>
        {employees.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SelectEmployee;
