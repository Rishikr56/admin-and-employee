const express = require('express');
const app = express();
const cors = require('cors')
const employeeDetailsRoutes = require("../src/AppRouter/employeeDetails.routes")

app.use(cors());
app.use(express.json());
app.use("/api",employeeDetailsRoutes);

module.exports = app;