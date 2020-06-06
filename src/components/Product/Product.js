import React from 'react';
import PropTypes from 'prop-types';
import {ProductContainer, Rating, Title} from './Product.styled';

const Product = ({ name, rating, id }) => (
  <ProductContainer key={id}>
    <Title>{name}</Title>
    <Rating>Rating: {rating}</Rating>
  </ProductContainer>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Product;