import styled from "styled-components";

interface tooltip {
  tooltip?: string;
}

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ecf0f4;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const SearchArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  background: transparent;
`;

export const SearchInput = styled.span`
  display: flex;
  align-items: center;
  background: #fff;
  width: auto;
  border-radius: 2rem;
  padding: 3px 5px;
`;

export const Search = styled.input`
  type: text;
  width: 200px;
  outline: none;
  border: none;
  background: transparent;
  color: #55555595;
`;

export const AddButton = styled.button`
  background: #3f51b5;
  color: #fff;
  border-radius: 4rem;
`;

export const ToolTips = styled.div`
  margin-top: 3px;
  position: relative;
  display: inline-block;

  &:hover {
    .tooltiptext {
      visibility: visible;
    }
  }
`;

export const ToolTipText = styled.span<tooltip>`
  visibility: hidden;
  width: auto;
  background-color: #00000060;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 3px 5px;
  position: absolute;
  top: 3rem;
  left: 0rem;
  z-index: 1;
`;
