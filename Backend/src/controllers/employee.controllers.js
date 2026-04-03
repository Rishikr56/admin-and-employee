const employeedetailsModels = require("../models/employeedetails.models");

async function employeeLogin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const isEmployeeExist = await employeedetailsModels.findOne({ email });
    if (!isEmployeeExist) {
      return res.status(401).json({
        message: "Unauthorized Access",
      });
    }

    console.log("db pass", isEmployeeExist.password);
    console.log("user pass", password);
    console.log("Employee details", isEmployeeExist);
    if (isEmployeeExist.password !== password) {
      return res.status(401).json({
        message: "Password is wrong",
        password: isEmployeeExist.password,
      });
    }
    console.log("isEMplo ohdfiu", isEmployeeExist.password);
    console.log(password);

    return res.status(200).json({
      message: "Successfully logged in",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Login Error",
      error: error.message,
    });
  }
}

module.exports = { employeeLogin };
