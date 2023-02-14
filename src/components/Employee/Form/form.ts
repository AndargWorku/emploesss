import styled from "styled-components";

interface form {
  type?: string;
  w?: string;
  b?: string;
}

export const FormContainer = styled.form`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
`;

export const RowForms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2%;
  padding: 0 1%;
`;

export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
`;

export const DataInput = styled.input<form>`
  type: ${({ type }) => (type ? type : "text")};
  outline: none;
  width: ${({ w }) => (w ? w : "100%")};
  border: ${({ b }) => (b ? b : "1px solid #55555550")};
  border-radius: 5px;
  background: #ecf0f4;
  padding: 0.5rem 1rem;
  color: #00000095;

  &:hover {
  }
`;

export const Select = styled.select`
  width: 50%;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid #55555550;
  border-radius: 5px;
`;
export const Option = styled.option`
  width: 100%;

  &:hover {
    background: #3f51b4;
  }
`;

export const RegisterButton = styled.button`
  background: #3f51b4;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  width: 50%;
  margin-top: 2rem;
  cursor: pointer;
  type: submit;

  &:hover {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2),
      4px 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
