import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 10px gray;
  background-color: white;

`;

export const LogoContainer = styled.div`
  padding-top: 8px;
  padding-left: 150px;
  width: 150px;
  margin: 0;
`;

export const Logo = styled.div`
  font-size: 25px;
  color: black;
`;

export const SubLogo = styled.div`
  font-size: 15px;
  color: gray;
`;

export const SearchField = styled.div`
  top: 20px;
  padding-left: 80%;
  > input {
    outline: 0.5px;
    box-shadow: 0px 0px 10px gray;
    border-radius: 15px;
  }
`;
