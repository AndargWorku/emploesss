import styled from "styled-components";

interface Actions {
  gap?: string;
}

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background: transparent;
`;

export const TableRow = styled.tr`
  display: table-row;
  align-items: center;
  background: transparent;
  &:hover {
    background: #ecf0f4;
  }
`;

export const TableHead = styled.th`
  padding: 12px 8px;
  text-align: left;
  color: white;
  border: none;
  color: #00000095;
  font-weight: 500;
  background: transparent;
  border-bottom: 1px solid #55555540;
`;
export const TableData = styled.td<Actions>`
  padding: 8px;
  font-weight: 300;
  font-family: Georgia;
  margin-top: 3px;
  background: transparent;
  border-bottom: 1px solid #55555540;
`;
