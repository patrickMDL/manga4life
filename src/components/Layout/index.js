import Header from "../Header";
import Feed from "../Feed";
import React from "react";
import { Container, ContentContainer } from "./styles";
function Layout({ children }, props) {
  return (
    <>
      <Header></Header>
      <ContentContainer>
        <Feed></Feed>
      </ContentContainer>
    </>
  );
}

export default Layout;
