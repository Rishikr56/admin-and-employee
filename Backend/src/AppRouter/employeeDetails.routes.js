const express = require("express");
const {
  getEmployeeDetails,
  updateStatus,
  addEmployee,
} = require("../controllers/employee.details.controller");
const { adminLogin } = require("../controllers/admin.controllers");
const { employeeLogin } = require("../controllers/employee.controllers");
const router = express.Router();

router.get("/getEmployeeData", getEmployeeDetails);
router.patch("/updateStatus/:id", updateStatus);
router.post("/login/admin", adminLogin);
router.post("/login/employee", employeeLogin);
router.post("/addEmployee", addEmployee);

module.exports = router;
