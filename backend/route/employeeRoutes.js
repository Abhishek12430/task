import express from "express";
import {
  getEmployees,
  addEmployee,
  addEmployeeDetails,
  getEmployeeDetails,
  deleteEmployee,
  updateEmployeeDetails,
} from "../controller/employeeController.js";

const router = express.Router();

router.get("/employees", getEmployees);
router.post("/employees", addEmployee);

router.post("/employees/details", addEmployeeDetails);
router.get("/employees/details", getEmployeeDetails);

router.delete("/employees/:id", deleteEmployee);
router.put("/employees/:id", updateEmployeeDetails);

export default router;
