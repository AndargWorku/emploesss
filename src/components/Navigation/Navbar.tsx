import React from "react";
import {
  NavbarContainer,
  NavbarCompanyDesc,
  NavbarImg,
  NavbarList,
  NavbarLogo,
  NavbarName,
  NavbarProfile,
  NavLinks,
  NavProfileRole,
  NavName,
  UpperNavBar,
} from "../../globalStyles";
import { MdOutlineDashboard } from "react-icons/md";
import { BiGroup } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/slice/authSlice";
import { AiOutlineLogout } from "react-icons/ai";

// https://res.cloudinary.com/amanuel/image/upload/v1661031755/addissoftware/logo-removebg-preview_i094qa.png
const Navbar: React.FC = () => {
  const location = useLocation();
  const user = useAppSelector(getUser);

  return (
    <NavbarContainer>
      <UpperNavBar>
        <a href="/">
          <NavbarCompanyDesc>
            <NavbarLogo
              src="https://res.cloudinary.com/amanuel/image/upload/v1661031755/addissoftware/logo-removebg-preview_i094qa.png"
              alt="A"
            />
            <NavbarName>Adployee</NavbarName>
          </NavbarCompanyDesc>
        </a>
        <NavbarProfile>
          <NavbarImg src="https://media-exp1.licdn.com/dms/image/C4E0BAQHurifakT9r2g/company-logo_200_200/0/1658769689927?e=2147483647&v=beta&t=zb-Tkcb83nWllnPe_sB5d6I_AECqvnMMuNQpyWuqzis" />
          <NavName>{user.admin?.name}</NavName>
          <NavProfileRole>Admin</NavProfileRole>
        </NavbarProfile>
      </UpperNavBar>
      <NavbarList>
        {/* <NavbarItem> */}
        <NavLinks
          background={location.pathname === "/" ? "#dee2e6" : "transparent"}
          href="/"
        >
          <MdOutlineDashboard
            style={{ background: "transparent" }}
            size="1.1rem"
          />
          Dashboard
        </NavLinks>
        <NavLinks
          background={
            location.pathname === "/employees" ? "#dee2e6" : "transparent"
          }
          href="/employees"
        >
          <BiGroup size="1.1rem" style={{ background: "transparent" }} />
          Employees
        </NavLinks>
        <NavLinks
          background="transparent"
          href="/login"
          onClick={() => {
            localStorage.clear();
          }}
        >
          <AiOutlineLogout
            size="1.1rem"
            style={{ background: "transparent" }}
          />
          Log Out
        </NavLinks>
        {/* </NavbarItem> */}
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
