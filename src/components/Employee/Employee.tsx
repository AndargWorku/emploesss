import React, { useState } from "react";
import { Container, DisplayArea, NormalText } from "../../globalStyles";
import { Heading } from "../../globalStyles";
import { SearchArea, SearchBar, ToolTips, ToolTipText } from "./employeeStyles";
import { IoMdAdd } from "react-icons/io";
import Table from "./Table/Table";
import PopUp from "./PopUp/PopUp";
import { employee } from "../../store/slice/employeeSlice";

const Employee: React.FC = () => {
  const [addPopUp, setAddPopUp] = useState<boolean>(false);
  const [component, setComponent] = useState("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [user, setUser] = useState<employee>();

  const addEmployee = (e: any) => {
    setComponent("form");
    setIsEditMode(false);
    setAddPopUp(true);
  };

  return (
    <Container>
      {addPopUp && (
        <PopUp
          closePopUp={setAddPopUp}
          isEditMode={isEditMode}
          component={component}
          user={user}
        />
      )}
      <Heading mt="2rem">Employee</Heading>
      <DisplayArea width="98%" p="1rem">
        <SearchBar>
          <SearchArea>
            <NormalText fs="17px" fw="medium" color="#55555595">
              Employees
            </NormalText>
          </SearchArea>
          <ToolTips>
            <IoMdAdd
              style={{
                padding: "8px",
                background: "#3f51b5",
                borderRadius: "2.5rem",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
              }}
              size="2.5rem"
              onClick={addEmployee}
            />
            <ToolTipText className="tooltiptext" tooltip="add">
              Add
            </ToolTipText>
          </ToolTips>
        </SearchBar>
        <Table
          setAddPopUp={setAddPopUp}
          setIsEditMode={setIsEditMode}
          setComponent={setComponent}
          setUser={setUser}
        />
      </DisplayArea>
    </Container>
  );
};

export default Employee;
