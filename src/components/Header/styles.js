import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 70px;
  background: white;
  z-index: 1000;
  box-shadow: 0px 0px 10px gray;

`;
export const ContentContainer = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;
export const LogoContainer = styled.div`
  padding-top: 8px;
  padding-left: 150px;
  width: 150px;
  margin: 0;
  display: table-cell;
`;

export const Logo = styled.span`
  font-size: 25px;
  color: black;
`;

export const SubLogo = styled.span`
  font-size: 15px;
  color: gray;
`;

export const SearchField = styled.div`
  top: 20px;
  margin-top: -25px;
  width: 100px;
  float: right;
  padding-right: 55px;
  display: table-cell;
  > input {
    outline: 0.5px;
    box-shadow: 0px 0px 10px gray;
    border-radius: 15px;
  }
`;

export const AvatarContainer = styled.div`
  margin-top: -40px;
  display: table-cell;
`;
export const Avatar = styled.div`
  flex: 0 0 40px;
  margin-left: 30px;
  position: relative;
  cursor: pointer;
  padding-top: 40px;
  > img{
    width: 40px;
    height: 40px;
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-feature-settings: 'tnum';
    position: relative;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    line-height: 32px;
    border-radius: 50%;
  }
`;
export const UserName = styled.span``;
