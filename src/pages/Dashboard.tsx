import React from "react";
import { Container, Divider, Layout } from "../globalStyles";
import DashboardComponent from "../components/Dashboard/Dashboard";
import Navbar from "../components/Navigation/Navbar";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Divider>
        <Container>
          <DashboardComponent />
        </Container>
      </Divider>
    </Layout>
  );
};

export default Dashboard;
