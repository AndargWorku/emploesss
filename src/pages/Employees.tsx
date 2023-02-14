import React from "react";
import Employee from "../components/Employee/Employee";
import Navbar from "../components/Navigation/Navbar";
import { Container, Divider, Layout } from "../globalStyles";

const Employees: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Divider>
        <Container>
          <Employee />
        </Container>
      </Divider>
    </Layout>
  );
};

export default Employees;
