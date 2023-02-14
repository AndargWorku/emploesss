import React from "react";
import { FullLayout, NormalText } from "../../globalStyles";

const NotFound: React.FC = () => {
  return (
    <FullLayout color="#fff">
      <NormalText fs="4rem" fw="bold">
        404 Not Found
      </NormalText>
    </FullLayout>
  );
};

export default NotFound;
