import db from "../config/db.js";

// Get all employees
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM employee");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add employee
export const addEmployee = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name required" });

  try {
    const [result] = await db.query("INSERT INTO employee (name) VALUES (?)", [
      name,
    ]);
    res.json({ id: result.insertId, name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add employee details 
export const addEmployeeDetails = async (req, res) => {
  const { employee_id, role, salary, mobile, branchs } = req.body;

  if (!employee_id || !role || !salary || !mobile || !branchs) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    await db.query(
      "INSERT INTO employee_details (role, salary, mobile, branchs, employee_id) VALUES (?, ?, ?, ?, ?)",
      [role, salary, mobile, branchs, employee_id]
    );
    res.json({ message: "Details added" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get employee details
export const getEmployeeDetails = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT e.id, e.name, d.role, d.salary, d.mobile, d.branchs
       FROM employee e
       JOIN employee_details d ON e.id = d.employee_id`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete employee
export const deleteEmployee = async (req, res) => {
  try {
    await db.query("DELETE FROM employee WHERE id = ?", [req.params.id]);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Edit employee details 
export const updateEmployeeDetails = async (req, res) => {
  const { id } = req.params;
  const { role, salary, mobile, branchs } = req.body;

  try {
    await db.query(
      "UPDATE employee_details SET role=?, salary=?, mobile=?, branchs=? WHERE employee_id=?",
      [role, salary, mobile, branchs, id]
    );
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
