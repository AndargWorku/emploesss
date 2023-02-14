import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: start;
  padding: 2rem 4rem;
  gap: 2.5rem;
  border-radius: 10px;
`;

export const ProfileContainer = styled(DetailWrapper)`
  width: auto;
  flex-direction: row;
  align-items: center;
  padding: 0 0;
  gap: 10px;
`;

export const NamePositionContainer = styled(DetailWrapper)`
  display: flex;
  width: auto;
  height: auto;
  gap: 0;
  padding: 0 0;
`;

export const Badge = styled.div`
  width: auto;
  background: transparent;
  border-radius: 7px;
  padding: 0.1rem 1rem;
  border: 1.5px solid #7ec581;
`;

export const Information = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
`;
