import styled from "styled-components";
export const HeaderContainer = styled.header`
  background: #fff;
  padding: 1.5rem 0;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 576px) {
    width: auto;
    height: 60px;
  }
`;