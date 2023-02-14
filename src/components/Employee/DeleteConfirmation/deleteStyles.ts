import styled from "styled-components";

interface confirmation {
  color?: string;
  tcolor?: string;
}

export const DeleteLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 10px;
`;

export const Buttons = styled.button<confirmation>`
  background: ${({ color }) => color};
  padding: 0.5rem 1.5rem;
  border: ${({ color }) => `1px solid ${color}`};
  outline: none;
  border-radius: 5px;
  color: ${({ tcolor }) => tcolor ? tcolor : "black"};
  width: 45%;
  margin-top: 2rem;
  cursor: pointer;
`;

export const ButtonConfirmation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  justify-content: start;
`;
