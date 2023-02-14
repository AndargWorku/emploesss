import styled, { createGlobalStyle } from "styled-components";

interface Text {
  alignment?: string;
  size?: string;
  width?: string;
  fw?: string;
  pl?: string;
  mt?: string;
}

interface TextFormat {
  fs?: string;
  fw?: string;
  color?: string;
  type?: string;
  mt?: string;
  ff?: string;
}

interface scale {
  w?: string;
  h?: string;
}

interface Props {
  mb?: string;
  margin?: string;
  mt?: string;
  color?: string;
}

interface layout {
  background?: string;
}

interface Display {
  width?: string;
  p?: string;
}

interface ActiveLink {
  background?: string;
}

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #ecf0f4;
}
`;

export const FullLayout = styled.div<layout>`
  width: 100vw;
  height: 100vh;
  background: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h2<Props>`
  font-size: 20px;
  font-weight: 400;
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ color }) => (color ? color : "#000")};
  text-align: start;
`;

export const DisplayArea = styled.div<Display>`
  width: ${({ width }) => (width ? width : "90%")};
  height: auto;
  background: #fff;
  border-radius: 7px;
  margin-top: 2rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2),
    4px 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: ${({ p }) => (p ? p : "0.6rem 0.2rem 0.2rem 0.2rem")};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavbarContainer = styled.div`
  width: 22%;
  align-items: start;
  min-height: 100vh;
  background: #fff;
  border-right: 1px solid #55555530;
  padding-top: 0.3rem;
`;

export const UpperNavBar = styled.div`
  background: #fff;
`;

export const NavbarCompanyDesc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  background: #fff;
  margin: 0 7%;
  cursor: pointer;
`;

export const NavbarLogo = styled.img<scale>`
  width: ${({ w }) => (w ? w : "6rem")};
  height: ${({ h }) => (h ? h : "auto")};
  background: #fff;
`;

export const NavbarName = styled.p`
  font-size: 28px;
  font-weight: bold;
  background: #fff;
  margin-top: 0.4rem;
  margin-left: -1.3rem;
`;

export const NavbarProfile = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: #fff;
`;

export const NavbarImg = styled.img`
  width: 30%;
  margin: 0 auto;
  background: #fff;
  border-radius: 15px;
`;

export const NavName = styled.p<Text>`
  width: ${({ width }) => (width ? width : "")}
  font-size: ${({ size }) => (size ? size : "0.7rem")};
  color: #000;
  font-weight: ${({ fw }) => (fw ? fw : "300")};
  background: #fff;
  margin-top: ${({ mt }) => (mt ? mt : "8px")};
  padding-left: ${({ pl }) => (pl ? pl : "")};
  
`;
export const NavProfileRole = styled.p`
  font-size: 0.7rem;
  color: #000;
  font-weight: 500;
  background: #fff;
`;

export const NavbarList = styled.ul`
  width: 100%;
  margin-top: 1.7rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 2rem 4px;
  background: #fff;
`;

export const NavLinks = styled.a<ActiveLink>`
  text-decoration: none;
  color: black;
  background: ${({ background }) => background};
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  padding-left: 7%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 7px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:hover {
    background: #dee2e6;
  }
  }
`;

export const Container = styled.div`
  padding-left: 1.5%;
`;

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const Divider = styled.div`
  width: 78%;
`;

export const NormalText = styled.label<TextFormat>`
  font-size: ${({ fs }) => (fs ? fs : "")};
  font-weight: ${({ fw }) => (fw ? fw : "")};
  color: ${({ color }) => (color ? color : "")};
  text-transform: ${({ type }) =>
    type === "email" ? "lowercaser" : "capitalize"};
  background: transparent;
  margin-top: ${({ mt }) => (mt ? mt : "")};
  font-family: ${({ ff }) => (ff ? ff : "")};
`;

export default GlobalStyle;
