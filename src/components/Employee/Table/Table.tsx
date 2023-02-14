import React from "react";
import { TableHead, Table as Tables, TableRow, TableData } from "./tableStyles";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { employee, getEmployee } from "../../../store/slice/employeeSlice";
import { useAppSelector } from "../../../store/hooks";

interface Props {
  setAddPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setComponent: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<employee | undefined>>;
}

const Table: React.FC<Props> = ({
  setAddPopUp,
  setComponent,
  setIsEditMode,
  setUser,
}) => {
  const employees = useAppSelector(getEmployee);

  return (
    <>
      {employees.employees.length > 0 ? (
        <Tables>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>date of Birth</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Joined Date</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
          {employees.employees.map((employee, index) => (
            <TableRow>
              <TableData>
                <img
                  src={
                    employee.profile_img
                      ? employee.profile_img
                      : "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744004?k=20&m=1016744004&s=612x612&w=0&h=Z4W8y-2T0W-mQM-Sxt41CGS16bByUo4efOIJuyNBHgI="
                  }
                  width="38px"
                  height="38px"
                  style={{
                    borderRadius: "3rem",
                    cursor: "pointer",
                  }}
                  alt="A"
                  onClick={() => {
                    setComponent("detail");
                    setUser(employees.employees[index]);
                    setAddPopUp(true);
                  }}
                />
              </TableData>
              <TableData>{employee.full_name}</TableData>
              <TableData>{employee.gender}</TableData>
              <TableData>{employee.date_of_birth}</TableData>
              <TableData>{employee.salary}</TableData>
              <TableData>{employee.joined_date}</TableData>
              <TableData> {employee.address} </TableData>
              <TableData gap="3px">
                <FaRegEdit
                  style={{
                    cursor: "pointer",
                    color: "#3f51b4",
                    zIndex: 1,
                  }}
                  size="1.5rem"
                  onClick={() => {
                    setComponent("form");
                    setIsEditMode(true);
                    setUser(employee);
                    setAddPopUp(true);
                  }}
                />
                <RiDeleteBin5Fill
                  style={{
                    cursor: "pointer",
                    color: "#ff0000",
                    marginLeft: "1.5rem",
                  }}
                  size="1.5rem"
                  onClick={() => {
                    setComponent("delete");
                    setUser(employee);
                    setAddPopUp(true);
                  }}
                />
              </TableData>
            </TableRow>
          ))}
        </Tables>
      ) : (
        <div>No Employee is Available</div>
      )}
    </>
  );
};

export default Table;
