const employeedetailsModels = require("../models/employeedetails.models");

async function getEmployeeDetails(req, res) {
  try {
    const dataOfEmployee = await employeedetailsModels.find({});
    res.status(200).json({
      message: "Employee details fteched successfully",
      data: dataOfEmployee,
    });
  } catch (error) {
    console.log(error);
  }
}

async function updateStatus(req, res) {
  try {
    const id = req.params.id;
    const { isActive } = req.body;

    if (typeof isActive !== "boolean") {
      return res.status(400).json({ message: "isActive must be boolean" });
    }

    const apiResponse = await employeedetailsModels.findByIdAndUpdate(
      id,
      { isActive },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!apiResponse) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(200).json({
      message: "status updated successfully",
      data: apiResponse,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Update failed", error: error.message });
  }
}

module.exports = { updateStatus, getEmployeeDetails };
