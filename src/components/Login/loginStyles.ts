import styled from "styled-components";
import { DisplayArea } from "../../globalStyles";

interface inputScale {
  mt?: string;
}

export const LogInLayout = styled(DisplayArea)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background: #fff;
  padding: 1rem 1rem;
`;

export const Input = styled.span<inputScale>`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: transparent;
  border: 1px solid #55555550;
  border-radius: 5px;
  background: #ecf0f4;
  margin-top: ${({ mt }) => (mt ? mt : "")};
  padding: 0.2rem 1rem;
`;

// export const LoginButton = styled(RegisterButton);
