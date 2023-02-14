import React from "react";
import { Buttons, ButtonConfirmation, DeleteLayout } from "./deleteStyles";
import { NormalText } from "../../../globalStyles";
import { deleteEmployeeStart, employee } from "../../../store/slice/employeeSlice";
import { useAppDispatch } from "../../../store/hooks";

interface Props {
  closePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  user: employee | undefined;
}

const Confirmation: React.FC<Props> = ({ closePopUp, user }) => {
  const dispatch = useAppDispatch();

  const handleDeleteConfirm = () => {
    dispatch(deleteEmployeeStart(user?._id));
    closePopUp(false);
  };

  return (
    <DeleteLayout>
      <NormalText fs="20">
        Are You sure you want to delete {user?.full_name} ?
      </NormalText>
      <ButtonConfirmation>
        <Buttons color="#fffff" onClick={() => closePopUp(false)}>
          Cancel
        </Buttons>
        <Buttons tcolor="#fff" color="#c70000" onClick={handleDeleteConfirm}>
          Delete
        </Buttons>
      </ButtonConfirmation>
    </DeleteLayout>
  );
};

export default Confirmation;
