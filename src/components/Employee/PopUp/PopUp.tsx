import React from "react";
import { PopUpContainer } from "./popupStyles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Form from "../Form/NewForm";
import Detail from "../EmployeeDetail/Detail";
import Confirmation from "../DeleteConfirmation/Confirmation";
import { employee } from "../../../store/slice/employeeSlice";

interface Props {
  closePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  component: string;
  isEditMode: boolean;
  user: employee | undefined;
}

const PopUp: React.FC<Props> = ({
  closePopUp,
  component,
  isEditMode,
  user,
}) => {
  return (
    <PopUpContainer>
      <AiOutlineCloseCircle
        style={{
          position: "absolute",
          top: "3rem",
          right: "6rem",
          cursor: "pointer",
          background: "transparent",
          color: "white",
        }}
        size="2rem"
        onClick={() => closePopUp(false)}
      />
      {component === "form" && (
        <Form isEditMode={isEditMode} user={user} closePopUp={closePopUp} />
      )}
      {component === "detail" && <Detail user={user} />}
      {component === "delete" && <Confirmation user={user} closePopUp={closePopUp} />}
    </PopUpContainer>
  );
};

export default PopUp;
