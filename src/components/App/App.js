import React, { useState } from "react";
import Product from "./../Product/Product";
import mocks from "../../data/mocks";
import { Products, Container, NoResults } from "./App.styled";
import Layout from "./../Layout/Layout/Layout";
import Header from "./../Layout/Header/Header";
import Filters from "./../Filters/Filters";
import "./../../assets/css/global.css";
import { filterProductsBy } from "./../../utils/filterProductsBy";

function App() {
  const [products, setProducts] = useState(mocks.products);

  const getFilters = (filters) => {
    const filtered = filterProductsBy(mocks.products, filters);
    setProducts(filtered);
  };

  return (
    <Container>
      <Header />
      <Layout>
        <Filters sendFilters={getFilters} />
        <Products>
          {products.length === 0 && (
            <NoResults>No products available!</NoResults>
          )}
          {products &&
            products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
        </Products>
      </Layout>
    </Container>
  );
}

export default App;
