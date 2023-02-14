import React, { FormEvent, useState } from "react";
import { NormalText } from "../../../globalStyles";
import {
  FormContainer,
  RowForms,
  DataInput,
  Select,
  Option,
  LabelInput,
  RegisterButton,
} from "./form";
import isNotValid from "../../../utils/formValidationError";
import {
  addEmployeeStart,
  employee,
  updateEmployeeStart,
} from "../../../store/slice/employeeSlice";
import { useAppDispatch } from "../../../store/hooks";
export interface employeeForm {
  profile_img: string;
  full_name: string;
  date_of_birth: string;
  gender: string;
  salary: number;
  email: string;
  address: string;
  joined_date: string;
  position: string;
}

interface Props {
  isEditMode: boolean;
  user: employee | undefined;
  closePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNew: React.FC<Props> = ({ isEditMode, user, closePopUp }) => {
  const [formData, updateFormData] = useState<any>(user);
  const [error, updateError] = useState<string>();
  const [isInvalid, updateIsInvalid] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const today = () => {
    var today = new Date();
    var dd = today.getDate();
    var str_today = "";
    var str_dd = "";
    var str_mm = "";
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      str_dd = "0" + dd;
    } else str_dd += dd;
    if (mm < 10) {
      str_mm = "0" + mm;
    } else str_mm += mm;
    str_today = yyyy + "-" + str_mm + "-" + str_dd;
    return str_today;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isDataValid = isNotValid(formData);
    if (!isDataValid.value) {
      // send request
      if (isEditMode) {
        dispatch(
          updateEmployeeStart({
            id: user?._id,
            data: formData,
          })
        );
      } else {
        dispatch(addEmployeeStart(formData));
      }
      closePopUp(false);
      updateIsInvalid(false);
    } else {
      updateIsInvalid(true);
      updateError(isDataValid.error);
    }
  };
  return (
    <FormContainer onSubmit={onSubmit}>
      <NormalText fs="17px" color="#000">
        {isEditMode ? "Edit Employee Information" : "Register New Employee"}
      </NormalText>
      <RowForms>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Name
          </NormalText>
          <DataInput
            id="full_name"
            name="full_name"
            placeholder="Jhon Doe"
            defaultValue={isEditMode ? user?.full_name : undefined}
            onChange={(e) =>
              updateFormData({ ...formData, full_name: e.target.value })
            }
            required
          />
        </LabelInput>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Email
          </NormalText>
          <DataInput
            name="email"
            placeholder="example@gmail.com"
            type="email"
            required
            defaultValue={isEditMode ? user?.email : undefined}
            id="email"
            onChange={(e) =>
              updateFormData({ ...formData, email: e.target.value })
            }
          />
        </LabelInput>
      </RowForms>
      <RowForms>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Salary
          </NormalText>
          <DataInput
            name="salary"
            placeholder="0000"
            required
            defaultValue={isEditMode ? user?.salary : undefined}
            type="number"
            min={1}
            id="salary"
            onChange={(e) =>
              updateFormData({ ...formData, salary: e.target.valueAsNumber })
            }
          />
        </LabelInput>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Position
          </NormalText>
          <DataInput
            name="position"
            placeholder="Software engineer..."
            required
            defaultValue={isEditMode ? user?.position : undefined}
            onChange={(e) =>
              updateFormData({ ...formData, position: e.target.value })
            }
          />
        </LabelInput>
      </RowForms>
      <RowForms>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Gender
          </NormalText>
          <Select
            required
            defaultValue={isEditMode ? user?.gender : ""}
            id="gender"
            name="gender"
            onChange={(e) =>
              updateFormData({ ...formData, gender: e.target.value })
            }
          >
            <Option value="" disabled>
              Gender
            </Option>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </LabelInput>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Birth date
          </NormalText>
          <DataInput
            name="date_of_birth"
            id="date_of_birth"
            type="date"
            required
            defaultValue={isEditMode ? user?.date_of_birth : undefined}
            max={today()}
            onChange={(e) =>
              updateFormData({ ...formData, date_of_birth: e.target.value })
            }
          />
        </LabelInput>
      </RowForms>
      <RowForms>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Joined Date
          </NormalText>
          <DataInput
            name="joined_date"
            type="date"
            id="joined_date"
            required
            defaultValue={isEditMode ? user?.joined_date : undefined}
            max={today()}
            onChange={(e) =>
              updateFormData({ ...formData, joined_date: e.target.value })
            }
          />
        </LabelInput>
        <LabelInput>
          <NormalText fs="10px" color="#000">
            Address
          </NormalText>
          <DataInput
            name="address"
            id="address"
            placeholder="Address"
            required
            defaultValue={isEditMode ? user?.address : undefined}
            onChange={(e) =>
              updateFormData({ ...formData, address: e.target.value })
            }
          />
        </LabelInput>
      </RowForms>
      {isInvalid && <div style={{ color: "red" }}>{error}</div>}
      <RegisterButton type="submit">
        {isEditMode ? "Update" : "Register"}
      </RegisterButton>
    </FormContainer>
  );
};

export default AddNew;
