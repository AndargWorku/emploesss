import React, { useEffect } from "react";
import GlobalStyle from "../globalStyles";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Employees from "../pages/Employees";
import NotFound from "../pages/PageNotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getEmployeesFetch } from "../store/slice/employeeSlice";
import { ToastContainer } from "react-toastify";
import { getUser } from "../store/slice/authSlice";

const App: React.FC = () => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesFetch());
  }, [dispatch]);

  const ProtectedRoute = ({ children }: any) => {
    if (user.admin?._id === "not_found") {
      console.log("not found");
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div>
      <ToastContainer
        toastStyle={{ backgroundColor: "#2a2a67", height: 20 }}
        hideProgressBar={true}
        position="top-right"
        autoClose={5000}
      />
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="employees"
            element={
              <ProtectedRoute>
                <Employees />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
