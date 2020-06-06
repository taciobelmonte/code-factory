import React from "react";
import PropTypes from "prop-types";
import * as Style from "./../Layout/Layout.styled";

const Layout = ({ children, isMobileOpen }) => {
  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.CenterContainer>{children}</Style.CenterContainer>
      </Style.Container>
    </Style.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
