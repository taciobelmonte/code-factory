import React from "react";
import * as Style from "./Header.styled";
import logo from "./../../../assets/images/logo.png";

const Header = () => {
  return (
    <Style.HeaderContainer>
      <Style.Image src={logo} alt="Logo" />
    </Style.HeaderContainer>
  );
};

export default Header;
