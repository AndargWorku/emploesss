import { employeeForm } from "../components/Employee/Form/NewForm";



const isEmpty = (attribute: string) => {
  return attribute?.length === 0 || !attribute.trim();
};

const validation = (employee: employeeForm | undefined) => {
  if (employee?.full_name !== undefined) {
    if (isEmpty(employee.full_name)) {
      return { error: "Invalid Name!", value: true };
    }
  } else return { error: "Invalid Name!", value: true };

  if (employee?.date_of_birth !== undefined) {
    if (isEmpty(employee.date_of_birth)) {
      return { error: "Invalid Date of Birth!", value: true };
    }
  } else return { error: "Invalid Date of Birth!", value: true };

  if (employee?.gender !== undefined) {
    if (isEmpty(employee.gender)) {
      return { error: "invalid Gender!", value: true };
    }
  } else return { error: "Invalid Gender!", value: true };
  if (employee?.email !== undefined) {
    if (isEmpty(employee.email)) {
      return { error: "Invalid Email!", value: true };
    }
  } else return { error: "Invalid Email!", value: true };
  if (employee?.address !== undefined) {
    if (isEmpty(employee.address)) {
      return { error: "Invalid Address!", value: true };
    }
  } else return { error: "Invalid Address!", value: true };

  if (employee?.joined_date !== undefined) {
    if (isEmpty(employee.joined_date)) {
      return { error: "Invalid joined Date!", value: true };
    }
  } else return { error: "Invalid joined date!", value: true };

  if (employee?.position !== undefined) {
    if (isEmpty(employee.position)) {
      return { error: "Invalid Position!", value: true };
    }
  } else return { error: "Invalid Position!", value: true };

  return { error: "no error", value: false };
};

export default validation;
