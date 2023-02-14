import axios from "axios";
import React, { FormEvent, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { FullLayout, NavbarLogo, NormalText } from "../../globalStyles";
import { useAppDispatch } from "../../store/hooks";
import { Login } from "../../store/slice/authSlice";
import { DataInput, RegisterButton } from "../Employee/Form/form";
import { Input, LogInLayout } from "./loginStyles";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      try {
        await axios
          .post(
            "https://employee--api.herokuapp.com/api/auth/login",
            credentials
          )
          .then((res) => {
            setError(false);
            console.log(res.data.token);
            const token = res.data.token;
            localStorage.setItem("user", JSON.stringify(res.data.currentUser));
            localStorage.setItem("token", token);
            dispatch(
              Login({
                admin: res.data.currentUser,
                isLoggedin: true,
                Loading: false,
                error: false,
                errorMessage: "",
              })
            );
            navigate("/");
          });
      } catch (errors: any) {
        dispatch(
          Login({
            isLoggedin: false,
            Loading: false,
            error: false,
            errorMessage: errors.response.data.message,
          })
        );
        setError(true);
        setErrorMessage(errors.response.data.message);
      }
    } else {
      setError(true);
      setErrorMessage("empty space!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <FullLayout>
        <LogInLayout>
          <NavbarLogo
            w="10rem"
            src="https://res.cloudinary.com/amanuel/image/upload/v1661031755/addissoftware/logo-removebg-preview_i094qa.png"
            alt="A"
          />
          <NormalText ff="Georgia" fs="30px" fw="bold" mt="-3rem">
            Login
          </NormalText>
          <Input mt="2rem">
            <MdOutlineEmail
              style={{
                background: "transparent",
                color: "#55555570",
              }}
              size="1.5rem"
            />
            <DataInput
              w="90%"
              b="none"
              placeholder="username"
              type="text"
              name="username"
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Input>
          <Input>
            <RiLockPasswordLine
              style={{
                background: "transparent",
                color: "#55555570",
              }}
              size="1.5rem"
            />
            <DataInput
              w="90%"
              b="none"
              placeholder="********"
              type="password"
              name="password"
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Input>
          {error && <div style={{ color: "red" }}>{errorMessage}</div>}
          <RegisterButton type="submit">Login</RegisterButton>
        </LogInLayout>
      </FullLayout>
    </form>
  );
};

export default AdminLogin;
