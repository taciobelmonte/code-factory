import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
`;

export const ProductContainer = styled.div`
  box-shadow: 0 0 4px #ccc;
  padding: 0 20px;
  border-radius: 5px;
  margin: 10px;
  width: 98%;
  height: 100px;
  box-sizing: border-box;
  position: relative;

  @media (min-width: 767px) {
    width: 45%;
  }

  @media (min-width: 992px) {
    width: 31%;
  }
`;

export const Rating = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: #fdd023;
  color: #fff;
  padding: 5px 10px;
  border-radius: 0 5px 0 0;
`;
