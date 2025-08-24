import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function EmployeeDetails() {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  const fetchDetails = () => {
    API.get("/employees/details").then((res) => setDetails(res.data));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/employees/${id}`);
    fetchDetails();
  };

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
  };

  return (
    <div>
      <h2>Employee Details</h2>
      {details.map((d) => (
        <div key={d.id}>
        
          <p>
            {d.name} - {d.role} - {d.salary} - {d.mobile} - {d.branchs}
          </p>
          <button onClick={() => handleEdit(d.id)}>Edit</button>
          <button onClick={() => handleDelete(d.id)}>Delete</button>
        </div>
      ))}
    <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default EmployeeDetails;
