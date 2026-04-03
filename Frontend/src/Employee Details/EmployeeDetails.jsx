import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";

const EmployeeDetails = () => {
  const [active, setActive] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);

  //sabse pahle sabhi user ko backend se get karna iske liye hum kya kare
  async function fecthEmployeeDatav() {
    const res = await axios.get("http://localhost:3000/api/getEmployeeData");
    setEmployeeData(res?.data?.data);
  }

  useEffect(() => {
    fecthEmployeeDatav();
  }, []);

  async function handleActive(isActive, id) {
    const res = await axios.patch(
      `http://localhost:3000/api/updateStatus/${id}`,
      { isActive: !isActive },
    );
    console.log("res from backend: ", res);
  }
  console.log(employeeData);
  console.log(typeof employeeData);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((e) => (
            <tr key={e._id}>
              <td>{e.fullName}</td>
              <td>{e.email}</td>
              <td onClick={() => handleActive(e.isActive, e._id)}>
                {e.isActive ? <FaToggleOn /> : <FaToggleOff />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
