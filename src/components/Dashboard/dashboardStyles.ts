import styled from "styled-components";

interface textsize {
  s?: string;
  color?: string;
  ml?: string;
}

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Cards = styled.div`
  background: #fff;
  width: 20%;
  height: 80px;
  position: relative;
  align-text: right;
  align-contents: right;
  border-radius: 7px;
  margin-top: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardText = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.7rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const Text = styled.div<textsize>`
  font-size: ${({ s }) => (s ? s : "12px")};
  color: ${({ color }) => (color ? color : "black")};
  font-weight: 400;
  background: transparent;
  text-transform: capitalize;
  margin-left: ${({ ml }) => (ml ? ml : "")};
`;


